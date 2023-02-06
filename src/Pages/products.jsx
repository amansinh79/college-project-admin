import React, { useState } from "react";
import classNames from "../utils/classNames";
import { getAllProducts } from "../utils/api";
import { useQuery } from "react-query";
import { navigate } from "@reach/router";

export default function Products() {
  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useQuery("products", getAllProducts);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  console.log(products);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Products</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          >
            Add product
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 ">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Thumbnail
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {products.map((product, productIdx) => (
                    <tr
                      key={productIdx}
                      className={classNames(
                        productIdx % 2 === 0 ? undefined : "bg-gray-50",
                        "hover:bg-gray-100 hover:cursor-pointer"
                      )}
                      onClick={() => {
                        navigate(`/editproduct/${product.id}`);
                      }}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {product.id}
                      </td>

                      <td className="py-4 pl-4 pr-3 sm:pl-6">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={product.thumbnail}
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {product.name}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        ₹ {product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
