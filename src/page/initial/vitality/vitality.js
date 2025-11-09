import { ProgressBar } from "../../../components/ProgressBar/ProgressBar.js";
import { State } from "../../../scripts/state.js";

export const Vitality = {
  render: () => {
    Vitality.div = document.createElement("div");
    Vitality.div.className = "vitaliity flex-col";

    const hpBarInstance = new ProgressBar({
      value: State.player.attributes.vitality.health.current || State.player.attributes.vitality.health.max,
      maxValue: State.player.attributes.vitality.health.max,
      showText: false
    })
    hpBarInstance.listenToState("player.attributes.vitality.health.current");
    const hpBar = hpBarInstance.render();
    hpBar.classList.add("hp-bar");
    Vitality.div.appendChild(hpBar);


    const spBarInstance = new ProgressBar({
      value: State.player.attributes.vitality.stamina.current || State.player.attributes.vitality.stamina.max,
      maxValue: State.player.attributes.vitality.stamina.max,
      showText: false
    })
    spBarInstance.listenToState("player.attributes.vitality.stamina.current");
    const spBar = spBarInstance.render();
    spBar.classList.add("sp-bar");
    Vitality.div.appendChild(spBar);

    const mpBarInstance = new ProgressBar({
      value: State.player.attributes.vitality.mana.current || State.player.attributes.vitality.mana.max,
      maxValue: State.player.attributes.vitality.mana.max,
      showText: false
    })
    mpBarInstance.listenToState("player.attributes.vitality.mana.current");
    const mpBar = mpBarInstance.render();
    mpBar.classList.add("mp-bar");
    Vitality.div.appendChild(mpBar)

    const currentEp = State.get("player.attributes.vitality.energy.current");
    const maxEp = State.get("player.attributes.vitality.energy.current");
    const epBarInstance = new ProgressBar({
      value: currentEp,
      maxValue: maxEp,
      showText: false
    })
    const epBar = epBarInstance.render();
    epBarInstance.listenToState("player.attributes.vitality.energy.current");
    epBar.classList.add("ep-bar");
    Vitality.div.appendChild(epBar)

    return Vitality.div;
  }
}