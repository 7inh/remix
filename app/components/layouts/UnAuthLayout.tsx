import { PropsWithChildren } from "react";

export interface UnAuthLayoutProps extends PropsWithChildren {}

const UnAuthLayout = ({ children }: UnAuthLayoutProps) => {
  return (
    <main className="h-dvh bg-zinc-100 grid place-items-center">
      {children}
    </main>
  );
};

export default UnAuthLayout;
