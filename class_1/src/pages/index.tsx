import DisplayComponent from "@/components/Home/Display";
import InfoComponent from "@/components/Home/Info"; 
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";

// export default function Home() {
//   return (
//     <div>
//       this is my homepage
//       <InfoComponent/>
//       <DisplayComponent/>
//     </div>
//     );
// }


 
type Repo = {
  name: string
  stargazers_count: number
}
 
// export const getStaticProps:GetStaticProps<{repo: Repo}> = (async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo:repo } }
// })  
 
// export default function Page({repo}: InferGetStaticPropsType<typeof getStaticProps>) {
//   return <div>{repo.stargazers_count}</div>
// }


export default function Home() {


  const [data,setData] = useState<number|undefined>(undefined)

  const fetchData = async()=>{

  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo:Repo = await res.json()
  console.log('repo',repo)
  setData(repo.stargazers_count)
  }


  fetchData()
  // useEffect(()=>{

  //   fetchData()

  // },[])

  return (
    <div>
      {data === undefined ? <p>loading...</p> : <p>{data}</p>}
    </div>
    );
}

