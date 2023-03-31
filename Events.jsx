import React , {useState} from 'react';
import "./Events.css";



export default function Events({title , stdate, location, content})
{     

        //const info = [title, date, location,  content];
        const [ singleTitle, setTitle] = useState('');
        const [ singleDate, setDate] = useState('');
        const [ singleLocation, setLocation] = useState('');
        const [ singleContent, setContent] = useState('');

        const allData = () => {
                setTitle(title);
                setDate(stdate);
                setLocation(location);
                setContent(content);
                
        }


        const monArray = ["JAN", "FEB" , "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
        let month = stdate.slice(6, 7);

        const printMonth = (monthArray) =>
        {
        for (let i = month; i < 13; i++) {
                if( month = monArray[i-1])
                {
                return month;
                }
              }
        }

       

        

        return(
                <>
               <div className = "Events" >
                        <img id = "topImg"src = { "./images/icebergs-and-glaciers-in-iceland.jpg" } />
                
                        <div class = "centerText" > GET INVOLVED AND BE PART OF SAVING THE WORLD</div> 

        
                 <div>
                        <div className = "containerTop">
                                <h1 className = "containerContent" > Participate and create a community </h1>
                        
                                <h2 className = "containerContent" > Come one Come all, discover the climate action programmes near to you </h2> 
                                
                        </div >

                        
                                
                                                
                       <div> 
                             <input className="searchbar" type="search" placeholder="Enter your Location"  />
                             <button className ="searchbutton" type="submit"> Search </button>
                        </div>
                                                
                                                
                                        
                            

                       

                </div>
               


                <div> 
            

                <div className = "contBodyLeft" >

                                <div class = "card"  >
                                

                                <button id = "calendar" onClick={() => {setTitle(title);  setDate(stdate); setLocation(location); setContent(content);}}> 
                                {stdate.slice(9)}  {printMonth(month)}      </button >

                                </div>
                     
                        


                        </div>


                    
                       

        
                <div className = "contBodyRight" >

                        <div class = "descriptionCard" >
                                
                                <h3> {singleTitle} </h3>

                                <p>  {singleDate} </p> 
                                <p>  {singleLocation} </p>  
                                <p> {singleContent} </p> 
                                
                                
                                <button id = "discoverDescript" > DISCOVER MORE </button > 
                        </div> 
             
                </div >
        
      
                
                
          
                </div>

                             

                </div>
             
        
</>

        )
        
       

};







