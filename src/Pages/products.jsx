import { Formik } from "formik";
import React, { useState } from "react";
import classNames from "../utils/classNames";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Lindsay Walton",
      slug: "lindsay-walton",
      price: "100",
      quantity: "10",
      sale_price: "90",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl orci aliquet nisl, eu aliquet nunc nunc sit amet elit. Sed euismod, nunc ut aliquam aliquam, nisl orci aliquet nisl, eu aliquet nunc nunc sit amet elit.",
      thumbnail: "https://picsum.photos/200/300",
      edit: false,
    },
    {
      id: 2,
      name: "Lindsay Walton",
      slug: "lindsay-walton",
      price: "100",
      quantity: "10",
      sale_price: "90",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl orci aliquet nisl, eu aliquet nunc nunc sit amet elit. Sed euismod, nunc ut aliquam aliquam, nisl orci aliquet nisl, eu aliquet nunc nunc sit amet elit.",
      thumbnail: "https://picsum.photos/200/300",
      edit: false,
    },
  ]);

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
                      Slug
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Sale_Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {products.map((product, productIdx) =>
                    product.edit ? (
                      <Formik
                        initialValues={{ ...product }}
                        onSubmit={(values) => {
                          values.edit = false;
                          const newProducts = products.map((p) =>
                            p.id === product.id ? values : p
                          );
                          setProducts(newProducts);
                        }}
                        key={productIdx}
                      >
                        {({ values, handleChange, handleSubmit }) => (
                          <tr
                            className={classNames(
                              productIdx % 2 === 0 ? undefined : "bg-gray-50"
                            )}
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {product.id}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <input
                                type="url"
                                name="thumbnail"
                                id="thumbnail"
                                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                defaultValue={values.thumbnail}
                                onChange={handleChange("thumbnail")}
                              />
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                defaultValue={values.name}
                                onChange={handleChange("name")}
                              />
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <input
                                type="text"
                                name="slug"
                                id="slug"
                                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                defaultValue={values.slug}
                                onChange={handleChange("slug")}
                              />
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <input
                                type="number"
                                name="price"
                                min={1}
                                id="price"
                                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder={values.price}
                                onChange={handleChange("price")}
                              />
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder={values.quantity}
                                onChange={handleChange("quantity")}
                              />{" "}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <input
                                type="number"
                                name="sale_price"
                                id="sale_price"
                                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder={values.sale_price}
                                onChange={handleChange("sale_price")}
                              />
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <textarea
                                rows={6}
                                defaultValue={values.description}
                                onChange={handleChange("description")}
                                name="description"
                                id="description"
                                className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button
                                onClick={handleSubmit}
                                href="#"
                                type="button"
                                className="p-2 text-white rounded-lg bg-green-600 hover:bg-green-900 mr-2"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => {
                                  setProducts(
                                    products.filter((p) => p.id !== product.id)
                                  );
                                }}
                                href="#"
                                className="p-2 text-white rounded-lg bg-red-600 hover:bg-red-900"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        )}
                      </Formik>
                    ) : (
                      <tr
                        key={productIdx}
                        className={
                          productIdx % 2 === 0 ? undefined : "bg-gray-50"
                        }
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
                          {product.slug}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          ${product.price}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {product.quantity}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {product.sale_price}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {product.description.slice(0, 20) + "..."}
                        </td>

                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button
                            onClick={() => {
                              const newProducts = [...products];
                              newProducts[productIdx].edit = true;
                              setProducts(newProducts);
                            }}
                            href="#"
                            className="p-2 text-white rounded-lg bg-gray-600 hover:bg-gray-900"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
