"use client";
import { useAppDispatch, useAppSelector } from "@/store";

export default function Counter() {

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[70px] mr-2"
          onClick={() => dispatch({ type: "counter/increment" })}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[70px] mr-2"
          onClick={() => dispatch({ type: "counter/decrement" })}
        >
          -1
        </button>
      </div>
      <button
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[140px] my-2 mr-2"
        onClick={() => dispatch({ type: "counter/reset" })}
      >
        Reset
      </button>
    </div>
  );
}
