import { useState } from "react"


  
  async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1',{ cache: 'force-cache' ,next:{revalidate:3000}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  
  
  export default async function Page() {
    const data = await getData()


  
    console.log('data',data)
   
    return (<div>
      <p>hello world my id from component is: {data.userId}</p>
    </div>)
  }