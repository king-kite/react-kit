import React, { forwardRef } from 'react';

const wrapperStyle =
	'duration-500 fixed flex h-full items-center justify-center left-0 overflow-hidden px-3 top-0 transform transition-opacity w-full';
const containerStyle =
	'duration-1000 mx-auto overflow-y-auto relative shadow-lg transform transition-all z-50';

export type ModalProps = {
	animation?: {
		hide: string;
		show: string;
	};
	background?: string;
	border?: string;
	component: JSX.Element;
	maxHeight?: string;
	maxWidth?: string;
	padding?: string;
	rounded?: string;
	visible: boolean;
	width?: string;
};

const Modal = forwardRef<HTMLDivElement | null, ModalProps>(
	(
		{
			animation = {
				hide: '-translate-y-full opacity-0 invisible scale-0',
				show: 'translate-y-0 opacity-100 scale-100 visible',
			},
			background = 'bg-white',
			border = 'border-none',
			component,
			maxHeight = 'max-h-[90vh]',
			maxWidth = 'max-w-2xl',
			padding = 'p-3',
			rounded = 'rounded-lg',
			visible,
			width = 'w-full',
		},
		ref
	) => (
		<div
			className={`${wrapperStyle} ${
				visible ? 'opacity-100 visible z-40' : 'invisible opacity-0 z-[-20]'
			}`}
			style={{ background: 'rgba(0, 0, 0, 0.6)' }}
		>
			<div
				className={`${
					visible ? animation.show : animation.hide
				} ${background} ${border} ${maxHeight} ${maxWidth} ${padding} ${rounded} ${width} ${containerStyle}`}
				ref={ref}
			>
				<section>{component}</section>
			</div>
		</div>
	)
);

export default Modal;
