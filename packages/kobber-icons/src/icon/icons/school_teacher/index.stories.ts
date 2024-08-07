import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-school_teacher",
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

export const school_teacher: Story = {
	render: (args: Args) => `
		<icon-school_teacher
			aria-label="${args.ariaLabel}"
		/>
	`,
};
