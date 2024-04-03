'use client'
import { useRouter } from "next/navigation";

const LoginTeacher = () => {
  const router = useRouter();

    return (
      <div className="flex flex-col items-center justify-between p-24">
        <h1 className="text-5xl">Login Teacher</h1>
        {/* <button className="border p-2 rounded m-10" onClick={() => router.push("/login")}>Login</button> */}
      
      </div>
    )
  }
  
  export default LoginTeacher
  