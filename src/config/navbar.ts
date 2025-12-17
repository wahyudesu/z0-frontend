export type MenuItem = {
	title: string;
	href?: string;
	description?: string;
};

export type DropdownMenuItem = {
	trigger: string;
	featured?: {
		title: string;
		description: string;
		href: string;
	};
	items: MenuItem[];
};

export type SimpleMenuItem = {
	trigger: string;
	items: MenuItem[];
};

export const dropdownMenus: DropdownMenuItem[] = [
	{
		trigger: "What's New",
		featured: {
			title: "shadcn/ui",
			description: "Beautifully designed components built with Tailwind CSS.",
			href: "/",
		},
		items: [
			{
				title: "Introduction",
				href: "/docs",
				description:
					"Re-usable components built using Radix UI and Tailwind CSS.",
			},
			{
				title: "Installation",
				href: "/docs/installation",
				description: "How to install dependencies and structure your app.",
			},
			{
				title: "Typography",
				href: "/docs/primitives/typography",
				description: "Styles for headings, paragraphs, lists...etc",
			},
		],
	},
	{
		trigger: "Features",
		featured: {
			title: "Z0 Features",
			description: "Powerful features for modern web development.",
			href: "/features",
		},
		items: [
			{
				title: "Fast Performance",
				href: "/features/performance",
				description: "Lightning-fast loading and execution.",
			},
			{
				title: "Easy Integration",
				href: "/features/integration",
				description: "Seamlessly integrate with existing systems.",
			},
			{
				title: "Developer Friendly",
				href: "/features/developer",
				description: "Built with developers in mind.",
			},
		],
	},
];

export const simpleMenus: SimpleMenuItem[] = [];
