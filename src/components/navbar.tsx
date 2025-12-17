"use client";

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { dropdownMenus, simpleMenus } from "@/config/navbar";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
	const isMobile = useIsMobile();

	return (
		<header className="w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-center gap-6 px-4">
				{/* Logo */}
				<div className="flex items-center space-x-2">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={32}
							height={32}
							className="h-6 w-6"
						/>
					</Link>
				</div>

				{/* Navigation Menu - Centered */}
				<NavigationMenu viewport={isMobile}>
					<NavigationMenuList className="flex-wrap">
						{dropdownMenus.map((menu, index) => (
							<NavigationMenuItem key={index}>
								<NavigationMenuTrigger>{menu.trigger}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										{menu.featured && (
											<li className="row-span-3">
												<NavigationMenuLink asChild>
													<a
														className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
														href={menu.featured.href}
													>
														<div className="mb-2 text-lg font-medium sm:mt-4">
															{menu.featured.title}
														</div>
														<p className="text-muted-foreground text-sm leading-tight">
															{menu.featured.description}
														</p>
													</a>
												</NavigationMenuLink>
											</li>
										)}
										{menu.items.map((item, itemIndex) => (
											<ListItem
												key={itemIndex}
												title={item.title}
												href={item.href || "#"}
											>
												{item.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						))}

						{simpleMenus.map((menu, index) => (
							<NavigationMenuItem key={index} className="hidden md:block">
								<NavigationMenuTrigger>{menu.trigger}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[200px] gap-4">
										<li>
											{menu.items.map((item, itemIndex) => (
												<NavigationMenuLink key={itemIndex} asChild>
													<Link href={item.href || "#"}>
														<div className="font-medium">{item.title}</div>
														{item.description && (
															<div className="text-muted-foreground">
																{item.description}
															</div>
														)}
													</Link>
												</NavigationMenuLink>
											))}
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* GitHub Button */}
				<div>
					<Button variant="outline" size="icon" asChild>
						<Link
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub className="h-4 w-4" />
							<span className="sr-only">GitHub</span>
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
