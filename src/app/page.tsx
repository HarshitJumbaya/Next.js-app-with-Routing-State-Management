"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import '../app/globals.css';



export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600 mb-4">This is our next.js application with State Handling by Redux and routing.</h1>
      <br /><br />
      <div>

        <Link className="text-green-600 font-semibold underline hover:underline" href="/play">Link to PLAY page </Link>

      </div>
      <br />
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push("play")}>PLAY page</button>
      <br /><br />



      <div>
      <button className="bg-pink-500 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded" onClick={() => router.push("shadcn")}>SHADCN UI component</button>

      </div>
    </main>
  );
}
