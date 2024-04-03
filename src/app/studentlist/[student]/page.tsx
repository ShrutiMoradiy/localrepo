"use client"
import { useRouter } from "next/navigation";

export default function Student({
    params
}: Readonly<{
    params: any;
}>)
{
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-between p-24">
            <h1 className="text-2xl">Student Details</h1>
            <h3>Name : {params.student}</h3>
            <button className="border p-2 rounded m-10" onClick={() => router.push("/studentlist")}>Student List</button>

        </div>
    )
}