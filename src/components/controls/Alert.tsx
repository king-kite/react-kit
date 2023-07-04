import React from 'react';
import {
	FaTimesCircle,
	FaGem,
	FaInfoCircle,
	FaChevronCircleRight,
	FaCheckCircle,
	FaExclamationTriangle,
	FaGrinHearts,
} from 'react-icons/fa';

export type ColorTypes =
	| 'danger'
	| 'info'
	| 'main'
	| 'pacify'
	| 'success'
	| 'warning';

export type AlertProps = {
	icon?: boolean | React.ReactNode;
	message?: string;
	onClose?: () => void;
	padding?: string;
	rounded?: string;
	type?: ColorTypes;
	visible?: boolean;
};

const Icon = ({ type }: { type?: ColorTypes }) => {
	function getIcon() {
		switch (type) {
			case 'danger':
				return FaTimesCircle;
			case 'info':
				return FaGem;
			case 'main':
				return FaInfoCircle;
			case 'pacify':
				return FaChevronCircleRight;
			case 'success':
				return FaCheckCircle;
			case 'warning':
				return FaExclamationTriangle;
			default:
				return FaGrinHearts;
		}
	}
	const Value = getIcon();
	return (
		<span className="min-h-[16px] min-w-[16px]">
			<Value className="min-h-[16px] min-w-[16px] mr-2" />
		</span>
	);
};

const classes =
	'text-sm inline-flex items-start justify-between w-full md:text-base';

const Alert = ({
	icon,
	message,
	onClose,
	padding,
	rounded,
	type,
	visible,
}: AlertProps) => {
	const [_visible, setVisible] = React.useState(false);

	const visibility = visible !== undefined ? visible : _visible;

	const color = React.useMemo(
		() =>
			type === 'danger'
				? 'bg-red-100 text-red-700'
				: type === 'info'
				? 'bg-gray-300 text-gray-800'
				: type === 'main'
				? 'bg-blue-100 text-blue-700'
				: type === 'pacify'
				? 'bg-indigo-100 text-indigo-700'
				: type === 'success'
				? 'bg-green-100 text-green-700'
				: type === 'warning'
				? 'bg-yellow-100 text-yellow-700'
				: 'bg-gray-50 text-gray-500',
		[type]
	);

	React.useEffect(() => {
		if (visible === undefined) {
			if (message) setVisible(true);
			else if (message === null && message === undefined) setVisible(false);
		}
	}, [message, visible]);

	return visibility ? (
		<div className={`${color} ${rounded} ${padding} ${classes}`}>
			<div className="inline-flex items-center">
				{icon ? typeof icon === 'boolean' ? <Icon type={type} /> : icon : <></>}
				<p className="px-2 lg:pr-3">{message}</p>
			</div>
			<div className="py-1">
				<span
					onClick={() => {
						visible === undefined && setVisible(false);
						onClose && onClose();
					}}
					className="cursor-pointer"
				>
					<FaTimesCircle className="h-4 w-4" />
				</span>
			</div>
		</div>
	) : (
		<React.Fragment />
	);
};

Alert.defaultProps = {
	icon: true,
	message: '',
	padding: 'p-3 sm:px-4 md:px-6 md:py-5',
	rounded: 'rounded-lg',
	type: 'success',
};

export default Alert;
