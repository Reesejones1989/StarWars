import React from 'react'

export default function Starships({ data }) {
    console.log()
    return (
    <div>
    
    
{data.map((ships, i)=>{
    return( 
    <p class='shipDesigner' 
    key={i}>
        {ships.name}
        <br/>
        
        
        {/* <p>Model: {ships.model}</p> */}
        {/* <p>Films: {ships.films}</p> */}
        {/* <p>URL: {ships.url}</p> */}


        </p> 
        
        )
       
    }
  )
}
</div>
  )}
