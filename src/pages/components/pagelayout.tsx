import React, { PropsWithChildren, useEffect } from "react";
import { Particles } from "react-tsparticles";
//import { tsParticles } from "tsparticles-engine";
//import { loadLinksPreset } from "tsparticles-preset-links";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

export default function PageLayout(props: PropsWithChildren) {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:px-24 lg:py-0">
      <div className="relative z-10 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        {props.children}
      </div>
    </main>
  );
}
