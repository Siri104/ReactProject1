import React,{useState,useEffect} from 'react'

const Hook1 = () => {
    const [name,setName] = useState("Sirisha");

    useEffect(() =>{ setName(name)=> name}


    

  return (
    <div> <h1 onClick={()=> setName("Welcome sirisha")}>{name}</h1></div>

  )
}

export default Hook1

