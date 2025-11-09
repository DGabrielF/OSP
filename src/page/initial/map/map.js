import { State } from "../../../scripts/state.js";

export const GameMap = {
  render: () => {
    GameMap.div = document.createElement("div");
    GameMap.div.id = "map";

    return GameMap.div;
  },

  update: () => {
    GameMap.div.style.transform = `translate(${-State.player.location.coordinates.x + 400}px, ${-State.player.location.coordinates.y + 300}px)`;
  },

  getDistance2D: (coordA, coordB) => {
    const dx = coordA.x - coordB.x;
    const dy = coordA.y - coordB.y;
    
    console.log(coordA)
    console.log(coordB)
    console.log(dx)
    console.log(dy)
    console.log(Math.sqrt(dx * dx + dy * dy))
    return Math.sqrt(dx * dx + dy * dy)
  }
}

console.log(State)

// Mapa base com limites
// Mapa de colisão
// Mapa de objetos interativos
// Mapa de NPCs
// Sincronizar coordinates com o servidor (para multiplayer).