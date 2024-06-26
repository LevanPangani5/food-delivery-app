import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getFeatured = async () => {
  const products = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!products.ok) {
    throw new Error("Error ocured during fetching featureds");
  }
  return products.json();
};
const Featured = async () => {
  const featuredProducts: ProductType[] = await getFeatured();
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/*WRAPPER*/}
      <div className="w-max flex">
        {/*SINGLE ITEM*/}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] xl:[33vw] h-[60vh] xl:h[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300"
          >
            {/* IMAGE CONTAINER*/}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/*TEXT CONTAINER*/}
            <div className="flex-1 flex flex-col text-center justify-center items-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className=" text-xl font-bold ">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
