'use client'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Home Page</h1>
      <button className="border p-2 rounded m-10" onClick={() => router.push("/studentlist")}>Student List</button>
      <button className="border p-2 rounded" onClick={() => router.push("/login")}>Login</button>
      <button className="border p-2 rounded" onClick={() => router.push("/about")}>About</button>
      <button className="border p-2 rounded" onClick={() => router.push("/study")}>Study</button>
    
    </main>
  );
}
