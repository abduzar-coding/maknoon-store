export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
        <p className="font-medium text-slate-700">
          © {new Date().getFullYear()} Maknoon Store. Barcha huquqlar himoyalangan.
        </p>
        <div className="flex gap-6">
          <a
            href="https://t.me/maknoonmanager"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            Telegram
          </a>
          <a
            href="#"
            className="hover:text-indigo-600 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}