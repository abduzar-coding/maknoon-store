export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-xs aspect-[3/4] rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-hidden relative">
      {/* Product Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover"
      />

    </div>
  )
}

