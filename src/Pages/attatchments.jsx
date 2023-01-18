import { useState } from "react";
import { getAllAttachments, deleteAttachment } from "../utils/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
export default function Example() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: Attachments,
    error,
  } = useQuery("Attachments", getAllAttachments);

  const deleteAttachmentMutaion = useMutation(deleteAttachment, {
    onSuccess: () => {
      queryClient.invalidateQueries("Attachments");
    },
  });

  if (isLoading) return "Loading...";
  if (isError) return "Error: " + error.message;

  return (
    <div className="p-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Attachments</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Attachment
          </button>
        </div>
      </div>
      <div className="mt-8">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-20 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {Attachments.map((attachment) => (
            <li key={attachment.name} className="relative">
              <img
                src={attachment.url}
                alt=""
                className="object-contain rounded-lg pointer-events-none group-hover:opacity-75"
              />
              <div className="w-full flex flex-col ">
                <p className="my-2 text-center block text-base font-medium text-gray-900 truncate pointer-events-none">
                  {attachment.name}
                </p>
                <button
                  onClick={() => deleteAttachmentMutaion.mutate(attachment.id)}
                  className="p-2 text-white rounded-lg bg-red-600 hover:bg-red-900"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
