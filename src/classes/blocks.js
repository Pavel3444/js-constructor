import {col, css, row} from "../utils";

export class Block {
    constructor( value, options) {

        this.value = value;
        this.options = options;
    }
    toHTML(){
        throw new Error('метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super( value, options);

    }
    toHTML(){
        const {tag = 'h1', styles } = this.options;
        return  row(col(`<${tag}>${this.value}<${tag}/>`), css(styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        const {styles, alt = '', imageStyles} = this.options;
        return  row(`<img src="${this.value}" style="${css(imageStyles)}">`, css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        const {styles} = this.options;
        const cont = this.value.map(item => col(item)).join('');
        return  row(cont, css(styles));
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        const {styles} = this.options;
        return  row(col(`<p>${this.value}</p>`), css(styles))
    }
}
