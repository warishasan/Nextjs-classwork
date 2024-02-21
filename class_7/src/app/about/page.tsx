'use client'

import { increment,decrement, incrementByAmount, decrementByAmount } from "@/redux/counterSlice";
import { useAppDispatch,useAppSelector } from "@/redux/store";

export default function Home() {

  let currentState = useAppSelector((state)=>state.counter.value)
  let dispatch  = useAppDispatch();

  return (
    <div className=" text-6xl">
      counter value : {currentState}
      </div>

     );
}


