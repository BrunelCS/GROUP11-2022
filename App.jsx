import React , { useEffect, useState}from 'react';
import Events from './Events';
import axios from 'axios';


function App() {

            const [ event, setEvents] = useState([])

            useEffect(() =>{
                    showEvents();
            }, []);

            const showEvents = async() => {
                    const display = await axios.get("http://localhost:8080/events");
                    setEvents(display.data);

            }

     
    
    
          
    



    return (
<>
{
 
event.map ((eve)=> (
            
        <Events title={eve.title} location ={eve.address} fee ={eve.fee} stdate ={eve.start_date.toString()} content = {eve.content} /> 
        
))}

        
  </>     


    )
        

    
}

export default App;