'use client'
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../../saleor/api";
import Link from "next/link";
import { formatReal } from "../utils/formatReal";

export function ProductDetail({ id }) {
  const { data, loading } = useGetProductByIdQuery({
    variables: {
      id: id
    }
  })
  const detailProduct = data?.product;

  return (
    <main className="flex flex-col gap-4">
      <section>
        <header className="flex items-center justify-between mb-5 border-b-[1px] border-solid border-border-100">
          <h1 className="text-2xl px-4 p-2 border-b-2 border-solid border-detailsPrimary-100 max-sm:text-xl">Detalhes do produto</h1>
        </header>
        <div className="flex flex-row max-sm:flex-col flex-1 w-ful">
          <div className="flex flex-1">
            {detailProduct?.media?.map((image) =>
              <div key={image.id} className="w-full h-full max-h-80">
                <img src={image.url} className="w-full h-full" />
              </div>
            )}
          </div>
          <div className="flex flex-col flex-1 px-2 gap-4">
            <h1 className="text-2xl font-medium">{detailProduct?.name}</h1>
            {detailProduct?.description}
            <strong className="text-detailsSecondary-500">R$ {formatReal(detailProduct?.pricing?.priceRangeUndiscounted?.stop?.gross?.amount!)}</strong>
            <button className="bg-detailsPrimary-100 p-2 w-full rounded mt-2 hover:bg-blue-600">
              <span className="text-background-50 font-semibold">Comprar</span>
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-1 px-2">
        <strong className="text-lg">Recomendados para você</strong>
        <div className="flex flex-row flex-1 overflow-x-auto gap-2">
          {detailProduct?.category?.products?.edges.map((product) => (
            <Link key={product.node.id} href={`/details/${product.node.id}`} className="flex flex-col flex-1 min-h-fit max-w-[150px]">
              <div className="w-36 h-40 overflow-hidden">
                <img className="w-full h-full" src={product.node.thumbnail?.url} alt={product.node.thumbnail?.alt!} />
              </div>
              <div className="flex flex-col items-center">
                <p>{product.node.name}</p>
                <strong>R$ {product.node.pricing?.priceRangeUndiscounted?.stop?.gross.amount}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}