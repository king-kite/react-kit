import React, { ReactNode, CSSProperties } from 'react';
import { IconType } from 'react-icons';
import { FaHamburger } from 'react-icons/fa';

const actionStyle = 'rounded-full p-2 text-center';

export type ContainerProps = {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
	link?: string;
	renderAs?: (props: ActionLinkType) => JSX.Element;
	style?: CSSProperties;
};

export type ActionLinkType = {
	children: ReactNode;
	link: string;
};

export const DefaultLink = ({ children, link, ...props }: ActionLinkType) => (
	<a {...props} href={link || '#'}>
		{children}
	</a>
);

const Container = ({
	children,
	link,
	renderAs: LinkComponent = DefaultLink,
	...props
}: ContainerProps) =>
	link ? (
		<LinkComponent link={link} {...props}>
			{children}
		</LinkComponent>
	) : (
		<span {...props}>{children}</span>
	);

export type ActionProps = {
	color:
		| 'danger'
		| 'info'
		| 'main'
		| 'pacify'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning';
	disabled?: boolean;
	icon: IconType;
	onClick?: () => void;
	renderAs?: (props: ActionLinkType) => JSX.Element;
};

export const Action = ({
	color,
	disabled,
	icon: Icon = FaHamburger,
	renderAs,
	onClick,
	...props
}: ActionProps) => {
	const _color = disabled
		? 'text-gray-700'
		: color === 'danger'
		? 'text-red-500 hover:text-red-400'
		: color === 'info'
		? 'text-gray-500 hover:text-gray-400'
		: color === 'main'
		? 'text-main-500 hover:text-main-400'
		: color === 'pacify'
		? 'text-blue-500 hover:text-blue-400'
		: color === 'primary'
		? 'text-primary-500 hover:text-primary-400'
		: color === 'secondary'
		? 'text-secondary-500 hover:text-secondary-400'
		: color === 'success'
		? 'text-green-500 hover:text-green-400'
		: color === 'warning'
		? 'text-yellow-500 hover:text-yellow-400'
		: 'text-primary-500 hover:text-primary-400';

	return (
		<Container
			className={`${
				disabled
					? 'cursor-not-allowed'
					: 'duration-300 cursor-pointer transform transition-all hover:bg-gray-300 hover:scale-105'
			} ${actionStyle} ${_color}`}
			renderAs={renderAs}
			style={{ fontSize: '10px' }}
			onClick={!disabled ? onClick : undefined}
			{...props}
		>
			<Icon className={'text-xs md:text-sm ' + _color} />
		</Container>
	);
};

export type ActionsProps = {
	actions: ActionProps[];
	renderLinkAs?: (props: ActionLinkType) => JSX.Element;
	style?: CSSProperties;
};

const Actions = ({ actions, renderLinkAs, style }: ActionsProps) => (
	<td className="relative">
		<section
			className="flex h-full items-center justify-around mx-auto py-1 text-center text-gray-600 w-full"
			style={{ maxWidth: '160px', ...style }}
		>
			{actions.map((action: ActionProps, index: number) => (
				<Action key={index + 1} renderAs={renderLinkAs} {...action} />
			))}
		</section>
	</td>
);

export default Actions;
