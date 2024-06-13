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
    <h1>Counter Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
  </div>
  );
};

export default Play;
