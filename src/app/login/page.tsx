'use client'
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
    
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Login Page</h1>
      <button className="border p-2 rounded m-10" onClick={() => router.push("/")}>Home</button>

      <button className="border p-2 rounded m-10" onClick={() => router.push("/login/loginstudent")}>Login Student</button>
      <button className="border p-2 rounded m-10" onClick={() => router.push("/login/loginteacher")}>Login Teacher</button>
      
    </div>
  )
}

export default Login
