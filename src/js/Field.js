export default class Field {
    
    constructor() {
        this.field = null;
    }

    generateField(size) {
        const field = document.createElement('div');
        field.classList.add('field');

        for(let i = 0; i < Math.floor(size) ** 2; i++) {
            const fieldBlock = document.createElement('div');
            fieldBlock.classList.add('field_block');
            field.appendChild(fieldBlock);
        }
        this.field = field;
    }

    viewField(size) {
        this.generateField(size);
        return this.field;
    }
}