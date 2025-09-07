import { useMemo, useState } from "react"
import Intro from "./components/Intro"
// later you'll also import ProductDetailCard here

export default function App() {
  const products = useMemo(
    () => [
      { id: 1, name: "Qur’on Jurnali", img: "/images/quron-jurnali.jpeg" },
      { id: 2, name: "Arabcha Husnixat Daftari", img: "/images/arabcha-husnixat.jpeg" },
      { id: 3, name: "Asma-ul Husna Jurnali", img: "/images/asma-ul-husna.jpeg" },
      { id: 4, name: "Husnixati Qur’on (1–10 pora)", img: "/images/quron-husnixat1.jpeg" },
      { id: 5, name: "Husnixati Qur’on (10–20 pora)", img: "/images/quron-husnixat2.jpeg" },
      { id: 6, name: "Husnixati Qur’on (20–30 pora)", img: "/images/quron-husnixat3.jpeg" },
    ],
    []
  )

  const [page, setPage] = useState(0)

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start py-10">
      {/* Logo */}
      <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
        MAKNOON<span className="text-pink-400">STORE</span>
      </h1>

      {/* Content */}
      {page === 0 ? (
        <Intro products={products} />
      ) : (
        <div className="text-slate-500">Product detail pages will go here</div>
      )}

      {/* Pagination */}
      <div className="mt-12 flex items-center gap-8">
        <button
          onClick={() => setPage((p) => (p === 0 ? 6 : p - 1))}
          className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium hover:bg-indigo-200"
        >
          Oldingi
        </button>

        <div className="flex gap-2">
          {Array.from({ length: 7 }, (_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                page === i ? "bg-indigo-500" : "bg-indigo-200"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setPage((p) => (p === 6 ? 0 : p + 1))}
          className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium hover:bg-indigo-200"
        >
          Keyingi
        </button>
      </div>
    </div>
  )
}
