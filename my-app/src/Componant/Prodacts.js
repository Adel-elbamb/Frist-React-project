 import { useEffect , useState } from "react";
import Prodact from "./Prodact";
export default function Prodacts() {

const api_url = "https://fakestoreapi.com/products";
const [prodactss , setProdactss] = useState([]);
   useEffect (() => {
    fetch (api_url)
    .then((res) => res.json())
    .then ((data) => setProdactss(data));
   
  },[]);
  


  return (
    <>
      <h1 className=" head"> Our Prodacts</h1>

      <div className="container">
        <div className="row">
        {prodactss.map((prodact) => {
          return (
            <div className="col-3" key = {prodact.id} style = {{padding : 30}}>
            <Prodact  prodact = {prodact}/>
            </div>
          );
        }) }
       
        </div>
      </div>
    </>
  );
}
