import { addProduct } from "../utils/api";

export default function AddProduct() {
  return (
    <form className="space-y-8 divide-y divide-gray-200 p-10">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add Product
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Name
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Price
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    autoComplete="price"
                    className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Slug
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    autoComplete="slug"
                    className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Category
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex items-center gap-10 rounded-md">
                  <div>
                    <input
                      type="radio"
                      id="category"
                      name="category"
                      value="men"
                    ></input>
                    <label className="ml-2">men</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="category"
                      name="category"
                      value="women"
                    ></input>
                    <label className="ml-2">women</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  defaultValue={""}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Write a few sentences about product.
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Thumbnail
              </label>
              <div className="mt-1">
                <input
                  className="min-w-full flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                  type="file"
                  id="thumbnail"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Attachments
              </label>
              <input
                className="min-w-full flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                type="file"
                id="attachments"
                multiple
              />
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Submit
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const formData = new FormData();
                    const name = document.getElementById("name").value;
                    const price = document.getElementById("price").value;
                    const category = document.getElementById("category").value;
                    const description =
                      document.getElementById("description").value;
                    const thumbnail =
                      document.getElementById("thumbnail").files[0];
                    const attachments =
                      document.getElementById("attachments").files;

                    formData.append("name", name);
                    formData.append("price", price);
                    formData.append("category", category);
                    formData.append("description", description);
                    formData.append("thumbnail", thumbnail);

                    for (let i = 0; i < attachments.length; i++) {
                      formData.append("attachments", attachments[i]);
                    }

                    const res = addProduct(formData);
                    if (res === 200) {
                      alert("Product added successfully");
                      router.push("/products");
                    } else {
                      alert("Something went wrong");
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
