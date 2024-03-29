import React, { Fragment } from 'react';
import { FaSadTear } from 'react-icons/fa';

import Loader, { DotsLoader, DotsLoaderType, LoaderProps } from '../Loader';

export type EmptyType = {
	loading?: boolean;
	loaderProps?: DotsLoaderType | LoaderProps;
	loaderType?: 'dots' | 'spinner';
	description?: string;
	icon?: (props: any) => JSX.Element;
};

const Empty = ({
	loading,
	loaderProps,
	loaderType = 'dots',
	description = 'There is currently no data on this table.',
	icon: Icon = FaSadTear,
}: EmptyType) => (
	<div className="bg-gray-200 flex flex-col h-[250px] items-center justify-center w-full">
		{loading ? (
			loaderType === 'dots' ? (
				<DotsLoader color="info" {...loaderProps} />
			) : (
				<Loader {...loaderProps} />
			)
		) : (
			<Fragment>
				<Icon
					className="leading-[0px] inline-block text-gray-400"
					style={{
						fontSize: '120px',
					}}
				/>
				<p className="font-semibold mt-2 text-center text-gray-500 text-base md:text-lg">
					{description}
				</p>
			</Fragment>
		)}
	</div>
);

export default Empty;
