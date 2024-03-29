import { ComponentPropsWithRef, CSSProperties, MouseEvent } from 'react';

import { ActionLinkType } from './Actions';
import { ContainerLinkType } from './DataContainer';
import { EmptyType } from './Empty';
import { SplitActionsProps } from './SplitActions';
import { TableActionsProps } from './TableActions';

export type HeadType = {
	style?: CSSProperties;
	type?: 'actions';
	value: string;
}[];

export type RowBaseType = {
	options?: any;
	component?: ComponentPropsWithRef<any>;
	classes?: string;
	icon?: (props: any) => JSX.Element;
	link?: string;
	onClick?: (e: any) => void; // Check how to make this a html event param
	type?: 'actions' | 'badge' | 'icon';
	style?: CSSProperties;
	value?: any;
};

export type RowType = {
	id: string;
	onClick?: (
		e: MouseEvent<HTMLTableRowElement>,
		data: {
			id: string;
			rows: RowBaseType[];
		}
	) => void;
	rows: RowBaseType[];
};

export type TableOptionsProps = {
	heads?: {
		bg?: string;
		bold?: string;
		rounded?: string;
		sticky?: boolean;
		textAlign?: string;
		textColor?: string;
		textForm?: 'capitalize' | 'normal' | 'uppercase';
		textSize?: string;
	};
	maxHeight?: string;
	rows?: {
		bold?: boolean;
		center?: boolean;
		hover?: boolean;
		hoverClasses?: string;
		textForm?: 'capitalize' | 'uppercase' | 'normal';
	};
};

export type GetSelectedValuesParamType = string[];
export type GetSelectedValuesType = (Ids: GetSelectedValuesParamType) => void;

export type TableProps = {
	actions?: Omit<TableActionsProps, 'selected'>;
	disabled?: boolean;
	disabledClasses?: string;
	emptyProps?: EmptyType;
	getSelectedValues?: GetSelectedValuesType;
	heads: HeadType;
	loading?: boolean;
	options?: TableOptionsProps;
	renderActionLinkAs?: (props: ActionLinkType) => JSX.Element;
	renderContainerLinkAs?: (props: ContainerLinkType) => JSX.Element;
	rows: RowType[];
	sn?: boolean | number;
	split?: SplitActionsProps;
	tick?: boolean;
	title?: string;
	titleClasses?: string;
};
