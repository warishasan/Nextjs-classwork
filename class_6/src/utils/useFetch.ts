import { useState, useEffect } from "react";

const useFetch = (url:string) => {
    const [data, setData] = useState<{userId:number,id:number,completed:boolean,title:string}[] | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;