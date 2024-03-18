import { LitElement, css, html } from "lit"
import { consume } from "@lit/context"
import { customElement, property } from "lit/decorators.js"
import { Theme, themeContext } from "../utils/theme-context"

@customElement("kobber-input")
export class Input extends LitElement {
    @consume({ context: themeContext, subscribe: true })
    theme?: Theme

    @property()
    hasError: boolean = false

    @property()
    state: "hover" | "active" | "focus" | "disabled" | "default" = "default"

    @property()
    label: string = ""

    @property()
    placeholder: string = "Input placeholder"

    @property()
    errorMessage: string = "Error message"

    contextChanged() {
        this.requestUpdate()
    }

    render() {
        const themeStyles = this.themedStyles()

        return html`
            <style>
                ${themeStyles}
            </style>
            <label>${this.label}</label>
            <input class=${this.classList.value} placeholder=${this.placeholder} />
        `
    }

    themedStyles = () => {
        const tokens = this.theme?.tokens
        if (!tokens) {
            console.log("should never occur")
            return css``
        }

        return css`
            input {
                border: 1px solid transparent;
                padding: 20px;
            }
        `
    }
}
