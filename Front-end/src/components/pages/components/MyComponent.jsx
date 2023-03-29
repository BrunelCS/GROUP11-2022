import React, { useState, useEffect } from 'react';

import logo3 from './images.jpeg';



function MyComponent() {
 
            
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/user')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>

      <div className="container s2">
        
            {data.map(item => (
        <div className='row' key={item.id}>
          <div className='col-3'>
          <img  src={logo3} alt="" />
          
          </div>
          <br />
          <div className='col-3'>
          <p><strong>Event name</strong>: {item.title}</p>
          
          <p><strong>Event location</strong>:{item.address}</p>

          <p><strong>Organiser</strong>:{item.organizer}</p>
          <p><strong>Fee</strong>:£{item.fee}</p>
         
          
          </div>
          
        </div>
      ))}
    </div>
      
    </div>
  );
}

export default MyComponent;