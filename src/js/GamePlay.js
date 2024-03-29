export default class GamePlay {

    constructor(field, char) {
        this.field = field;
        this.fieldSize = 4;
        this.char = char;
        this.activeChar = null;
    }

    init() {
        this.redrawField();
        this.start();
        this.onFieldClick();
    }

    redrawField() {
        const field = this.field.viewField(this.fieldSize);
        const body = document.querySelector('body');
        const container = document.createElement('div');
        container.classList.add('container');
        body.appendChild(container);
        container.innerHTML = `        
            <div class="status">
                Убито гоблинов: <span class="dead">0</span><br>
                Промахов: <span class="lost">0</span><br>
            </div>`;
        container.appendChild(field);
        this.fieldBlocks = [...field.children];
    }

    generatePosition() {
        const position = Math.floor(Math.random() * this.fieldSize ** 2);
        if (position === this.position) {
            this.generatePosition();
            return;
        }
        this.deleteChar();
        this.position = position;
        this.addChar();
    }

    addChar() {
        this.activeChar = this.char.viewChar();
        this.fieldBlocks[this.position].appendChild(this.activeChar);
    }

    deleteChar() {
        if (this.activeChar === null) {
            return;
        }
        this.fieldBlocks[this.position].firstChild.remove();
    }

    start() {
        setInterval(() => {
            this.generatePosition();
        }, 1000);
    }

    onFieldClick() {
        const dead = document.querySelector('.dead');
        const lost = document.querySelector('.lost');
        const blocks = document.querySelectorAll('.field_block');

        for(let block of blocks) {
            block.addEventListener('click', () => {
                if (block.firstChild == null) {
                    lost.textContent++;
                } else {
                    dead.textContent++;
                    block.firstChild.classList.remove('char');
                }
                if (lost.textContent == 5) {
                    alert("Вы проиграли!");
                    dead.textContent = 0;
                    lost.textContent = 0;
                }
            })
        }
    } 
}