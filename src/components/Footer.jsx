export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
              <span className="text-white font-semibold">Veurone</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">©2025 Veurone.com</p>
          </div>
          <div className="text-slate-300 text-sm grid grid-cols-2 gap-2">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
          <div className="text-right">
            <a href="https://client.veurone.com" className="text-sm text-slate-300 hover:text-white">Client Login</a>
            <span className="mx-2 text-slate-500">·</span>
            <a href="https://employee.veurone.com" className="text-sm text-slate-300 hover:text-white">Employee Login</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
