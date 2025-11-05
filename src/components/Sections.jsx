import { motion } from 'framer-motion';
import { Rocket, Bot, Workflow, Video, Star, Shield, Zap } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Card({ title, desc, icon: Icon, cta }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-cyan-500/10 hover:border-cyan-400/30 transition">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 p-2 ring-1 ring-white/10">
          <Icon className="text-cyan-300" size={22} />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-300">{desc}</p>
      {cta && (
        <a href="#contact" className="mt-4 inline-block text-sm text-cyan-200 hover:text-white">{cta} →</a>
      )}
    </div>
  );
}

export default function Sections() {
  return (
    <div className="relative z-10">
      {/* Services Preview */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">AI Services that Redefine Productivity.</h2>
          <p className="mt-2 text-slate-300">End-to-end delivery across apps, agents, automation, and video.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              title="AI App Creation"
              desc="Design and ship full-stack AI apps with blazing speed and precision."
              icon={Rocket}
              cta="Learn more"
            />
            <Card
              title="AI Agent Creation"
              desc="Custom autonomous agents for support, sales, ops, and research."
              icon={Bot}
              cta="Learn more"
            />
            <Card
              title="Workflow Automation"
              desc="Orchestrate tools and APIs to automate your business end-to-end."
              icon={Workflow}
              cta="Learn more"
            />
            <Card
              title="Video Editing"
              desc="AI-powered editing pipelines for short-form and long-form content."
              icon={Video}
              cta="Learn more"
            />
          </div>
        </motion.div>
      </section>

      {/* Why Veurone */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl">
          <h3 className="text-white text-xl font-semibold">Built with precision, powered by AI. Designed for speed and scalability.</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <Star className="text-violet-300" size={18} />
              <p className="text-slate-300 text-sm">Pixel-perfect experiences</p>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="text-cyan-300" size={18} />
              <p className="text-slate-300 text-sm">Rapid delivery, 10× faster</p>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="text-silver-200" size={18} />
              <p className="text-slate-300 text-sm">Secure and scalable foundations</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Case Studies Preview */}
      <section id="case-studies" className="mx-auto max-w-7xl px-4 py-10">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">See What We’ve Built.</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'AI Agent for SaaS Support', desc: 'Automated Tier-1 support with 92% resolution.' },
              { title: 'Automated Video Creator', desc: 'Turn scripts into fully edited clips at scale.' },
              { title: 'Workflow Bot for Finance', desc: 'Automations for reporting, reconciliation, alerts.' },
              { title: 'Research Copilot', desc: 'Summarization, data extraction, and insights.' },
              { title: 'Sales Enablement Agent', desc: 'Qualifies leads and drafts proposals dynamically.' },
              { title: 'Data QA Assistant', desc: 'Flags anomalies across live dashboards.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition group">
                <div className="h-32 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 ring-1 ring-white/10" />
                <h4 className="mt-4 text-white font-semibold">{c.title}</h4>
                <p className="text-sm text-slate-300">{c.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="mx-auto max-w-7xl px-4 py-16">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">From Idea to Launch in 3 Steps.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { step: '1', title: 'Strategy & Blueprint', desc: 'Discovery, architecture, and success criteria.' },
              { step: '2', title: 'AI Development', desc: 'Build apps, agents and automations in sprints.' },
              { step: '3', title: 'Deployment & Optimization', desc: 'Go live, measure, and iterate for ROI.' },
            ].map((s, i) => (
              <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="absolute -top-3 left-6 rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/30">{s.step}</div>
                <h4 className="mt-2 text-white font-semibold">{s.title}</h4>
                <p className="text-sm text-slate-300">{s.desc}</p>
                {i < 2 && <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 bg-gradient-to-r from-violet-400/40 to-cyan-400/40 sm:block" />}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 p-10 text-center backdrop-blur-xl">
          <h3 className="text-white text-2xl font-bold">Start automating your business today.</h3>
          <a href="#contact" className="mt-4 inline-block rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">Book a Free Call</a>
        </motion.div>
      </section>

      {/* Blog */}
      <section id="blog" className="mx-auto max-w-7xl px-4 pb-20">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Insights on the Future of AI.</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Designing Agents for Reliability', tag: 'Agents' },
              { title: 'Automation Playbooks for Ops', tag: 'Automation' },
              { title: 'Video Editing with AI — 2025', tag: 'Video' },
            ].map((p) => (
              <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition">
                <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-white/10" />
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-200 ring-1 ring-white/10">{p.tag}</span>
                </div>
                <h4 className="mt-2 text-white font-semibold">{p.title}</h4>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 pb-20">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">We’re Veurone — Crafting the Future of Work.</h2>
          <p className="mt-3 text-slate-300">Our mission is to make AI accessible and effortless. We blend creativity, technology, and speed.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <h5 className="text-white font-semibold">Team</h5>
              <p className="text-sm text-slate-300">Full-stack engineers, ML experts, designers, and producers.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold">Vision</h5>
              <p className="text-sm text-slate-300">A world where intelligent systems handle the busywork.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold">Values</h5>
              <p className="text-sm text-slate-300">Precision, velocity, and customer obsession.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-28">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s Build Something Intelligent.</h2>
            <form className="mt-6 grid gap-4">
              <input className="rounded-xl bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-400 ring-1 ring-white/10 focus:ring-cyan-400/40 outline-none" placeholder="Name" />
              <input className="rounded-xl bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-400 ring-1 ring-white/10 focus:ring-cyan-400/40 outline-none" placeholder="Email" type="email" />
              <textarea className="min-h-[120px] rounded-xl bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-400 ring-1 ring-white/10 focus:ring-cyan-400/40 outline-none" placeholder="Message" />
              <button type="button" className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 w-fit">Send Message</button>
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-8 backdrop-blur-xl lg:col-span-2">
            <h3 className="text-white font-semibold">Visit Us</h3>
            <p className="text-sm text-slate-300">123 Future Ave, Suite 2025\nSan Francisco, CA</p>
            <div className="mt-6 h-48 w-full rounded-xl bg-[radial-gradient(circle_at_center,rgba(124,108,255,0.25),rgba(0,255,255,0.15),transparent_70%)] ring-1 ring-white/10" />
            <div className="mt-6 flex items-center gap-3">
              <a href="https://client.veurone.com" className="rounded-full bg-white/10 px-4 py-2 text-xs text-white ring-1 ring-white/15 hover:bg-white/20">Client Login</a>
              <a href="https://employee.veurone.com" className="rounded-full bg-white/10 px-4 py-2 text-xs text-white ring-1 ring-white/15 hover:bg-white/20">Employee Login</a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
