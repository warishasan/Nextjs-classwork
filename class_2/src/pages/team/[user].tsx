import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './team.module.css'

type Repo = {
  name: string
  stargazers_count: number
}
 
export const getStaticPaths:GetStaticPaths = (async () => {

  return {
    paths: [
      {
        params: {
          user: 'waris',
        },
      }, 
      {
        params: {
          user: 'ali',
        },
      }, 
    ],
    fallback: false, 
  
  }
})  
 
export const getStaticProps:GetStaticProps<{
  repo: Repo
}> = (async (context) => {


  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const repo = await res.json()

  return { props: { repo:{'name':'sad',stargazers_count:1213} } , revalidate:10 }
})  
 
export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const [counter,setCounter] = useState(0)

  useEffect(()=>{},[])

  return (
    <div>
      <p style={{color:'red',fontSize:'50px', background:'blue'}}>{repo.stargazers_count}</p>
      <p>{counter}</p>
      <button className={styles.normal}  onClick={()=>setCounter(counter+1)}>increment</button>
    </div>
  )
}