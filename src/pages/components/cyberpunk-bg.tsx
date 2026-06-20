import { motion } from "framer-motion";

/**
 * Reusable cyberpunk background — animated gradient mesh, aurora sweeps,
 * fine grid, scanlines, perspective floor grid with horizon glow,
 * drifting data points, and a breathing vignette. Self-contained: all
 * CSS lives in a scoped styled-jsx block. Drop anywhere inside a
 * `relative` container with `bg-[#06060a]`.
 */
interface Dot {
  left: number;
  size: number;
  dur: number;
  delay: number;
  hue: string;
}

const DOTS: Dot[] = Array.from({ length: 28 }, (_, i) => {
  const left = (i * 4.13) % 100;
  const size = 2 + (i % 3);
  const dur = 13 + (i % 6) * 3;
  const delay = -((i * 1.27) % dur);
  const hue = i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#ff00ff" : "#a855f7";
  return { left, size, dur, delay, hue };
});

export default function CyberpunkBackground() {
  return (
    <>
      <div
        aria-hidden
        className="cp-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Animated gradient mesh */}
        <motion.div
          className="cp-mesh absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 50% at 15% 20%, rgba(34,211,238,0.38), transparent 60%)," +
              "radial-gradient(45% 55% at 85% 15%, rgba(255,0,255,0.34), transparent 60%)," +
              "radial-gradient(50% 60% at 75% 85%, rgba(124,58,237,0.36), transparent 60%)," +
              "radial-gradient(35% 45% at 20% 80%, rgba(34,211,238,0.22), transparent 60%)",
            backgroundSize: "220% 220%",
            filter: "blur(8px)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 50%", "50% 100%", "0% 0%"],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        />

        {/* Aurora sweeps (cyan + magenta) */}
        <div className="cp-aurora cp-aurora-cyan" />
        <div className="cp-aurora cp-aurora-magenta" />

        {/* Fine grid lines */}
        <div
          className="cp-grid absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.20) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(34,211,238,0.20) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 100% 80% at 50% 30%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 100% 80% at 50% 30%, #000 40%, transparent 100%)",
          }}
        />

        {/* Scanlines */}
        <div
          className="cp-scanlines absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.45) 0px, rgba(0,0,0,0.45) 1px, transparent 1px, transparent 3px)",
          }}
        />

        {/* Perspective floor grid */}
        <div className="cp-floor">
          <div className="cp-floor-plane" />
        </div>
        <div className="cp-horizon" />

        {/* Drifting data points */}
        <div className="cp-dots">
          {DOTS.map((d, i) => (
            <span
              key={i}
              className="cp-dot"
              style={{
                left: `${d.left}%`,
                width: `${d.size}px`,
                height: `${d.size}px`,
                background: d.hue,
                boxShadow: `0 0 8px ${d.hue}, 0 0 16px ${d.hue}`,
                animationDuration: `${d.dur}s`,
                animationDelay: `${d.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Breathing vignette */}
        <div className="cp-vignette" />
      </div>

      <style jsx>{`
        .cp-aurora {
          position: absolute;
          top: -10%;
          height: 55vh;
          width: 75%;
          pointer-events: none;
          filter: blur(48px);
          will-change: transform, opacity;
        }
        .cp-aurora-cyan {
          left: -30%;
          background: radial-gradient(
            ellipse at center,
            rgba(34, 211, 238, 0.38),
            transparent 70%
          );
          animation: cp-aurora-l 22s ease-in-out infinite;
        }
        .cp-aurora-magenta {
          left: 20%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 0, 255, 0.30),
            transparent 70%
          );
          animation: cp-aurora-r 28s ease-in-out infinite;
        }
        @keyframes cp-aurora-l {
          0%,
          100% {
            transform: translateX(-15%) translateY(0);
            opacity: 0.55;
          }
          50% {
            transform: translateX(140%) translateY(8%);
            opacity: 0.95;
          }
        }
        @keyframes cp-aurora-r {
          0%,
          100% {
            transform: translateX(80%) translateY(6%);
            opacity: 0.5;
          }
          50% {
            transform: translateX(-120%) translateY(-4%);
            opacity: 0.85;
          }
        }

        .cp-floor {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 42vh;
          perspective: 340px;
          pointer-events: none;
          overflow: hidden;
          -webkit-mask: linear-gradient(
            to top,
            #000 55%,
            transparent 100%
          );
          mask: linear-gradient(to top, #000 55%, transparent 100%);
        }
        .cp-floor-plane {
          position: absolute;
          left: -50%;
          right: -50%;
          top: 0;
          height: 220%;
          background-image: linear-gradient(
              rgba(34, 211, 238, 0.7) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(124, 58, 237, 0.5) 1px, transparent 1px);
          background-size: 44px 44px, 44px 44px;
          transform: rotateX(62deg);
          transform-origin: 50% 0%;
          animation: cp-floor-scroll 7s linear infinite;
          will-change: transform;
        }
        @keyframes cp-floor-scroll {
          from {
            transform: rotateX(62deg) translateY(0);
          }
          to {
            transform: rotateX(62deg) translateY(44px);
          }
        }
        .cp-horizon {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 42vh;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(34, 211, 238, 0.9) 30%,
            rgba(255, 0, 255, 0.8) 70%,
            transparent
          );
          box-shadow: 0 0 24px rgba(34, 211, 238, 0.7),
            0 0 48px rgba(255, 0, 255, 0.4);
          pointer-events: none;
        }

        .cp-dots {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .cp-dot {
          position: absolute;
          bottom: -4vh;
          border-radius: 9999px;
          animation-name: cp-drift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @keyframes cp-drift {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          12% {
            opacity: 0.9;
          }
          88% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-128vh);
            opacity: 0;
          }
        }

        .cp-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            ellipse 125% 95% at 50% 45%,
            transparent 52%,
            rgba(0, 0, 0, 0.55) 100%
          );
          animation: cp-breathe 9s ease-in-out infinite;
          will-change: opacity;
        }
        @keyframes cp-breathe {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.95;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cp-mesh,
          .cp-aurora,
          .cp-floor-plane,
          .cp-dot,
          .cp-vignette {
            animation: none !important;
          }
        }
        @media (max-width: 640px) {
          .cp-floor {
            height: 30vh;
          }
          .cp-aurora {
            height: 40vh;
          }
        }
      `}</style>
    </>
  );
}
