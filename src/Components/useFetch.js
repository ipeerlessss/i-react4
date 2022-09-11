import { useState , useEffect} from "react";

const useFetch = (url) => {
const [data, setData] = useState(null)
useEffect(() => {
fetch(url) 
.then((res) => res.json())
.then((data) => setData(data))


} , [data])
return [data]



}

export default useFetch