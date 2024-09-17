import { PropsWithChildren } from "react";

export interface DefaultLayoutProps extends PropsWithChildren {}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <div className="bg-black">{children}</div>;
};

export default DefaultLayout;
