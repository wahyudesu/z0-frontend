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
		trigger: "Blocks",
		featured: {
			title: "Z0 Blocks",
			description: "Community resources and contributions.",
			href: "/",
		},
		items: [
			{
				title: "Feedback",
				href: "/feedback",
				description: "Share your thoughts and help us improve.",
			},
			{
				title: "Roadmap",
				href: "/roadmap",
				description: "See what's coming next and our future plans.",
			},
			{
				title: "Request Feature",
				href: "/request-feature",
				description: "Suggest new features or improvements.",
			},
		],
	},
];

export const simpleMenus: SimpleMenuItem[] = [];
