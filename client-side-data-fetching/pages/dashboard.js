import { useState, useEffect } from "react";
export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/dashboard");
      const content = await res.json();
      setData(content);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading your data...</h2>;
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
