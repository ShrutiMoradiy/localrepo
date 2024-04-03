'use client'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Fetch Data with API in client Component</h1>
      <button className="border p-2 rounded m-10" onClick={() => router.push("/products")}>Product List</button>
      
    </main>
  );
}
