import { useEffect } from "react";
import { useState } from "react"

const Data = () =>{
  const[item, setItem] = useState([]);

  useEffect(() =>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setItem(data))
  },[])
  return[item, setItem()]
}
export default Data;