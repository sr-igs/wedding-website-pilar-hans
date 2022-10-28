export default function SpainArrival(props){
    return(
       <div>
            <h4>{"Flying direct to Valencia"}</h4>
            {props.location==="rest"&&<ul>
                <li>{"We unfortunately couldn't add information for many more places, but we recommend websites like "}<a>{"Rome to Rio"}</a>{" to find more information."}</li>
                <li>{"Of course, please feel free to "}<a>{"contact us"}</a>{" if you have any questions."}</li>
            </ul>}
            {props.location==="australia"&&<ul>
                <li>{"You can book a direct flight between major Australian cities and Valencia"}</li>
                <li>{"At the time of writing, this will require at least 2 changes: one in a major international hub, and one in a major European airport"}</li>
                <li>{"It is likely that there will be a long layover between flights, and you might have to cross the European border at the major European aiport to enter the Schengen area, so the options below might be better."}</li>
            </ul>}
            {props.location==="uk"&&<ul>
                <li>{"Getting to Valencia (VLC) from the UK is very easy, with several daily flights across the UK."}</li>
                <li><strong>{"From London"}</strong>{", you have the following options"} </li>
                <ul>
                    <li><strong>{"From Stansted"}</strong>{", there are daily flights with Ryanair, with two flights certain days."}</li>
                    <li><strong>{"From Gatwick"}</strong>{", there are several flights a day with Easyjet and Vueling."}</li>
                    <li><strong>{"From Heathrow"}</strong>{", there are daily flights with British Airways."}</li>
                    <li><strong>{"From Luton"}</strong>{", there are two flights a week with Wizz Air to Castellon (CDT). This airport is a bit far from Valencia so we'd avoid it if possible."}</li>
                </ul>
                <li><strong>{"From elsewhere in the UK"}</strong>{",there are weekly or daily flights to Valencia. For example, there's flights 4 times a week from Manchester, or 2 times a week from Edinburgh"}</li>
            </ul>}
            {props.location==="uk"||props.location==="australia"&&<div>
            <h4>{"Flying to a major Spanish airport"}</h4>
            <ul>
                <li>{"You can fly to either Madrid or Barcelona. At the time of writing, you can get to Madrid with 1 change in Dallas, US, and to Barcelona through several routes with 1 stop, like Abu Dhabi or Singapore."}</li>
                <li><strong>{"To get to Valencia from Madrid"}</strong>{", you can get the high speed train (AVE or ALVIA) from city centre to city centre, which will take approximately 1 hours and 50 minutes. Renting a car and driving should take around 3 hours. There's also a couple of flights a day, but the high speed train is usually more convenient."}</li>
                <li><strong>{"To get to Valencia from Barcelona"}</strong>{", you can either get the train from city centre to city centre, which takes just under 3 hours, or rent a car and drive, which should also take around 3 hours."}</li>
            </ul>
            <h4>{"Flying to a European airport"}</h4>
            <ul>
                <li>{"Valencia airport is well connected to many European cities. If you want to spend some time in another European country, you should be able to get a flight to Valencia most days from most major European cities"}</li>
                <li>{"London, Rome or Paris, for example, have several daily flights to Valencia."}</li>
            </ul>
            </div>}
       </div> 
    )
}