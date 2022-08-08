import React, { Fragment } from 'react';

export type NavLinkType = {
	title: string;
	className?: string;
	link?: string;
};
let ButtonLink = ({ className = '', title, link, ...props }: NavLinkType) => (
	<a {...props} className={className} href={link || '#'}>
		{title}
	</a>
);

try {
	const { Link: ReactRouterLink } = require('react-router-dom');
	// eslint-disable-next-line react/display-name
	ButtonLink = ({ className = '', title, link, ...props }: NavLinkType) => (
		<ReactRouterLink {...props} className={className} href={link || '#'}>
			{title}
		</ReactRouterLink>
	);
} catch (error) {
	try {
		const NextLink = require('next/link');
		// eslint-disable-next-line react/display-name
		ButtonLink = ({ className = '', title, link, ...props }: NavLinkType) => (
			<NextLink href={link || '#'}>
				<a {...props} className={className}>
					{title}
				</a>
			</NextLink>
		);
	} catch (error) {
		// eslint-disable-next-line react/display-name
		ButtonLink = ({ className = '', title, link, ...props }: NavLinkType) => (
			<a {...props} className={className} href={link || '#'}>
				{title}
			</a>
		);
	}
}

export type BreadcrumbLinkType = {
	active?: boolean;
	colors?: {
		active: string;
		inactive: string;
	};
	href: string;
	title: string;
};

const BreadcrumbLink = ({
	active,
	colors,
	href,
	title,
}: BreadcrumbLinkType) => {
	return (
		<ButtonLink
			link={href || '#'}
			className={`${
				active
					? colors?.active || 'text-primary-600'
					: colors?.inactive || 'text-gray-400 hover:text-primary-600'
			} cursor-pointer capitalize font-semibold my-1 text-base md:text-lg`}
			title={title}
		/>
	);
};

BreadcrumbLink.defaultProps = {
	colors: {
		active: 'text-primary-600',
		inactive: 'text-gray-400 hover:text-primary-600',
	},
};

export type BreadcrumbsType = {
	colors?: {
		active: string;
		inactive: string;
	};
	links: { active?: boolean; title: string; href: string }[];
};

const Breadcrumbs = ({ colors, links }: BreadcrumbsType) => (
	<div className="flex flex-wrap items-center">
		{links.map((link, index) => {
			return (
				<Fragment key={index}>
					<BreadcrumbLink colors={colors} {...link} />
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
