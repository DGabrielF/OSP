export const Reactive = {
  create: (initialObject) => {}
}

Reactive.create = (initialObject = {}) => {
  const listeners = new Map();

  function notify(path, value) {
    const subs = listeners.get(path);
    if (!subs) return;
    for (const cb of Array.from(subs)) {
      try { cb(value, path); }
      catch (err) { console.error("state listener error:", err); }
    }
  };

  function makeProxy(obj, basePath = "") {
    if (obj && typeof obj === "object" && obj.__isProxy) return obj;
    const handler = {
      get(target, prop, receiver) {
        if (prop === "__isProxy") return true;
        if (prop === "__raw") return target;

        const value = Reflect.get(target, prop, receiver);
        if (value && typeof value === "object") {
          const childPath = basePath ? `${basePath}.${prop}` : `${prop}`;
          return makeProxy(value, childPath);
        }
        return value;
      },

      set(target, prop, value, receiver) {
        const old = target[prop];
        const success = Reflect.set(target, prop, value, receiver);
        if (!success) return false;

        const changedPath = basePath ? `${basePath}.${prop}` : `${prop}`;

        
        if (value && typeof value === "object") {
          target[prop] = value;
        }

        if (old !== value) {
          notify(changedPath, value);

          const parts = changedPath.split(".");
          for (let i = parts.length - 1; i >= 1; i--) {
            const ancestor = parts.slice(0, i).join(".");
            notify(ancestor, get(ancestor));
          }
        }

        return true;
      },

      deleteProperty(target, prop) {
        const success = Reflect.deleteProperty(target, prop);
        if (success) {
          const deletedPath = basePath ? `${basePath}.${prop}` : `${prop}`;
          notify(deletedPath, undefined);
        }
        return success;
      }
    };
    return new Proxy(obj, handler);
  };

  const proxyRoot = makeProxy(initialObject, "");

  function get(path) {
    if (!path) return proxyRoot;
    const parts = path.split(".").filter(Boolean);
    let cur = initialObject;
    for (const p of parts) {
      if (cur == null) return undefined;
      cur = cur[p];
    }
    return cur;
  };
  proxyRoot.get = get;

  function set(path, value) {
    const parts = path.split(".");
    let cur = initialObject;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      if (cur[p] == null || typeof cur[p] !== "object") cur[p] = {};
      cur = cur[p];
    }
    const last = parts[parts.length - 1];
    cur[last] = value;

    const changedPath = path;
    notify(changedPath, value);

    const ancestorParts = parts;
    for (let i = ancestorParts.length - 1; i >= 1; i--) {
      const ancestor = ancestorParts.slice(0, i).join(".");
      notify(ancestor, get(ancestor));
    }
  };
  proxyRoot.set = set;

  function subscribe(path, callback) {
    if (!listeners.has(path)) listeners.set(path, new Set());
    listeners.get(path).add(callback);
    // retorna função de unsubscribe
    return () => {
      const setSubs = listeners.get(path);
      if (!setSubs) return;
      setSubs.delete(callback);
      if (setSubs.size === 0) listeners.delete(path);
    };
  };
  proxyRoot.subscribe = subscribe;

  return proxyRoot;
} 