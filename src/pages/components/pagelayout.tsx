import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
<main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:px-24 lg:py-0">
  <div className="flex items-center lg:items-start lg:justify-between flex-col lg:flex-row">
        {props.children}
  </div>
    </main>
  );
};

export default PageLayout;
