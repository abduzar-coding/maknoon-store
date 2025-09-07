import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
        
        {/* Socials (order-1 on mobile, right on desktop) */}
        <div className="flex justify-center sm:justify-end gap-6 text-lg order-1 sm:order-2">
          <a
            href="https://t.me/maknoonmanager"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <FaTelegramPlane /> Telegram
          </a>
          <a
            href="https://instagram.com/noon_blogg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500 transition"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        {/* Brand info (order-2 on mobile, left on desktop) */}
        <p className="font-medium text-slate-700 order-2 sm:order-1">
          © {new Date().getFullYear()} Maknoon Store
        </p>
      </div>
    </footer>
  )
}