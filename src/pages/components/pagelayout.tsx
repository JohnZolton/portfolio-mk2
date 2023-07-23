import React, { PropsWithChildren, useEffect } from "react";
import { Particles } from "react-tsparticles";
//import { tsParticles } from "tsparticles-engine";
//import { loadLinksPreset } from "tsparticles-preset-links";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

export default function PageLayout(props: PropsWithChildren) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);


  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:px-24 lg:py-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                size: 0.1,
                opacity: 1,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffff"],
              animation: {
                enable: true,
                speed: 20,
                sync: false,
              },
            },
            links: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.1,
                sync: false,
              },
            },
            twinkle: {
              lines: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 0.5,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        {props.children}
      </div>
    </main>
  );
}
