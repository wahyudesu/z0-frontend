import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#07102a] text-slate-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">z0</h3>
            <p className="mt-4 text-sm text-slate-300">Look Engineering, Inc</p>
            <p className="mt-2 text-sm text-slate-400">support@z0.tech</p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold mb-4">Discover More</h4>
            <nav className="flex flex-col gap-3 text-sm text-slate-300">
              <Link className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                Terms of Use
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                PressKit
              </Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold mb-4">Follow us</h4>
            <nav className="flex flex-col gap-3 text-sm text-slate-300">
              <Link className="hover:text-white transition-colors" href="#">
                X (Twitter)
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                TikTok
              </Link>
            </nav>
          </div>
        </div>

        {/* decorative watermark */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -mb-16 opacity-5 flex justify-center">
          <div className="text-[180px] font-extrabold text-slate-300">z0</div>
        </div>
      </div>
    </footer>
  );
}
