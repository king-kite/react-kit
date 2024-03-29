import React from 'react';

export type BadgeProps = {
	bg?:
		| 'danger'
		| 'error'
		| 'info'
		| 'pacify'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning';
	cap?: 'capitalize' | 'uppercase';
	centered?: boolean;
	container?: string;
	color?: string;
	icon?: (props: any) => JSX.Element;
	margin?: string;
	padding?: string;
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	title: string;
	txtClasses?: string;
	txtColor?: string;
	txtSize?: string;
};

const Badge = ({
	bg,
	cap,
	centered,
	container,
	color,
	icon: Icon,
	margin,
	padding,
	rounded,
	title,
	txtClasses,
	txtColor,
	txtSize,
}: BadgeProps) => {
	const background =
		bg === 'success'
			? 'bg-green-600'
			: bg === 'error' || bg === 'danger'
			? 'bg-red-600'
			: bg === 'warning'
			? 'bg-yellow-600'
			: bg === 'pacify'
			? 'bg-blue-600'
			: bg === 'info'
			? 'bg-gray-600'
			: bg === 'primary'
			? 'bg-primary-500'
			: bg === 'secondary'
			? 'bg-secondary-500'
			: 'bg-green-600';

	const textT = cap || '';
	const round =
		rounded === 'none'
			? 'rounded-none'
			: rounded === 'sm'
			? 'rounded-sm'
			: rounded === 'md'
			? 'rounded-md'
			: rounded === 'lg'
			? 'rounded-lg'
			: rounded === 'full'
			? 'rounded-full'
			: 'rounded';

	return (
		<div
			className={`${
				color || background
			} ${txtColor} ${margin} ${round} ${container} w-full flex items-center ${
				centered ? 'justify-center' : ''
			}`}
		>
			<p className={`${txtClasses} ${textT} ${padding} ${txtSize} w-full`}>
				{Icon && (
					<span className="inline-block mr-1">
						<Icon className={`block ${txtSize}`} />
					</span>
				)}
				{title}
			</p>
		</div>
	);
};

Badge.defaultProps = {
	bg: 'success',
	centered: true,
	container: '',
	padding: 'p-1',
	txtClasses: '',
	txtColor: 'text-white',
	txtSize: 'text-xs',
};

export default Badge;
