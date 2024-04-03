import Link from "next/link";

export default function StudentList(){
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="text-2xl">Student List</h1>        
            <ul className="p-2">
                <li>
                    <Link href="/studentlist/student1">Student 1</Link>
                </li>
                <li>
                    <Link href="/studentlist/student2">Student 2</Link>
                </li>
                <li>
                    <Link href="/studentlist/student3">Student 3</Link>
                </li>
                <li>
                    <Link href="/studentlist/student4">Student 4</Link>
                </li>
            </ul>
        </main>
    )
}