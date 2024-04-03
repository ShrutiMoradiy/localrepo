"use client"
import { useRouter } from "next/navigation";

export default function Student({
    params
}: Readonly<{
    params: any;
}>)
{
    console.log(params)
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-between p-24">
            <h1 className="text-2xl">
                Day of Lecture {params.lecture[0]}
            </h1>
            <h3>Lecture No. {params.lecture[1]}</h3>
            <button className="border p-2 rounded m-10" onClick={() => router.push("/study")}>Study</button>

        </div>
    )
}