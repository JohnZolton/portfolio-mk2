import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex justify-center ">
      <div className="flex h-full w-full flex-col items-center">
        {props.children}
      </div>
    </main>
  );
};

export default PageLayout;
