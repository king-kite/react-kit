import { CSSProperties } from 'react';
import { IconType } from 'react-icons';

import { ActionLinkType } from './Actions';
import { ContainerLinkType } from './DataContainer';
import { EmptyType } from './Empty';

export type HeadType = {
	style?: CSSProperties;
	type?: 'actions';
	value: string;
}[];

export type RowBaseType = {
	options?: any;
	classes?: string;
	Icon?: IconType;
	link?: string;
	type?:
		| 'actions'
		| 'badge'
		| 'button'
		| 'icon'
		| 'image'
		| 'switch'
		| 'input'
		| 'select';
	style?: CSSProperties;
	value?: any;
};

export type RowType =
	| RowBaseType[]
	| {
			id: string;
			rows: RowBaseType[];
	  };

export type TableOptionsProps = {
	heads?: {
		sticky?: boolean;
		textForm?: 'capitalize' | 'uppercase' | 'normal';
	};
	maxHeight?: string;
	rows?: {
		bold?: boolean;
		center?: boolean;
		hoverDefault?: boolean;
		hoverClasses?: string;
		textForm?: 'capitalize' | 'uppercase' | 'normal';
	};
};

export type GetTickedValuesParamType = 'all' | string[];
export type GetTickedValuesType = (Ids: GetTickedValuesParamType) => void;

export type TableProps = {
	heads: HeadType;
	options?: TableOptionsProps;
	loading?: boolean;
	rows: RowType[];
	split?: {
		actions: {
			active: boolean;
			onClick: () => void;
			title: string;
		}[];
		length?: {
			md?: string;
			lg?: string;
		};
	};
	sn?: boolean;
	title?: string;
	showTicks?: boolean;
	emptyProps?: EmptyType;
	renderContainerLinkAs?: (props: ContainerLinkType) => JSX.Element;
	renderActionLinkAs?: (props: ActionLinkType) => JSX.Element;
	getTickedValues?: GetTickedValuesType;
};
