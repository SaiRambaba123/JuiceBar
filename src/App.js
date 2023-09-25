import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import "./style.css"


const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

function App() {

const [search, setsearch]=useState("");
const [drinksdata, setdrinksdata]=useState([])

const fetchdrinksdata= async (apiurl)=>{
   const response=  await fetch(apiurl);
   const {drinks}= await response.json();
  
   setdrinksdata(drinks);
}

useEffect(() => {
    const correctUrl=`${URL}${search}`;
    fetchdrinksdata(correctUrl);

},[search])


  return (
   <div>
       
       <form style={{backgroundColor:"black", height:"160px"}}>
        <img src='https://s3.amazonaws.com/thumbnails.venngage.com/template/28a8070d-00b8-4485-a448-9806e4966e2a.png' style={{height:"8rem"}}></img>
       <input type='text' name='search' id='search' onChange={(e)=>setsearch(e.target.value)} placeholder='search here....' style={{padding:"8px", marginTop:"40px", marginLeft:"40%", borderRadius:"8px"}}></input>
       </form>
       <ul>
        {
          drinksdata.map((obj)=>{
            const {idDrink,strDrink,strDrinkThumb}=obj;
            return <li key={idDrink} style={{ width:"370px", marginBottom:"20px"}}>
               <div className='image'>
                <img src={strDrinkThumb} style={{height:"360px", width:"350px", marginLeft:"10px", marginTop:"50px"}}></img>
               </div>
               <div>
                 <h3 style={{textAlign:"center"}}>DRINK-NAME :{strDrink}</h3>
               </div>
            </li>

          })
        }
       </ul>

           
   </div>
  );
}



export default App;
