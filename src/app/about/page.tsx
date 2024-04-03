'use client'
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

    return (
      <div className="flex flex-col items-center justify-between p-24">
        <h1 className="text-5xl">About Page</h1>
        <button className="border p-2 rounded m-10" onClick={() => router.push("/")}>Home</button>
        
        <button className="border p-2 rounded m-10" onClick={() => router.push("/about/aboutcollege")}>About College</button>
        <button className="border p-2 rounded m-10" onClick={() => router.push("/about/aboutstudent")}>About Student</button>
      
      </div>
    )
  }
  
  export default About
  