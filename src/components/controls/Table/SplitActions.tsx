import React from 'react';
import { FontWeightType } from '../../../types';
import { getFontWeight } from '../../../utils';

export type SplitActionProps = {
	active?: boolean;
	caps?: boolean;
	bold?: FontWeightType;
	colors?: {
		active?: string;
		inactive?: string;
		override?: string;
	};
	extraClasses?: string;
	onClick?: () => void;
	padding?: string;
	textSize?: string;
	title: string | number;
};

function SplitAction({
	active,
	bold = 'bold',
	caps = true,
	colors,
	extraClasses = '',
	onClick,
	padding = 'px-4 py-2',
	textSize = 'text-sm',
	title,
}: SplitActionProps) {
	const fontWeight = getFontWeight(bold || 'bold');
	const textTrans =
		caps === true ? 'capitalize' : caps === false ? 'uppercase' : '';

	return (
		<div
			onClick={onClick}
			className={`${
				active
					? colors?.active ||
					  'bg-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-500'
					: colors?.inactive ||
					  'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-500'
			} ${fontWeight} ${padding} ${textSize} ${textTrans} ${extraClasses} cursor-pointer flex items-center justify-center text-center w-full`}
		>
			<p className="text-center">{title}</p>
		</div>
	);
}

SplitAction.defaultProps = {
	colors: {
		active: 'bg-gray-200 text-blue-600 hover:bg-gray-200 hover:text-blue-500',
		inactive: 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-blue-500'
	}
}

export type SplitActionsProps = {
	actions: SplitActionProps[];
	props?: Omit<SplitActionProps, 'active' | 'onClick' | 'title'>;
	extraClasses?: string;
	gridClass?: string;
};

function SplitActions({
	actions,
	props: actionProps,
	gridClass = 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
	extraClasses = '',
}: SplitActionsProps) {
	return (
		<div className={`${gridClass} ${extraClasses} w-full`}>
			{actions.map((props, index) => (
				<SplitAction key={index} {...actionProps} {...props} />
			))}
		</div>
	);
}

export default SplitActions;
