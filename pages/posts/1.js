import Head from "next/head";
import Link from "next/link";

export default function Post1() {

    return (
        <>
            <Head>
                <title>Post1</title>
            </Head>
            <main>
                <header>
                    <h1>Post 1</h1>
                </header>
                <nav>
                    <Link href="/">Back to home</Link>
                </nav>
            </main>
        </>
    )
}