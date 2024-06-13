"use client"
import type { NextPage } from 'next';
import Link from 'next/link';
import {useRouter} from 'next/navigation';


export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>This is our next.js application with State Handling by Redux and routing.</h1>

      <Link href="/play">Go to the play page for playing with numbers</Link>
    <br />
    <br />
      <button onClick={()=>router.push("about ")}>Go to the play page for playing with numbers</button>
    </main>
  );
}
