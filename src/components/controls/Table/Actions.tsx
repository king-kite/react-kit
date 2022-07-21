import { ReactNode, CSSProperties } from "react";
import { IconType } from "react-icons";

const actionStyle = "rounded-full p-2 text-center";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  link?: string;
  style?: CSSProperties;
};

export type NavLinkType = {
  children: React.ReactNode;
  link: string;
};
let ButtonLink = ({ children, link, ...props }: NavLinkType) => (
  <a {...props} href={link || "#"}>
    {children}
  </a>
);

try {
  const { Link: ReactRouterLink } = require("react-router-dom");
  // eslint-disable-next-line react/display-name
  ButtonLink = ({ children, link, ...props }: NavLinkType) => (
    <ReactRouterLink {...props} to={link || "#"}>
      {children}
    </ReactRouterLink>
  );
} catch (error) {
  try {
    const NextLink = require("next/link");
    // eslint-disable-next-line react/display-name
    ButtonLink = ({ children, link, ...props }: NavLinkType) => (
      <NextLink href={link || "#"}>
        <a {...props}>{children}</a>
      </NextLink>
    );
  } catch (error) {
    // eslint-disable-next-line react/display-name
    ButtonLink = ({ children, link, ...props }: NavLinkType) => (
      <a {...props} href={link || "#"}>
        {children}
      </a>
    );
  }
}

const Container = ({ children, link, ...props }: ContainerProps) =>
  link ? (
    <ButtonLink {...props} link={link}>
      {children}
    </ButtonLink>
  ) : (
    <span {...props}>{children}</span>
  );

export type ActionProps = {
  color:
    | "danger"
    | "info"
    | "pacify"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  disabled?: boolean;
  Icon: IconType;
};

export const Action = ({ color, disabled, Icon, ...props }: ActionProps) => {
  const _color = disabled
    ? "text-gray-700"
    : color === "danger"
    ? "text-red-500 hover:text-red-400"
    : color === "info"
    ? "text-gray-500 hover:text-gray-400"
    : color === "pacify"
    ? "text-blue-500 hover:text-blue-400"
    : color === "primary"
    ? "text-primary-500 hover:text-primary-400"
    : color === "secondary"
    ? "text-secondary-500 hover:text-secondary-400"
    : color === "success"
    ? "text-green-500 hover:text-green-400"
    : color === "warning"
    ? "text-yellow-500 hover:text-yellow-400"
    : "text-primary-500 hover:text-primary-400";

  return (
    <Container
      className={`${
        disabled
          ? "cursor-not-allowed"
          : "duration-300 cursor-pointer transform transition-all hover:bg-gray-300 hover:scale-105"
      } ${actionStyle} ${_color}`}
      style={{ fontSize: "10px" }}
      {...props}
    >
      <Icon className={"text-xs md:text-sm " + _color} />
    </Container>
  );
};

export type ActionsProps = {
  actions: ActionProps[];
};

const Actions = ({ actions }: ActionsProps) => (
  <td
    className="flex items-center justify-around mx-auto py-2 text-center text-gray-600 w-full"
    style={{ maxWidth: "160px" }}
  >
    {actions.map((action: ActionProps, index: number) => (
      <Action key={index + 1} {...action} />
    ))}
  </td>
);

export default Actions;


// import React, { ReactNode, CSSProperties } from "react";
// import { IconType } from "react-icons";

// const actionStyle = "rounded-full p-2 text-center";

// type ContainerProps = {
// 	children: ReactNode;
// 	className?: string;
// 	link?: string;
// 	style?: CSSProperties;
// };

// export type NavLinkType = {
// 	children: ReactNode;
// 	href?: string;
// 	to?: string;
// 	className?: string;
// 	props?: any;
// };

// let linkType = "common";
// let NavLink = ({ children, href, ...props }: NavLinkType) => (
// 	<a {...props} href={href || "#"}>
// 		{children}
// 	</a>
// );

// try {
// 	const { Link } = require("react-router-dom");
// 	NavLink = ({ children, to, ...props }: NavLinkType) => (
// 		<Link {...props} to={to || "#"}>
// 			{children}
// 		</Link>
// 	);
// 	linkType = "reactRouter";
// } catch (error) {
// 	try {
// 		const NextLink = require("next/link");
// 		NavLink = ({ children, href, className, ...props }: NavLinkType) => (
// 			<NextLink {...props} href={href || "#"}>
// 				<a className={className || ""}>{children}</a>
// 			</NextLink>
// 		);
// 		linkType = "next";
// 	} catch (error) {
// 		NavLink = ({ children, ...props }: NavLinkType) => (
// 			<a {...props} href="#">
// 				{children}
// 			</a>
// 		);
// 		linkType = "common";
// 	}
// }

// export const Container = ({ children, link, ...props }: ContainerProps) => {
// 	return link ? (
// 		linkType === "reactRouter" ? (
// 			<NavLink {...props} to={link}>
// 				{children}
// 			</NavLink>
// 		) : linkType === "next" ? (
// 			<NavLink {...props} href={link}>
// 				{children}
// 			</NavLink>
// 		) : (
// 			<NavLink {...props} href={link}>
// 				{children}
// 			</NavLink>
// 		)
// 	) : (
// 		<span {...props}>
// 			{children}
// 		</span>
// 	)
// }

// // const Container = ({ children, link, ...props }: ContainerProps) =>
// // 	link ? (
// // 		<Link {...props} to={link}>
// // 			{children}
// // 		</Link>
// // 	) : (
// // 		<span {...props}>{children}</span>
// // 	);

// export type ActionProps = {
// 	color:
// 		| "danger"
// 		| "info"
// 		| "pacify"
// 		| "primary"
// 		| "secondary"
// 		| "success"
// 		| "warning";
// 	disabled?: boolean;
// 	Icon: IconType;
// };

// export const Action = ({ color, disabled, Icon, ...props }: ActionProps) => {
// 	const _color = disabled
// 		? "text-gray-700"
// 		: color === "danger"
// 		? "text-red-500 hover:text-red-400"
// 		: color === "info"
// 		? "text-gray-500 hover:text-gray-400"
// 		: color === "pacify"
// 		? "text-blue-500 hover:text-blue-400"
// 		: color === "primary"
// 		? "text-primary-500 hover:text-primary-400"
// 		: color === "secondary"
// 		? "text-secondary-500 hover:text-secondary-400"
// 		: color === "success"
// 		? "text-green-500 hover:text-green-400"
// 		: color === "warning"
// 		? "text-yellow-500 hover:text-yellow-400"
// 		: "text-primary-500 hover:text-primary-400";

// 	return (
// 		<Container
// 			className={`${
// 				disabled
// 					? "cursor-not-allowed"
// 					: "duration-300 cursor-pointer transform transition-all hover:bg-gray-300 hover:scale-105"
// 			} ${actionStyle} ${_color}`}
// 			style={{ fontSize: "10px" }}
// 			{...props}
// 		>
// 			<Icon className={"text-xs md:text-sm " + _color} />
// 		</Container>
// 	);
// };

// export type ActionsProps = {
// 	actions: ActionProps[];
// };

// const Actions = ({ actions }: ActionsProps) => (
// 	<td
// 		className="flex items-center justify-around mx-auto py-2 text-center text-gray-600 w-full"
// 		style={{ maxWidth: "160px" }}
// 	>
// 		{actions.map((action: ActionProps, index: number) => (
// 			<Action key={index + 1} {...action} />
// 		))}
// 	</td>
// );

// export default Actions;
