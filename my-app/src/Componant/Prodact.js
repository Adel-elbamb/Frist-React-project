import React from 'react'

export default  function Prodact(props) {
 const {prodact} = props ;
  console.log(props);
  return (
    <>
             <div class="card" style = {{height :800}}>
              <img src= {prodact.image} class="card-img-top" alt={prodact.title}  style={{padding : 10}} />
              <div class="card-body">
                <h5 class="card-title">{prodact.title}</h5>
                <p class="card-text">
                {prodact.description}
                </p>
                <button href="#" class="btn btn-primary">
                  Go somewhere
                </button>
              </div>
            </div>
    
    </>
  )
}

