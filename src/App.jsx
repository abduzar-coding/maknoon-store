import { useMemo, useState } from "react"
import Intro from "./components/Intro"
import ProductCard from "./components/ProductCard"
import ProductDetailCard from "./components/ProductDetailCard"
import Footer from "./components/Footer"

export default function App() {
  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Qur’on Jurnali",
        img: "/images/quron-jurnali.jpg",
        description:
          "Qur’on o‘qishni rejalashtirish va qayd qilish uchun maxsus jurnal.",
        price: "79 000 so‘m",
        bg: "bg-pink-50",
      },
      {
        id: 2,
        name: "Arabcha Husnixat Daftari",
        img: "/images/arabcha-husnixat.jpg",
        description:
          "Arab yozuvini go‘zal va to‘g‘ri yozishni o‘rgatuvchi mashq daftari.",
        price: "59 000 so‘m",
        bg: "bg-indigo-50",
      },
      {
        id: 3,
        name: "Asma-ul Husna Jurnali",
        img: "/images/asma-ul-husna.jpg",
        description:
          "Allohning go‘zal ismlari bilan tanishish va kundalik yozuvlar uchun jurnal.",
        price: "89 000 so‘m",
        bg: "bg-emerald-50",
      },
      {
        id: 4,
        name: "Husnixati Qur’on (1–10 pora)",
        img: "/images/quron-husnixat1.jpg",
        description: "Qur’onning 1–10 poralari uchun husnixat mashqlari.",
        price: "149 000 so‘m",
        bg: "bg-yellow-50",
      },
      {
        id: 5,
        name: "Husnixati Qur’on (10–20 pora)",
        img: "/images/quron-husnixat2.jpg",
        description: "Qur’onning 10–20 poralari uchun husnixat mashqlari.",
        price: "149 000 so‘m",
        bg: "bg-purple-50",
      },
      {
        id: 6,
        name: "Husnixati Qur’on (20–30 pora)",
        img: "/images/quron-husnixat3.jpg",
        description: "Qur’onning 20–30 poralari uchun husnixat mashqlari.",
        price: "149 000 so‘m",
        bg: "bg-rose-50",
      },
    ],
    []
  )

  const [page, setPage] = useState(0)

  return (
    <div
      className={`min-h-screen w-full flex flex-col ${
        page === 0 ? "bg-white" : products[page - 1].bg
      }`}
    >
      {/* Logo (static at top) */}
      <header className="py-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          MAKNOON<span className="text-pink-400">STORE</span>
        </h1>
      </header>

      {/* Content area (only this changes) */}
      <main className="flex-1 flex items-center justify-center px-4 ">
        <div
          className="
            w-full max-w-5xl 
            min-h-[400px]        /* small devices */
            sm:min-h-[500px]    /* >=640px */
            md:min-h-[600px]    /* >=768px */
            flex items-center justify-center
          "
        >
          {page === 0 ? (
            <Intro products={products} setPage={setPage} />
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <ProductCard product={products[page - 1]} />
              <ProductDetailCard product={products[page - 1]} />
            </div>
          )}
        </div>
      </main>


      {/* Pagination (static) */}
      <div className="py-6 flex items-center gap-4 flex-wrap justify-center">
        {/* Bosh sahifa (always visible) */}
        <button
          onClick={() => setPage(0)}
          className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium hover:bg-indigo-200"
        >
          Bosh sahifa
        </button>


        {/* Oldingi / ← */}
        <button
          onClick={() => setPage((p) => (p === 0 ? 6 : p - 1))}
          className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium hover:bg-indigo-200"
        >
          <span className="sm:hidden">←</span>
          <span className="hidden sm:inline">Oldingi</span>
        </button>

        {/* Page dots */}
        <div className="flex gap-2">
          {Array.from({ length: 7 }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                page === i
                  ? "bg-indigo-500 scale-125 animate-pulse"
                  : "bg-indigo-200 hover:bg-indigo-300"
              }`}
            />
          ))}
        </div>

        {/* Keyingi / → */}
        <button
          onClick={() => setPage((p) => (p === 6 ? 0 : p + 1))}
          className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium hover:bg-indigo-200"
        >
          <span className="sm:hidden">→</span>
          <span className="hidden sm:inline">Keyingi</span>
        </button>
      </div>

      {/* Footer (static at bottom) */}
      <Footer />
    </div>
  )
}