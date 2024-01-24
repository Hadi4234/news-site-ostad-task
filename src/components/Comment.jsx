"use client"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Comment() {
  const {
    data,
    isLoading,
    isError: error,
  } = useSWR(
    "http://localhost:3000/api/category",
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
       <ul>
          {data['data'].map((comment, index) => (
            <li key={index}>
              {comment.name}
            </li>
          ))}
        </ul>
  );
}