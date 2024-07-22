import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-notebook_pencil",
	args: {
		ariaLabel: "",
	},
	decorators: [
		(story, storyContext) => `
			<div class="${storyContext.globals.theme}">
				${story()}
			</div>
		`,
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const notebook_pencil: Story = {
	render: (args: Args) => `
		<icon-notebook_pencil
			aria-label="${args.ariaLabel}"
		/>
	`,
};
