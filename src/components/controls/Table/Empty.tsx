import React from 'react';
import { IconType } from 'react-icons';
import { FaSadTear } from 'react-icons/fa';

import Loader, { DotsLoader, DotsLoaderType, LoaderProps } from '../Loader';

export type EmptyType = {
	loading?: boolean;
	loaderProps?: DotsLoaderType | LoaderProps;
	loaderType?: 'dots' | 'spinner';
	description?: string;
	Icon?: IconType;
}

const Empty = ({
	loading,
	loaderProps,
	loaderType = 'dots',
	description = 'There is currently no data on this table.',
	Icon = FaSadTear,
}: EmptyType) => (
	<div className="bg-gray-200 flex flex-col h-[250px] items-center justify-center w-full">
		{loading ? (
			loaderType === 'dots' ? (
				<DotsLoader color="info" {...loaderProps} />
			) : (
				<Loader {...loaderProps} />
			)
		) : (
			<>
				<Icon
					className="leading-[0px] inline-block text-gray-400"
					style={{
						fontSize: '120px',
					}}
				/>
				<p className="font-semibold mt-2 text-center text-gray-500 text-base md:text-lg">
					{description}
				</p>
			</>
		)}
	</div>
);

export default Empty;
