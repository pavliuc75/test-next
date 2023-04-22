import Head from 'next/head'
import Link from "next/link";

export default function Home() {
    return (<>
        <Head>
            <title>Cool</title>
        </Head>
        <main>
            <header>
                <h1>Main</h1>
            </header>
            <nav>
                <Link href="/posts/1">To post 1</Link>
            </nav>
        </main>
    </>)
}
