import React from'react';
import { useState} from "react";

    


const Toggle =() =>{

const [num, setNum]= useState(0);

const incNum=()=>{
    setNum(num +1);
};

const decNum=()=>{
    setNum(num -1);
};

return(
<>
<div className='main_div' style={{width:"100%",height:"100vh",background:"orange",display:"flex",flexDirection:"row",
justifyContent:"center",alignItems:"center",textAlign:"center"}}> 
<div className='center_div' style={{width:"25%",height:60,backgroundColor:"white",
borderRadius:"15 px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
<h1 style={{color:"blueviolet",background:"transparent",fontSize:"50px",backgroundColor:"chartreuse",width:"100%"}} >   {num}</h1>
<div className="btn_div" style={{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
    <button onClick={incNum} style={{minHeight:"40px",borderRadius:"5%",color:"blue",fontSize:"20px",border:"none",outline:"none",
    padding:"0 15px",marginTop:"30px",}}> Increm</button>
    <button  onClick={decNum}
    style={{minHeight:"40px",borderRadius:"5%",color:"blue",fontSize:"20px",border:"none",outline:"none",
    padding:"0 15px",marginTop:"30px",}} > Decrem</button>
</div></div>
</div>
</>

)


}
export default Toggle;