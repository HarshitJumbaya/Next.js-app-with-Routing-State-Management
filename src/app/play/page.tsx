"use client"

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store'
import { increment, decrement } from '../store/counterSlice';
import Link from 'next/link';
import { useState } from "react";

const Play = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [state, setState] = useState("");

  return (
    <div>
    <h1 className="text-3xl font-bold text-blue-600 mb-4">Counter Page</h1>
      <p className="text-gray-600 font-semibold underline hover:underline">Count: {count}</p>
      <br />
      <button className="bg-pink-500 hover:bg-pink-800 text-white font-bold mx-4 py-2 px-4 rounded" onClick={() => dispatch(increment())}>Increment</button>
      <button className="bg-pink-500 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded"  onClick={() => dispatch(decrement())}>Decrement</button>
      
      <nav>
        <br />
        <ul>
          <li>
            <Link className="text-green-600 font-semibold underline hover:underline" href="/">Home</Link>
          </li>
        </ul>
      </nav>
  </div>
  );
};

export default Play;
