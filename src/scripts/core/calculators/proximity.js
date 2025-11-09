import { GameMap } from "../../../page/initial/map/map.js";
import { State } from "../../state.js";

export class ProximitySystem {
  constructor(range = 80) { // alcance padrão: 80 pixels
    this.range = range;
    this.creaturesPath = "entities.creatures";
    this.activeProximities = new Set();

    this.listen();
  }

  listen() {
    // Observa mudanças nas coordenadas do player
    State.subscribe("player.location.coordinates", () => this.check());
  }

  check() {
    console.log("teste")
    const player = State.get("player");
    const creatures = State.get(this.creaturesPath) || {};
    if (!player || !creatures) return;

    const playerPos = player.location.coordinates;

    for (const [id, creature] of Object.entries(creatures)) {
      const dist = GameMap.getDistance2D(playerPos, creature.location.coordinates);

      if (dist <= this.range) {
        // dentro do alcance
        if (!this.activeProximities.has(id)) {
          this.activeProximities.add(id);
          this.onEnterProximity(creature);
        }
      } else {
        // fora do alcance
        if (this.activeProximities.has(id)) {
          this.activeProximities.delete(id);
          this.onLeaveProximity(creature);
        }
      }
    }
  }

  onEnterProximity(creature) {
    console.log(`⚔️ O jogador se aproximou de ${creature.personal.name}`);
    // Aqui podemos iniciar combate, mudar cor, etc.
    const el = document.querySelector(`.creature-sprite[data-id="${creature.id}"]`);
    if (el) el.style.filter = "drop-shadow(0 0 6px red)";
  }

  onLeaveProximity(creature) {
    console.log(`👣 O jogador se afastou de ${creature.personal.name}`);
    const el = document.querySelector(`.creature-sprite[data-id="${creature.id}"]`);
    if (el) el.style.filter = "drop-shadow(0 0 6px rgba(0,0,0,0.3))";
  }
}
