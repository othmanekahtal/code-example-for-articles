import React from "react";
import type { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "features/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mt-4">
        <button
          className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-cyan-700 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="mx-2 font-bold">{count}</span>
        <button
          className="inline-flex items-center rounded border border-transparent bg-cyan-100 px-2.5 py-1.5 text-xs font-medium text-cyan-700 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
