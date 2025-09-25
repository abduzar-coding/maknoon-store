import { useMemo, useState } from "react"
import Intro from "./components/Intro"
import ProductCard from "./components/ProductCard"
import ProductDetailCard from "./components/ProductDetailCard"
import Footer from "./components/Footer"
import { motion, AnimatePresence } from "framer-motion"



export default function App() {
  const products = useMemo(
  () => [
    {
      id: 1,
      name: "Qur’on Jurnali",
      img: "/images/quron-jurnali.jpg",
      description: "30-pora tafsiri, qaydlar, eslatmalar qilish va qayta yozib chiqish uchun mo’ljallangan jurnal",
      price: "65 000 so‘m",
      bg: "bg-gradient-to-r from-pink-200 via-fuchsia-100 to-white bg-[length:200%_200%] animate-gradient-x",
    },
    {
      id: 2,
      name: "Arabcha Husnixat Daftari",
      img: "/images/arabcha-husnixat.jpg",
      description: "Allohning 99 ismi sifatlarini o’rganish va sharhlash uchun mo’ljallangan jurnal",
      price: "40 000 so‘m",
      bg: "bg-gradient-to-r from-indigo-200 via-sky-100 to-white bg-[length:200%_200%] animate-gradient-x",
    },
    {
      id: 3,
      name: "Asma-ul Husna Jurnali",
      img: "/images/asma-ul-husna.jpg",
      description: "Husnixat - Arab yozuvini go‘zal va to‘g‘ri yozishni o‘rgatuvchi mashq daftari.",
      price: "60 000 so‘m",
      bg: "bg-gradient-to-r from-emerald-200 via-teal-100 to-white bg-[length:200%_200%] animate-gradient-xy",
    },
    {
      id: 4,
      name: "Husnixati Qur’on (1–10 pora)",
      img: "/images/quron-husnixat1.jpg",
      description: "Qur’onning 1–10 poralari uchun husnixat mashqlari.",
      price: "90 000 so‘m",
      bg: "bg-gradient-to-r from-yellow-200 via-orange-100 to-white bg-[length:200%_200%] animate-gradient-y",
    },
    {
      id: 5,
      name: "Husnixati Qur’on (10–20 pora)",
      img: "/images/quron-husnixat2.jpg",
      description: "Qur’onning 10–20 poralari uchun husnixat mashqlari.",
      price: "90 000 so‘m",
      bg: "bg-gradient-to-r from-purple-200 via-violet-100 to-white bg-[length:200%_200%] animate-gradient-x",
    },
    {
      id: 6,
      name: "Husnixati Qur’on (20–30 pora)",
      img: "/images/quron-husnixat3.jpg",
      description: "Qur’onning 20–30 poralari uchun husnixat mashqlari.",
      price: "90 000 so‘m",
      bg: "bg-gradient-to-r from-rose-200 via-pink-100 to-white bg-[length:200%_200%] animate-gradient-xy",
    },
  ],
  []
)




  const [page, setPage] = useState(0)

  return (
    <div
      className={`min-h-screen w-full flex flex-col transition-colors duration-700 ${
        page === 0
          ? "bg-[url('/images/main-bg.jpeg')] bg-cover bg-center"
          : products[page - 1].bg
      }`}
    >
      {/* Logo (static at top) */}
      <header className="py-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          MAKNOON<span className="text-pink-400">STORE</span>
        </h1>
      </header>

      {/* Content area (only this changes) */}
     <main className="flex-1 flex items-center justify-center px-4 perspective-1000">
      <div
        className="
          w-full sm:w-[600px] md:w-[700px] lg:w-[800px]
          min-h-[400px] sm:min-h-[500px] md:min-h-[600px]
          flex items-center justify-center
          overflow-y-auto rounded-2xl 
          shadow-[0_20px_40px_rgba(0,0,0,0.2)] 
          bg-white/60 transform transition-transform duration-500
          hover:rotate-x-2 hover:rotate-y-2
        "
      >
        {page === 0 ? (
          <div className="w-full h-full overflow-y-auto px-4 py-6">
            <Intro products={products} setPage={setPage} />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-8 p-6">
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
    className="px-4 py-1.5 rounded-full 
               bg-gradient-to-r from-indigo-500 to-purple-500
               text-white text-sm font-medium
               shadow-md hover:shadow-lg
               transition-all duration-300"
  >
    Bosh sahifa
  </button>

  {/* Oldingi / ← */}
  <button
    onClick={() => setPage((p) => (p === 0 ? 6 : p - 1))}
    className="px-4 py-1.5 rounded-full 
               bg-indigo-100/70 backdrop-blur-sm
               text-indigo-700 text-sm font-medium
               shadow hover:bg-indigo-200 transition"
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
        className={`h-3 w-3 rounded-full transition-all duration-300 shadow
          ${
            page === i
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 scale-125 shadow-md"
              : "bg-slate-300 hover:bg-slate-400"
          }`}
      />
    ))}
  </div>

  {/* Keyingi / → */}
  <button
    onClick={() => setPage((p) => (p === 6 ? 0 : p + 1))}
    className="px-4 py-1.5 rounded-full 
               bg-indigo-100/70 backdrop-blur-sm
               text-indigo-700 text-sm font-medium
               shadow hover:bg-indigo-200 transition"
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