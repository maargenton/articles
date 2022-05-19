import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

const shareStyles = css`
    div {
        min-width: 200px;
        min-height: 150px;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
    }
`;


export class MyComponentV1 extends LitElement {
    static get styles() {
        return [css`
			:host {
                --custom-color: hsl(5, 60%, 20%);
                --custom-surface: hsl(5, 69%, 81%);
            }
			*{
                box-sizing: border-box;
            }
            div {
                color: var(--custom-color);
                background-color: var(--custom-surface);
                border: 1px solid var(--custom-color);
            }`
            , shareStyles
        ];
    }

    render() {
        return html`<div><slot></slot></div>`;
    }
}
customElements.define('my-component-v1', MyComponentV1);

export class MyComponentV2 extends LitElement {
    static get styles() {
        return [css`
			:host {
            }
			*{
                box-sizing: border-box;
            }
            div {
                color: var(--custom-color, hsl(5, 60%, 20%));
                background-color: var(--custom-surface, hsl(5, 69%, 81%));
                border: 1px solid var(--custom-color, hsl(5, 60%, 20%));
            }`
            , shareStyles
        ];
    }

    render() {
        return html`<div><slot></slot></div>`;
    }
}
customElements.define('my-component-v2', MyComponentV2);

export class MyComponentV3 extends LitElement {
    static get styles() {
        return [css`
            :host {
                --_custom-color: var(--custom-color, hsl(5, 60%, 20%));
                --_custom-surface: var(--custom-surface, hsl(5, 69%, 81%));
            }
            :host>* {
                --custom-color: var(--_custom-color);
                --custom-surface: var(--_custom-surface);
            }
			*{
                box-sizing: border-box;
            }
            div {
                color: var(--custom-color);
                background-color: var(--custom-surface);
                border: 1px solid var(--custom-color);
            }`
            , shareStyles
        ];
    }

    render() {
        return html`<div><slot></slot></div>`;
    }
}
customElements.define('my-component-v3', MyComponentV3);
