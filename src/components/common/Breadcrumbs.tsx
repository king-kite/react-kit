import React, { Fragment } from 'react';

export interface RenderAsComponentType extends BaseLinkType {
	className?: string;
}

export type RenderAsType = (props: RenderAsComponentType) => JSX.Element;

export type BaseLinkType = {
	active?: boolean;
	colors?: {
		active?: string;
		inactive?: string;
	};
	link: string;
	title: string;
};

export interface BreadcrumbLinkType extends BaseLinkType {
	className?: string;
	renderAs?: RenderAsType;
	overwriteClassName?: boolean;
}

export type BreadcrumbsType = {
	colors?: {
		active: string;
		inactive: string;
	};
	links: BreadcrumbLinkType[];
};

export const defaultClassName =
	'cursor-pointer capitalize font-semibold my-1 text-base md:text-lg';

const DefaultLink = ({
	className = '',
	link,
	title,
	...props
}: RenderAsComponentType) => (
	<a {...props} href={link || '#'} className={className}>
		{title}
	</a>
);

const BreadcrumbLink = ({
	renderAs: RenderAsComponent,
	className = '',
	overwriteClassName = false,
	...props
}: BreadcrumbLinkType) => {
	const compClassName = `${
		props?.active
			? props?.colors?.active || 'text-primary-600'
			: props?.colors?.inactive || 'text-gray-400 hover:text-primary-600'
	} ${defaultClassName}`;

	const classes = overwriteClassName
		? className
		: compClassName + ' ' + className;

	if (RenderAsComponent !== undefined) {
		return <RenderAsComponent className={classes} {...props} />;
	}
	return <DefaultLink className={classes} {...props} />;
};

BreadcrumbLink.defaultProps = {
	active: false,
	colors: {
		active: 'text-primary-600',
		inactive: 'text-gray-400 hover:text-primary-600',
	},
	link: '#',
	title: '',
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
