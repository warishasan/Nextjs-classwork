

export const dynamicParams = true


export async function generateStaticParams() {
    // const posts = await fetch('https://.../posts').then((res) => res.json())
   
    return ([{ user: '1' }, { user: '2' }, { user: '3' }])
  
  
  }
  
  
  async function getData(user:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${user}`,{ cache: 'force-cache' ,next:{revalidate:3000}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

 
  
  
  export default async function Page({ params }: { params: { user: number } }) {
    const data = await getData(params.user)
  
    console.log('params',params)
    console.log('data',data)
   
    return (<div>
      <p>userId: {data.userId}</p>
    </div>)
  }