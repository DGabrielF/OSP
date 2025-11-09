import { ProgressBar } from "../../components/ProgressBar/ProgressBar.js";
import { GameMap } from "./map/map.js";
import { Attributes } from "../attributes/attributes.js";
import { Equipment } from "../equipments/equipments.js";
import { Skills } from "../skills/skills.js";
import { Hotkeys } from "./hotkeys/hotkeys.js";
import { MainMenu } from "./menu/menu.js";
import { Profile } from "./profile/profile.js";
import { SkillSets } from "./skillSets/skillSets.js";
import { Vitality } from "./vitality/vitality.js";
import { playerSprite } from "./player/player.js";

export const Initial = {
  state: {
    user: {},
    pages: {
      backpack: Equipment,
      attributes: Attributes,
      skills: Skills,
    }
  },

  render: () => {
    Initial.section = document.createElement("section");
    Initial.section.id = "initial";

    Initial.menu = MainMenu.render();
    Initial.section.appendChild(Initial.menu);

    Initial.menu.addEventListener("click", () => {
      Initial.content.innerHTML = "";
      if (!Initial.state.pages[MainMenu.state.selectedOption]) return;
      Initial.content.appendChild(Initial.state.pages[MainMenu.state.selectedOption].render());
    });

    Initial.section.appendChild(GameMap.render());
    GameMap.update();
    Initial.section.appendChild(Profile.render());
    Initial.section.appendChild(Hotkeys.render());
    Initial.section.appendChild(SkillSets.render());
    Initial.section.appendChild(Vitality.render());
    Initial.section.appendChild(playerSprite.render());


    Initial.content = document.createElement("div");
    Initial.content.className = "content";
    Initial.content.addEventListener("click", (e) => {
      if (e.target.closest("button.close")) {
        e.target.closest("section").remove();
        MainMenu.state.selectedOption = null;
        MainMenu.cleanSelected();
      }
    })

    Initial.section.appendChild(Initial.content);


    return Initial.section;
  }
}