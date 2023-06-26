import BIRTHDAY from "../assets/BIRTHDAY.jpg"
import engage from "../assets/engage.jpg"
import wed from "../assets/wed.jpg"
import Ani from "../assets/Ani.jpg"
import logo_event from "../assets/logo_event.png"

export function Invitation () {

    return(
        <>

        <header>
            <img  src={logo_event.png}/>
            <h1> Eventify</h1>
        </header>
        <div className="cards">
        <img src={BIRTHDAY}/> 
     <h1> join us to celebrate </h1>
     <p> Birthday </p>
     
            
               <label>Name</label>
                <input type="text"/>
                <label>Date</label>
                <input type="text"/>
                 <label>Time</label>
                <input type="number"/>
                <label>Place</label>
                <input type="text"/>

                </div>

                <div className="cards">
                <img src={engage}/>
     <h1>please join us for a surprise</h1>
     <p> Engagement</p>
     <p> Honoring</p>

               <label>Name</label>
                <input type="text"/>
                <label>Date</label>
                <input type="text"/>
                 <label>Time</label>
                <input type="number"/>
                <label>Place</label>
                <input type="text"/>

                </div>


                <div className="cards">
                <img  src={wed}/> 
     <h1>You are invited to</h1>
     <p> Our Wedding</p>
    

               <label>Name</label>
                <input type="text"/>
                <label>Date</label>
                <input type="text"/>
                 <label>Time</label>
                <input type="number"/>
                <label>Place</label>
                <input type="text"/>

                </div>

                <div className="cards">
                <img  src={Ani}/> 
     <h1>Annievarsary</h1>
     <p> Save the date</p>
     <p> we warmly invite you to our wedding annievarsary</p>

               <label>Name</label>
                <input type="text"/>
                <label>Date</label>
                <input type="text"/>
                 <label>Time</label>
                <input type="number"/>
                <label>Place</label>
                <input type="text"/>

                </div>
        </>
    )
}