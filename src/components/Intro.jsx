import IntroCard from "./IntroCard"

export default function Intro({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8 px-4 mx-auto">
      {products.map((product) => (
        <IntroCard key={product.id} product={product} />
      ))}
    </div>
  )
}
