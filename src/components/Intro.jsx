import IntroCard from "./IntroCard"

export default function Intro({ products, setPage }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 px-4 mx-auto">
      {products.map((product, index) => (
        <IntroCard
          key={product.id}
          product={product}
          onClick={() => setPage(index + 1)} // go to product page
        />
      ))}
    </div>
  )
}