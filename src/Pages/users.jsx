import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { blockUnblockUser, getAllUsers } from "../utils/api";
import Toggle from "../components/Toggle";

export default function users() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: users,
    error,
  } = useQuery("users", getAllUsers);

  if (isLoading) return "Loading...";

  if (isError) return "Error: " + error.message;
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
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
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      USERNAME
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      PASSWORD
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      EMAIL
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="  px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      isBlocked
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {users.map((user, userIdx) => (
                    <tr
                      key={user.email}
                      className={userIdx % 2 === 0 ? undefined : "bg-gray-50"}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {user.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                        {user.username}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                        {"*".repeat(6)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-black">
                        {user.role}
                      </td>
                      <td className="relative whitespace-nowrap text-center text-sm font-medium">
                        {user.role !== "admin" && (
                          <Toggle
                            enabled={user.isBlocked}
                            onChange={async (e) => {
                              await blockUnblockUser(user.id, e);
                              queryClient.invalidateQueries("users");
                            }}
                          />
                        )}
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
