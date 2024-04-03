export default function Student({
    name
}: Readonly<{
    name: any;
}>) {
    return (
        <div className="flex flex-col items-center justify-between p-24">
            <h1 className="text-2xl">Student Details</h1>
            {name && <h3>Name : {name.student}</h3>}
        </div>
    )
}