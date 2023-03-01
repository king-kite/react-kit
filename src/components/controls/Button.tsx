import React, {
	forwardRef,
	Fragment,
	ReactNode,
	ButtonHTMLAttributes,
} from 'react';
import { IconType } from 'react-icons';

import Loader from './Loader';
import { FontWeightType } from '../../types';
import { getFontWeight } from '../../utils';

export interface ContainerProps extends ButtonProps {
	children: ReactNode;
	className: string;
	link?: string;
	ref?: any;
}

export type ButtonLinkType = {
	children: ReactNode;
	link: string;
	// props: Omit<ButtonProps, 'renderLinkAs'>;
};

export const DefaultLink = ({ children, link, ...props }: ButtonLinkType) => (
	<a {...props} href={link || '#'}>
		{children}
	</a>
);

// eslint-disable-next-line react/display-name
export const Container = forwardRef<HTMLButtonElement | null, ContainerProps>(
	(
		{ children, link, renderLinkAs: LinkComponent = DefaultLink, ...props },
		ref
	) =>
		link ? (
			<LinkComponent link={link} {...props}>
				{children}
			</LinkComponent>
		) : (
			<button {...props} ref={ref}>
				{children}
			</button>
		)
);

const Button = ({
	bg,
	bold,
	border,
	caps,
	color,
	containerClass,
	disabled,
	focus,
	iconSize,
	iconLeft: IconLeft,
	iconRight: IconRight,
	loader,
	loading,
	margin,
	padding,
	rounded,
	title,
	titleSize,
	...props
}: ButtonProps) => {
	const bgColor = disabled ? 'bg-gray-500' : bg;

	const fontWeight = getFontWeight();

	const textTrans =
		caps === true ? 'capitalize' : caps === false ? 'uppercase' : '';

	return (
		<div className={`${containerClass} relative w-full`}>
			<Container
				className={`${bgColor} ${focus} ${rounded} ${textTrans} ${fontWeight} ${
					margin || ''
				} ${padding} ${
					disabled ? 'cursor-not-allowed' : 'cursor-pointer'
				} ${border} ${color} ${titleSize} flex h-full items-center justify-center text-center tracking-wide w-full`}
				disabled={disabled}
				title={title}
				{...props}
			>
				{loader === true && loading === true ? (
					<Loader color="white" size={4} type="dashed" width="xs" />
				) : (
					<Fragment>
						{IconLeft && (
							<span className="flex items-center justify-center mx-2 text-xs">
								<IconLeft className={`${color} ${iconSize}`} />
							</span>
						)}
						<span className="flex items-center justify-center">{title}</span>
						{IconRight && (
							<span className="flex items-center justify-center mx-2 text-xs">
								<IconRight className={`${color} ${iconSize}`} />
							</span>
						)}
					</Fragment>
				)}
			</Container>
		</div>
	);
};

Button.defaultProps = {
	bg: 'bg-indigo-900 hover:bg-indigo-800',
	bold: 'font-semibold',
	border: 'border-none',
	color: 'text-white',
	containerClass: '',
	focus: 'focus:outline-none focus:shadow-outline',
	iconSize: 'text-xs md:text-sm',
	padding: 'px-4 py-2',
	renderLinkAs: DefaultLink,
	rounded: 'rounded',
	titleSize: 'text-xs md:text-sm',
	type: 'submit',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	bg?: string;
	bold?: FontWeightType;
	border?: string;
	caps?: boolean;
	color?: string;
	containerClass?: string;
	focus?: string;
	iconSize?: string;
	iconLeft?: IconType;
	iconRight?: IconType;
	link?: string;
	loader?: boolean;
	loading?: boolean;
	margin?: string;
	padding?: string;
	renderLinkAs?: (props: ButtonLinkType) => JSX.Element;
	rounded?: string;
	title: string;
	titleSize?: string;
}

export default Button;
