import react from "react";
import "./Submit.css";
import ok from"./ok1.png";

export default function Submit()
{
    return(<>
           <div className="parent">
             <div className="submit_div">
           <a href="/gstprogress"> <img src={ok} alt="" /></a>   
             </div>
             </div>
    </>)
}