import Link from "next/link";

export default function Layout({
    children
}: Readonly<{
    children: any;
}>) {
    return (
        <>
            <ul className="flex justify-around p-2">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/login/loginstudent">Login Student</Link>
                </li>
                <li>
                    <Link href="/login/loginteacher">Login Teacher</Link>
                </li>
            </ul>
            {children}
        </>
    )
}