'use client'

import { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";

export default function Page() {

  
// const [data, setData] = useState<{userId:number,id:number,completed:boolean,title:string}[] | null>(null);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => setData(data));
// }, []);


const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

 
return (
  <div>
    {!data? <p>loading</p>:
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
  </div>
)
}

 
