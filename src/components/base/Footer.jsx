const Footer = () => {
  return (
    <footer
      className="
      bg-white
      border-t border-slate-200
      px-6 py-4
    "
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* COPYRIGHT (SOLO AQUÍ) */}
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} W Wallet. All rights reserved.
        </p>

        {/* LINKS */}
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <a className="hover:text-[#0F766E] transition">Privacy</a>
          <a className="hover:text-[#0F766E] transition">Terms</a>
          <a className="hover:text-[#0F766E] transition">Support</a>
        </div>

        {/* BRAND TAG */}
        <div className="text-xs text-slate-400">Secure financial platform</div>
      </div>
    </footer>
  );
};

export default Footer;
