import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
  return await res.json();
};

export default function DashboardSWR() {
  const { data, isLoading, error } = useSWR("dashboard", fetcher);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (isLoading) {
    return <p style={{ color: "blue" }}>Loading...</p>;
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
      <h2>Followers: {data.followers}</h2>
      <h2>Following: {data.following}</h2>
    </main>
  );
}
