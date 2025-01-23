"use client";

import { useRouter } from "next/navigation";
import Button from "../component/Button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">This page is coming soon!</p>
      <Button fill onClick={() => router.push("/")}>Go to Home</Button>
    </div>
  );
};

export default NotFoundPage;
