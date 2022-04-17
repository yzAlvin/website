import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <Link href="/blog/">Blog</Link>
            <Link href="/projects/">Projects</Link>
        </nav>
    );
}