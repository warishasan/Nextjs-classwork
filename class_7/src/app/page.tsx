'use client'

import { increment,decrement, incrementByAmount, decrementByAmount } from "@/redux/counterSlice";
import { useAppDispatch,useAppSelector } from "@/redux/store";
import Link from "next/link";

export default function Home() {

  let currentState = useAppSelector((state)=>state.counter.value)
  let dispatch  = useAppDispatch();

  return (
    <div >
      counter value : {currentState}
      <div>
      <button className="bg-blue-100" onClick={()=>dispatch(increment())}>Increment</button>
      <button className="bg-blue-100" onClick={()=>dispatch(decrement())}>Decrement</button>

      <button className="bg-blue-100" onClick={()=>dispatch(incrementByAmount(10))}>Inc +10</button>
      <button className="bg-blue-100" onClick={()=>dispatch(decrementByAmount(10))}>Dec  -10</button>

      </div>
    

      <Link href={'./about'}>
      <h1>go to about page</h1>
      </Link>
    </div>

     );
}


