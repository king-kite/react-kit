import React from 'react';

export type AvatarImageType = {
	className: string;
	src: string;
	alt: string;
};

export type AvatarType = {
	alt?: string;
	src: string;
	className?: string;
	renderAs?: (props: AvatarImageType) => JSX.Element;
	ringSize?: string;
	ringColor?: string;
	rounded?: string;
	size?: string;
};

export type AvatarsType = {
	more?: string | number;
	spacing?: string;
	images: AvatarType[];
	renderAs?: (props: AvatarImageType) => JSX.Element;
	ringSize?: string;
	ringColor?: string;
	rounded?: string;
	size?: string;
};

export const DefaultImage = ({ alt, className, src }: AvatarImageType) => (
	<img className={className} src={src || ''} alt={alt || ''} />
);

export const Avatar = ({ renderAs: Component, ...props }: AvatarType) => {
	const { className, alt, ringColor, ringSize, rounded, size, src } = props;

	const classes = `inline-block ${size} ${rounded} ${ringSize} ${ringColor}`;

	if (Component !== undefined)
		return (
			<Component alt={alt || ''} className={className || classes} src={src} />
		);

	return (
		<DefaultImage alt={alt || ''} className={className || classes} src={src} />
	);
};

Avatar.defaultProps = {
	ringColor: 'ring-white',
	ringSize: 'ring-2',
	rounded: 'rounded-full',
	spacing: '-space-x-2',
	size: 'h-8 w-8',
};

const Avatars = ({
	images,
	more,
	spacing,
	renderAs,
	ringColor,
	ringSize,
	rounded,
	size,
}: AvatarsType) => {
	const classes = `inline-block ${size} ${rounded} ${ringSize} ${ringColor}`;

	return (
		<div className={`flex ${spacing || ''} overflow-hidden`}>
			{images.map((image, index) => (
				<Avatar
					key={index}
					className={classes}
					renderAs={renderAs}
					src={image.src || ''}
					alt={image.alt || ''}
				/>
			))}
			{more && (
				<div className="bg-red-600 flex h-7 items-center justify-center mx-1 rounded-full w-7">
					<span className="text-xs text-white">{more}</span>
				</div>
			)}
		</div>
	);
};

Avatars.defaultProps = {
	renderAs: DefaultImage,
	ringColor: 'ring-white',
	ringSize: 'ring-2',
	rounded: 'rounded-full',
	spacing: '-space-x-2',
	size: 'h-8 w-8',
};

export default Avatars;
