import react from "react"
import "./Events.css"


function Events() {
    return ( <
        div className = "Events" >
        <
        img id = "topImg"
        src = { "./images/icebergs-and-glaciers-in-iceland.jpg" }
        />

        <
        div class = "centerText" > GET INVOLVED AND BE A PART OF SAVING THE WORLD

        <
        /div> 


        <
        div >


        <
        div className = "containerTop" >
        <
        h1 className = "containerContent" > Participate and create a community < /h1>

        <
        h2 className = "containerContent" > Come one Come all, discover the climate action programmes near to you < /h2> </div >



        <
        div >
        <
        div className = "contBodyLeft" >
        <
        div class = "card" >
        <
        button id = "calendar" >
        <
        div id = "date" > 2 < /div>  <
        div id = "month" > JAN < /div> </button >

        <
        /div>

        <
        div class = "card" >
        <
        button id = "calendar" >
        <
        div id = "date" > 3 < /div> <div id = "month" > FEB </div > < /button> </div >

        <
        div class = "card" >
        <
        button id = "calendar" >
        <
        div id = "date" > 5 < /div> <div id = "month" > MAR </div > < /button> </div >

        <
        div class = "card" >
        <
        button id = "calendar" >
        <
        div id = "date" > 7 < /div> <div id = "month" > MAR </div > < /button> </div >

        <
        div class = "card" >
        <
        button id = "calendar" >
        <
        div id = "date" > 11 < /div> <div id = "month" > MAR </div > < /button> </div >

        <
        div class = "card" >
        <
        button id = "calendar" >
        <
        div id = "date" > 13 < /div> <div id = "month" > AUG </div > < /button> </div >

        <
        div class = "card" >
        <
        button id = "calendar" >
        <
        div id = "date" > 17 < /div> <div id = "month" > AUG </div > < /button> </div > < /div>


        <
        div className = "contBodyRight" >
        <
        div class = "descriptionCard" >
        <
        h3 > eventInfo < /h3> <button id = "discoverDescript" > DISCOVER MORE </button > < /div> </div >

        <
        /div>  



        <
        /div> </div >


    )
}

export default Events;