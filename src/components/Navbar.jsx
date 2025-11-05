import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 sm:p-4 shadow-lg shadow-black/20">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
            <span className="text-sm sm:text-base font-semibold tracking-wide text-white">Veurone</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <a
              href="https://client.veurone.com"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Client Login
            </a>
            <a
              href="https://employee.veurone.com"
              className="ml-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
            >
              Employee Login
            </a>
          </nav>

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl px-4 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-white/10" />
            <a href="https://client.veurone.com" className="block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5">Client Login</a>
            <a href="https://employee.veurone.com" className="block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5">Employee Login</a>
          </div>
        </div>
      )}
    </header>
  );
}
