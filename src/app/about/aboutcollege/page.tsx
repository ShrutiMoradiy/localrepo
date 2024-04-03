'use client'
import { useRouter } from "next/navigation";

const AboutCollege = () => {
    const router = useRouter();
  
      return (
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="text-5xl">About College</h1>
          <button className="border p-2 rounded m-10" onClick={() => router.push("/about")}>About</button>
        
        </div>
      )
    }
    
    export default AboutCollege