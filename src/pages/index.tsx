import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Temple of Silent Code</title>
      </Head>
      <main>
        <h1>Hoş geldin</h1>
        <nav>
          <ul>
            <li><Link href="/manifesto">Manifesto</Link></li>
            <li><Link href="/rituals">Ritüeller</Link></li>
            <li><Link href="/about">Hakkında</Link></li>
          </ul>
        </nav>
      </main>
    </>
  );
}


