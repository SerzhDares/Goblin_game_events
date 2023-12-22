export default class Character {
    
    constructor() {
        this.char = undefined;
    }

    generateChar() {
        const char = document.createElement('div');
        char.classList.add('char');
        this.char = char;
    }

    viewChar() {
        this.generateChar();
        return this.char;
    }
}