export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-xs aspect-[3/4] rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

