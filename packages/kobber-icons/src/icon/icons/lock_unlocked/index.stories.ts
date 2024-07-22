import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-lock_unlocked",
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

export const lock_unlocked: Story = {
	render: (args: Args) => `
		<icon-lock_unlocked
			aria-label="${args.ariaLabel}"
		/>
	`,
};
