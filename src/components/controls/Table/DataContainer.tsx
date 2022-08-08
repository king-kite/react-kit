import React, { FC, ReactNode } from 'react';

export type TableContainerProps = {
	children: ReactNode;
	link?: string;
	classes?: string;
	renderAs?: (props: ContainerLinkType) => JSX.Element;
	props?: any;
};

export type ContainerLinkType = {
	children: ReactNode;
	link: string;
	className?: string;
};

export const DefaultLink = ({
	className = '',
	children,
	link,
	...props
}: ContainerLinkType) => (
	<a {...props} href={link || '#'} className={className}>
		{children}
	</a>
);

const Container: FC<TableContainerProps> = ({
	children,
	link,
	classes,
	renderAs: LinkComponent = DefaultLink,
	...props
}) => {
	const defaultClasses =
		'flex items-center justify-center px-2 py-3 w-full ' + (classes || '');
	const linkClass = !classes ? ' cursor-pointer hover:bg-purple-100 ' : '';

	return link ? (
		<LinkComponent
			className={defaultClasses + linkClass}
			link={link}
			{...props}
		>
			{children}
		</LinkComponent>
	) : (
		<div className={defaultClasses} {...props}>
			{children}
		</div>
	);
};

export default Container;
