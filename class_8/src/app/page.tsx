"use client";

import { fetchDataThunk } from "@/redux/asyncSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";

export default function Home() {
  let currentState = useAppSelector((state) => state.todos);
  console.log("isFetching", currentState.isFetching);
  console.log("data", currentState.data);
  console.log("error", currentState.error);

  let dispatch = useAppDispatch();

  return (
    <div>
     {currentState.data && 
     <div>
      <p>title : {currentState.data.title}</p>
      <p>id : {currentState.data.id}</p>
      </div>
      }
     {currentState.isFetching ? <p>loading...</p> : currentState.data ?  <p>loading completed</p> : <p>press the button</p>}
      <button onClick={() => dispatch(fetchDataThunk())}>Get Data</button>
    </div>
  );
}
