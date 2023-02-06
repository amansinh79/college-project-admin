import { useQuery } from "react-query";
import { getStats } from "../utils/api";

export default function Dashboard() {
  const {
    isLoading,
    error,
    data: stats,
  } = useQuery("stats", getStats, {
    refetchInterval: 5000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="h-screen">
      <dl className="grid grid-cols-3 gap-5 mx-auto text-center p-10 h-full">
        {Object.keys(stats).map((item) => (
          <div
            key={item}
            className=" flex items-center justify-center align-middle overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <div>
              <dt className="truncate text-base font-medium text-gray-500">
                {item}
              </dt>
              <dd className="mt-1 text-4xl font-semibold tracking-tight text-gray-900">
                {stats[item]}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
