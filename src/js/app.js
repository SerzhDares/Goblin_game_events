import Field from "./Field";
import Character from "./Character";
import GamePlay from "./GamePlay";

const field = new Field();
const char = new Character();
const game = new GamePlay(field, char);

game.init();