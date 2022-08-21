import React from 'react';
import { IconType } from 'react-icons';

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
	cap?: boolean | null;
	centered?: boolean;
	container?: string;
	icon?: IconType;
	margin?: string;
	padding?: string;
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	title: string;
	txtColor?: string;
};

const Badge = ({
	bg,
	cap,
	centered,
	container,
	icon: Icon,
	margin,
	padding,
	rounded,
	title,
	txtColor,
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

	const textT = cap === false ? '' : cap === true ? 'capitalize' : 'uppercase';
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
			className={`${background} ${txtColor} ${margin} ${round} ${container} w-full flex items-center ${
				centered ? 'justify-center' : ''
			}`}
		>
			<p className={`${textT} ${padding} text-xs w-full`}>
				{Icon && (
					<span className="inline-block mr-1">
						<Icon className="block text-xs" />
					</span>
				)}
				{title}
			</p>
		</div>
	);
};

Badge.defaultProps = {
	bg: 'success',
	cap: false,
	centered: true,
	container: '',
	padding: 'p-1',
	txtColor: 'text-white',
};

export default Badge;
