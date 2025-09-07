import { useState } from "react"

export default function ProductCard({ product }) {
  const [show, setShow] = useState(false)

  return (
    <div
        onClick={() => setShow((s) => !s)}
        className="aspect-[3/4] w-full max-w-[160px] sm:max-w-[180px] relative overflow-hidden rounded-xl shadow border border-slate-200 bg-white hover:shadow-lg transition mx-auto group cursor-pointer"
    >
    <img
        src={product.img}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div
        className={`absolute bottom-0 left-0 right-0 bg-black/25 text-white text-sm sm:text-base font-semibold px-2 py-2 text-center transition-all duration-300 
        ${
        show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full sm:group-hover:opacity-100 sm:group-hover:translate-y-0"
        }`}
    >
        {product.name}
    </div>
    </div>
  )
}