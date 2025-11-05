import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,108,255,0.18),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(0,255,255,0.18),transparent_60%)]" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-40 pb-24 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-xl">
            Futuristic AI Agency
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            We Build AI That Builds Businesses.
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Apps, Agents, Automation & Video Editing — 10× faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group rounded-full bg-cyan-400/20 px-6 py-3 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/30 hover:bg-cyan-400/30 hover:text-white transition shadow-lg shadow-cyan-500/10"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="group rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition shadow-lg shadow-black/20"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* soft overlay to ensure readability over the Spline scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/10 to-[#0A0A0A]" />
    </section>
  );
}
