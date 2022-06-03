// Importar a próxima cena
import { cena1 } from "./cena1.js";

// Criar a cena 2
var cena2 = new Phaser.Scene("Cena 2");

cena2.preload = () => {
  // Imagem de fundo
  this.load.image("flor", "./assets/cena2.png");
};

cena2.create = () => {
  // Botão com a imagem de fundo
  var button = this.add.image(400, 300, "flor", 0).setInteractive();

  // Ao clicar no botão, volta para a cena 1
  button.on(
    "pointerdown",
    () => {
      this.scene.start(cena1);
    },
    this
  );
};

cena2.update = () => {};

// Exportar a cena
export { cena2 };
