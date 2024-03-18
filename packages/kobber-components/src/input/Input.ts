import { LitElement } from "lit"
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
}
