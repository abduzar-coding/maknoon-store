 {/* Content area (only this changes) */}
      <main className="flex-1 flex items-center justify-center px-4 border-y border-slate-200">
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
