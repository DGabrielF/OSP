export const playerSprite = {
  render: () => { 
    playerSprite.div = document.createElement("div");
    playerSprite.div.className = "self player";

    return playerSprite.div;
  },
}