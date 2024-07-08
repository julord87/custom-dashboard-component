"use client"
import { IoCartSharp } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store";

const WidgetsGrid = () => {


    const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center">
        <SimpleWidget 
          title={count}
          subtitle="Productos en el carrito"
          label="Carrito"
          icon={<IoCartSharp size={40} className="text-blue-600" />}
          href="/dashboard/counter"
        />
    </div>
  )
}

export default WidgetsGrid