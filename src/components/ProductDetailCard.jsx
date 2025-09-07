export default function ProductDetailCard({ product }) {
  return (
    <div className="flex-1 flex flex-col justify-center px-6">
      {/* Product Name */}
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        {product.name}
      </h2>

      {/* Product Description */}
    <p className="text-slate-600 mb-6">
        {product.description}
    </p>
          
    {/* Product Price */}
      <p className="text-lg font-semibold text-indigo-600 mb-4">
        {product.price}
      </p>

      {/* Buy Button */}
      <a
        href={`https://t.me/maknoonmanager?text=Salom,%20men%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.price)})%20sotib%20olmoqchiman`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition text-center font-medium"
      >
        Sotib olish
      </a>
    </div>
  )
}