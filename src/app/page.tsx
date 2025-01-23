import Dashboard from "./Container/Dashboard";

async function fetchColumns() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/columns`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch columns");
  }

  return res.json();
}

async function fetchData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const [columns, data] = await Promise.all([fetchColumns(), fetchData()]);

  return <Dashboard columns={columns} data={data} />;
}
