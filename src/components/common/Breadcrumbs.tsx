import React, { ReactNode, Fragment } from "react";

export type NavLinkType = {
	children: ReactNode;
	href?: string;
	to?: string;
	className?: string;
	props?: any
}

let NavLink = ({ children, ...props }: NavLinkType) => (
	<a {...props} href="#">
		{children}
	</a>
);

try {
	const { Link } = require("react-router-dom");
	NavLink = ({
		children,
		to,
		...props
	}: NavLinkType) => (
		<Link {...props} to={to || "#"}>
			{children}
		</Link>
	);
} catch (error) {
	try {
		const NextLink = require("next/link");
		NavLink = ({
			children,
			href,
			className,
			...props
		}: NavLinkType) => (
			<NextLink {...props} href={href || "#"}>
				<a className={className || ""}>{children}</a>
			</NextLink>
		);
	} catch (error) {
		NavLink = ({
			children,
			href,
			...props
		}:NavLinkType) => (
			<a {...props} href={href || "#"}>
				{children}
			</a>
		);
	}
}

const BreadcrumbLink = ({
	active,
	href,
	title,
}: {
	active?: boolean;
	href: string;
	title: string;
}) => (
	<NavLink
		to={href || "#"}
		className={`${
			active ? "text-indigo-600" : "text-gray-400 hover:text-indigo-600"
		} cursor-pointer capitalize font-semibold my-1 text-base md:text-lg`}
	>
		{title}
	</NavLink>
);

const Breadcrumbs = ({
	links,
}: {
	links: { title: string; href: string }[];
}) => (
	<div className="flex flex-wrap items-center">
		{links.map((link, index) => {
			return (
				<Fragment key={index}>
					<BreadcrumbLink {...link} />
					{links.length - 1 !== index && (
						<span className="mx-2 text-gray-400 font-semibold text-base">
							/
						</span>
					)}
				</Fragment>
			);
		})}
	</div>
);

export default Breadcrumbs;
