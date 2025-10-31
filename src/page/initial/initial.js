import { ProgressBar } from "../../components/ProgressBar/ProgressBar.js";
import { Attributes } from "../attributes/attributes.js";
import { Equipment } from "../equipments/equipments.js";
import { Hotkeys } from "./hotkeys/hotkeys.js";
import { MainMenu } from "./menu/menu.js";
import { Profile } from "./profile/profile.js";
import { SkillSets } from "./skillSets/skillSets.js";

export const Initial = {
  state: {
    user: {},
    pages: {
      backpack: Equipment,
      attributes: Attributes,
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

    Initial.section.appendChild(Profile.render());
    Initial.section.appendChild(Hotkeys.render());
    Initial.section.appendChild(SkillSets.render());


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