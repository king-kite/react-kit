import React, {
	forwardRef,
	Fragment,
	ReactNode,
	ButtonHTMLAttributes,
} from 'react';
import { IconType } from 'react-icons';
import Loader from './Loader';

export interface ContainerProps extends ButtonProps {
	children: ReactNode;
	className: string;
	link?: string;
	ref?: any;
}

export type ButtonLinkType = {
	children: ReactNode;
	link: string;
	props: Omit<ButtonProps, 'renderLinkAs'>;
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
			<LinkComponent link={link} props={props}>
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

	const fontWeight =
		bold === 'thin'
			? 'font-thin'
			: bold === 'extralight'
			? 'font-extralight'
			: bold === 'light'
			? 'font-light'
			: bold === 'normal'
			? 'font-normal'
			: bold === 'medium'
			? 'font-medium'
			: bold === 'semibold'
			? 'font-semibold'
			: bold === 'bold'
			? 'font-bold'
			: bold === 'extrabold'
			? 'font-extrabold'
			: bold === 'black'
			? 'font-black'
			: 'font-normal';

	const textTrans = caps ? 'capitalize' : 'uppercase';

	return (
		<div className="relative w-full">
			<Container
				className={`${bgColor} ${focus} ${rounded} ${textTrans} ${fontWeight} ${
					margin || ''
				} ${padding} ${
					disabled ? 'cursor-not-allowed' : 'cursor-pointer'
				} ${border} ${color} ${titleSize} flex items-center justify-center text-center tracking-wide w-full focus:outline-none focus:shadow-outline`}
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
	bg: 'bg-primary-500 hover:bg-primary-400',
	bold: 'font-semibold',
	border: 'border-none',
	caps: false,
	color: 'text-white',
	focus: '',
	iconSize: 'text-xs md:text-sm',
	padding: 'px-4 py-2',
	renderLinkAs: DefaultLink,
	rounded: 'rounded',
	titleSize: 'text-xs md:text-sm',
	type: 'submit',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	bg?: string;
	bold?:
		| 'thin'
		| 'extralight'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semibold'
		| 'bold'
		| 'extrabold'
		| 'black';
	border?: string;
	caps?: boolean;
	color?: string;
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
