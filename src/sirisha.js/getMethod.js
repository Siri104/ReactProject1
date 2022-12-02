import React,{useState,useEffect}from 'react'
import axios from 'axios';


const getMethod = () => {
    const [data2,setData2] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            response => setData2(response.data)
        )
    },[])
  return (
    <div>
        {data2.map(i => <li key={i.id}>{i.title}</li>
    )}
    </div>
  )
}

export default getMethod;