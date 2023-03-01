import { getAllFeedbacks } from "../utils/api";
import classNames from "../utils/classNames";
import { useQuery } from "react-query";

export default function Example() {
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useQuery("feedbacks", getAllFeedbacks);
  console.log(reviews);
  if (isLoading) return "Loading...";
  if (isError) return "Error: " + error.message;

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Feedbacks</h1>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <div className="px-10 bg-white">
                {reviews &&
                  reviews.map((review, reviewIdx) => (
                    <div
                      key={review.id}
                      className="flex space-x-4 text-sm text-gray-500"
                    >
                      <div className="flex-none py-10">
                        <img
                          src="/avatar.png"
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-100"
                        />
                      </div>
                      <div
                        className={classNames(
                          reviewIdx === 0 ? "" : "border-t border-gray-200",
                          "flex-1 py-10"
                        )}
                      >
                        <h3 className="font-medium text-gray-900">
                          {review.name || review.username}
                        </h3>
                        <p>
                          <time dateTime={review.datetime}>
                            {review.email}
                            <br></br>
                            {new Date(review.createdAt).toDateString()}
                          </time>
                        </p>

                        <div className="prose prose-sm mt-4 max-w-none text-gray-700">
                          {review.feedback}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
