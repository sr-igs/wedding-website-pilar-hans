export default function SpainArrival(props){
    return(
       <div>
            <h4>{"Flying direct to Valencia"}</h4>
            {props.location==="australia"&&<ul>
                <li>{"You can book a direct flight between major Australian cities and Valencia"}</li>
                <li>{"At the time of writing, this will require at least 2 changes: one in a major international hub, and one in a major European airport"}</li>
                <li>{"It is likely that there will be a long layover between flights, and you might have to cross the European border at the major European aiport to enter the Schengen area, so the options below might be better."}</li>
            </ul>}
            {props.location==="uk"&&<ul>
                <li>{"Getting to Valencia from the UK is very easy, with several daily flights across the UK."}</li>
                <li><strong>{"From London"}</strong>{", you have daily flights to Valencia from Heathrow, Stansted and Gatwick. You can also find flights several times a week from Luton."} </li>
                <li><strong>{"From elsewhere in the UK"}</strong>{",you should also have weekly if not daily flights to Valencia. This includes Birmingham, Manchester, Liverpool and East Midlands Airport."}</li>
                <li>{"While flying to Valencia (VLC) aiport is preferable, you can also fly into Castellon (CDT), which is about an hour away from Valencia. We would advise avoiding this airport unless necessary, as getting to Valencia can be a bit tricky."}</li>
            </ul>}
            <h4>{"Flying to a major Spanish airport"}</h4>
            <ul>
                <li>{"You can fly to either Madrid or Barcelona. At the time of writing, you can get to Madrid with 1 change in Dallas, US, and to Barcelona through several routes with 1 stop, like Abu Dhabi or Singapore."}</li>
                <li><strong>{"To get to Valencia from Madrid"}</strong>{", you can get the high speed train from city centre to city centre, which will take approximately 1 hours and 50 minutes. Renting a car and driving should take around 3 hours. There's also a couple of flights a day, but the high speed train is more convenient most times."}</li>
                <li><strong>{"To get to Valencia from Barcelona"}</strong>{", you can either get the train from city centre to city centre, which takes just short of 3 hours, or rent a car and drive, which should also take around 3 hours."}</li>
            </ul>
            <h4>{"Flying to a European airport"}</h4>
            <ul>
                <li>{"Valencia airport is well connected to many European cities. If you want to spend some time in another European country, you should be able to get a flight to Valencia most days from most major European cities"}</li>
                <li>{"London, Rome or Paris, for example, has several daily flights to Valencia."}</li>
            </ul>
       </div> 
    )
}