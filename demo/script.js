document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 150, timeBetweenNPCs: 2900, npcCollisionRadius: 50, actionDuration:600, jumpHeight: 350});
});