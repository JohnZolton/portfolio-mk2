import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex justify-center bg-gradient-to-tr from-cyan-950 to-gray-950">
      <div className="flex h-full w-full flex-col items-center">
        {props.children}
      </div>
    </main>
  );
};

export default PageLayout;
