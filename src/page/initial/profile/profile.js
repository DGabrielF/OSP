export const Profile = {
  state: {
    selectedOption: null,
    options: [
      "profile",
      "achievements",
      "statistics",
      "account",
      "settings"
    ]
  },
  render: () => {
    Profile.div = document.createElement("div");
    Profile.div.className = "personal flex-row";
    
    Profile.avatar = document.createElement("div");
    Profile.avatar.className = "avatar";
    Profile.avatar.addEventListener("click", () => {
      Profile.personalArea.style.display = "flex";
    })
    
    Profile.personalArea = document.createElement("div");
    Profile.personalArea.style.display = "none";
    Profile.personalArea.className = "personal-area flex-row";

    Profile.div.append(Profile.avatar, Profile.personalArea);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    const image = document.createElement("img");
    image.src = "src/assets/menu-icons/close.svg";
    closeButton.appendChild(image)
    closeButton.addEventListener("click", () => {
      Profile.personalArea.style.display = "none";
    })
    Profile.personalArea.appendChild(closeButton);


    Profile.sideMenu = document.createElement("div");
    Profile.sideMenu.className = "side-menu flex-col";
    Profile.personalArea.appendChild(Profile.sideMenu);

    for(const option of Profile.state.options) {
      const button = document.createElement("button");
      button.textContent = option;
      button.dataset.key = option;
      button.addEventListener("click", () => {
        Profile.cleanSelected();
        button.disabled = true;
        Profile.state.selectedOption = option;
      });
      Profile.sideMenu.appendChild(button)
    }

    Profile.content = document.createElement("div");
    Profile.content.className = "content flex-col"
    Profile.personalArea.appendChild(Profile.content);

    return Profile.div;
  },

  cleanSelected: () => {
    for (const child of MainMenu.optionArea.children) {
      if (child.disabled) {
        child.disabled = false;
        child.style.backgroundColor = "transparent";
      }
    }
  },
}