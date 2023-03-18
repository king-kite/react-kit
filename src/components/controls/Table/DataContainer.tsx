import React, { FC, ReactNode } from 'react';

export type TableContainerProps = {
	children: ReactNode;
	link?: string;
	onClick?: (e: any) => void; // Check how to make this a html event param
	classes?: string;
	component?: React.ComponentPropsWithRef<any>;
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
	onClick,
	component: Component,
	renderAs: LinkComponent = DefaultLink,
	...props
}) => {
	const defaultClasses =
		'flex h-full items-center justify-center py-2 w-full ' + (classes || '');
	const linkClass = !classes ? ' cursor-pointer hover:bg-purple-100 ' : '';
	const className = defaultClasses + (link || onClick ? linkClass : '');

	return link ? (
		<LinkComponent className={className} link={link} {...props}>
			{children}
		</LinkComponent>
	) : Component ? (
		<Component className={defaultClasses}>{children}</Component>
	) : (
		<div className={className} onClick={onClick} {...props}>
			{children}
		</div>
	);
};

export default Container;
