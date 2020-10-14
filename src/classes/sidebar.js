import {block} from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.add);
    }

    get template() {
        return [block('text'), block('title')].join('');
    }

    add = (event) => {
        event.preventDefault();
        const type = event.target,
            value = event.target.value.value,
            styles = event.target.styles.value;

        const newBlock = type === 'text'
            ? new TextBlock(value, {styles})
            : new TitleBlock(value, {styles});

        this.update(newBlock);

        event.target.value.value = '';
        event.target.styles.value = '';

    }
}


