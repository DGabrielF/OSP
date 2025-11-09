import { State } from "../../state.js";

export const Regen = {
  interval: 2000,
  timer: null,

  start: () => {
    if (Regen.timer) return;
    Regen.timer = setInterval(() => Regen.tick(), Regen.interval);
  },

  stop: () => {
    clearInterval(Regen.timer);
    Regen.timer = null;
  },

  tick: () => {
    const energy = State.get("player.attributes.vitality.energy");    
    const health = State.get("player.attributes.vitality.health");    
    const stamina = State.get("player.attributes.vitality.stamina");
    const mana = State.get("player.attributes.vitality.mana");
    healthRegen(stamina, energy, mana, health);
    staminaRegen(stamina, energy, mana, health);  
    manaRegen(mana, energy, stamina, health);
    State.set("player.flags.lastUpdate", Date.now());
  },

  offline: () => {
    const lastUpdate = State.get("player.flags.lastUpdate");
    if (!lastUpdate) return;

    const now = Date.now();
    const elapsed = now = lastUpdate; //ms
    const ticks = Math.floor(elapsed, Regen.interval);
    if (ticks <= 0) return;

    while (ticks > 0) {
      ticks = ticks - 1
      Regen.tick()      
    }
  }
}

function healthRegen(stamina, energy, mana, health) {
  if (health.current < health.max) {
    if (energy.current > 0) {
      const newEnergy = energy.current - 1;
      State.set("player.attributes.vitality.energy.current", newEnergy);
      const newHealth = health.current + State.get("player.attributes.vitality.health.regenRate.energy");
      State.set("player.attributes.vitality.health.current", newHealth);
    } else if (stamina.current / stamina.max > health.current / health.max) {
      const newStamina = stamina.current - 1;
      State.set("player.attributes.vitality.stamina.current", newStamina);
      const newHealth = health.current + State.get("player.attributes.vitality.health.regenRate.health");
      State.set("player.attributes.vitality.health.current", newHealth);
    } else if (mana.current / mana.max > health.current / health.max) {
      const newHealth = mana.current - 1;
      State.set("player.attributes.vitality.mana.current", newHealth);
      const newStamina = health.current + State.get("player.attributes.vitality.health.regenRate.mana");
      State.set("player.attributes.vitality.health.current", newStamina);
    }
  }
}

function staminaRegen(stamina, energy, mana, health) {
  if (stamina.current < stamina.max) {
    if (energy.current > 0) {
      const newEnergy = energy.current - 1;
      State.set("player.attributes.vitality.energy.current", newEnergy);
      const newStamina = stamina.current + State.get("player.attributes.vitality.stamina.regenRate.energy");
      State.set("player.attributes.vitality.stamina.current", newStamina);
    } else if (mana.current / mana.max > stamina.current / stamina.max) {
      const newMana = mana.current - 1;
      State.set("player.attributes.vitality.mana.current", newMana);
      const newStamina = stamina.current + State.get("player.attributes.vitality.stamina.regenRate.mana");
      State.set("player.attributes.vitality.stamina.current", newStamina);
    } else if (health.current / health.max > stamina.current / stamina.max && stamina.current < 0) {
      const newHealth = health.current - 1;
      State.set("player.attributes.vitality.health.current", newHealth);
      const newStamina = stamina.current + State.get("player.attributes.vitality.stamina.regenRate.health");
      State.set("player.attributes.vitality.stamina.current", newStamina);
    }
  }
}

function manaRegen(mana, energy, stamina, health) {
  if (mana.current < mana.max) {
    if (energy.current > 0) {
      const newEnergy = energy.current - 1;
      State.set("player.attributes.vitality.energy.current", newEnergy);
      const newMana = mana.current + State.get("player.attributes.vitality.mana.regenRate.energy");
      State.set("player.attributes.vitality.mana.current", newMana);
    } else if (stamina.current / stamina.max > mana.current / mana.max) {
      const newStamina = stamina.current - 1;
      State.set("player.attributes.vitality.stamina.current", newStamina);
      const newMana = mana.current + State.get("player.attributes.vitality.mana.regenRate.stamina");
      State.set("player.attributes.vitality.mana.current", newMana);
    } else if (health.current / health.max > mana.current / mana.max && mana.current < 0) {
      const newHealth = health.current - 1;
      State.set("player.attributes.vitality.health.current", newHealth);
      const newMana = mana.current + State.get("player.attributes.vitality.mana.regenRate.health");
      State.set("player.attributes.vitality.mana.current", newMana);
    }
  }
}
