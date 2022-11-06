export default function SpainArrival(props){
    return(
       <div>
            <h4>{"Flying direct to Valencia"}</h4>
            {props.location==="rest"&&<ul>
                <li>{"We unfortunately couldn't add information for many more places, but we recommend websites like "}<a target="_blank" rel="noreferrer" href="https://www.rome2rio.com">{"Rome 2 Rio"}</a>{" to find more information."}</li>
                <li>{"Of course, please feel free to contact us if you have any questions. You can find our details in the menu."}</li>
            </ul>}
            {props.location==="australia"&&<ul>
                <li>{"You can book a direct flight between major Australian cities and Valencia"}</li>
                <li>{"At the time of writing, this will require at least 2 changes: one in a major international hub, and one in a major European airport"}</li>
                <li>{"It is likely that there will be a long layover between flights, and you might have to cross the European border at the major European aiport to enter the "}<a href="https://www.schengenvisainfo.com/schengen-visa-countries-list/" target="_blank" rel="noreferrer">{"Schengen area"}</a> {", so the options below might be better."}</li>
            </ul>}
            {props.location==="uk"&&<ul>
                <li>{"Getting to Valencia (VLC) from the UK is very easy, with several daily flights."}</li>
                <li><strong>{"From London"}</strong>{", you have the following options"} </li>
                <ul>
                    <li><strong>{"From Stansted"}</strong>{", there are daily flights with Ryanair, with two flights certain days. Please note that Ryanair also flies to Castellon, which is marketed as Valencia but is 100km away, so we'd avoid it if possible. Please see the 'Getting to Valencia City Centre' section."}</li>
                    <li><strong>{"From Gatwick"}</strong>{", there are several flights a day with Easyjet and Vueling."}</li>
                    <li><strong>{"From Heathrow"}</strong>{", there are daily flights with British Airways."}</li>
                    <li><strong>{"From Luton"}</strong>{", there are two flights a week with Wizz Air to Castellon (CDT). This airport is 100km away from Valencia so we'd avoid it if possible."}</li>
                </ul>
                <li><strong>{"From elsewhere in the UK"}</strong>{",there are weekly or daily flights to Valencia. For example, there's flights 4 times a week from Manchester, or 2 times a week from Edinburgh"}</li>
            </ul>}
            {props.location==="australia"&&<div>
            <h4>{"Flying to a major Spanish airport"}</h4>
            <ul>
                <li>{"Flying to Madrid"}</li>
                <ul>
                    {<li>{"As of November 2022, you can fly to Madrid with 1 change in Dallas, US. There are several options to get to Valencia from Madrid:"}</li>}
                    <li><strong>{"Train:"}</strong>{"There's a high speed train connection between the two city centres. This usually takes just under 2 hours. We recommend booking with "}<a target="_blank" rel="noreferrer" href="https://www.thetrainline.com/">{"Trainline"}</a></li>
                    <li><strong>{"Flying:"}</strong>{"There are several connections a day between Madrid and Valencia. The flight takes about an hour. The train is usually a more convenient option."}</li>
                    <li><strong>{"Bus:"}</strong>{"There are regular bus services. This takes 4 and a half hours (or more) and it's usually cheaper than trains or flights (although you can find some cheap trains at times!). You can also book this through "}<a target="_blank" rel="noreferrer" href="https://www.thetrainline.com/">{"Trainline"}</a></li>
                    <li><strong>{"Driving:"}</strong>{"If you're renting a car at the airport, the drive is about 3 hours."}</li>
                </ul>
                <li>{"Flying to Barcelona"}</li>
                <ul>
                    <li>{"As of November 2022, you can fly to Barcelona with 1 change, and there are several routes available (e.g. through Abu Dhabi or Singapore):"}</li>
                    <li><strong>{"Train:"}</strong>{"There's a train connection between the two city centres. This usually takes just under 3 hours. We recommend booking with "}<a target="_blank" rel="noreferrer" href="https://www.thetrainline.com/">{"Trainline"}</a></li>
                    <li><strong>{"Flying:"}</strong>{"There are several connections a day between Barcelona and Valencia. The flight takes about an hour. The train is usually a more convenient option."}</li>
                    <li><strong>{"Bus:"}</strong>{"There are regular bus services. This takes 4 and a half hours (or more) and it's usually cheaper than trains or flights (although you can find some cheap trains at times!). You can also book this through "}<a target="_blank" rel="noreferrer" href="https://www.thetrainline.com/">{"Trainline"}</a></li>
                    <li><strong>{"Driving:"}</strong>{"If you're renting a car at the airport, the drive is about 3.5 hours."}</li>
                </ul>
            </ul>
            <h4>{"Flying to a European airport"}</h4>
            <ul>
                <li>{"Valencia airport is well connected to many European cities. If you want to spend some time in another European country, you should be able to get a flight to Valencia most days from most major European cities"}</li>
                <li>{"London, Rome or Paris, for example, have several daily flights to Valencia."}</li>
            </ul>
            </div>}
            {props.location!=="rest"&&<div><h4>{"Getting to Valencia from elsewhere in Spain"}</h4>
            <ul>
                <li>{"If you're planning a Spanish roadtrip and would like to get to Valencia from anywhere else in Spain, please let us know and we'll happily help you find the best option."}</li>
                <li>{"Please contact us through the details in the 'Contact' menu"}</li>
            </ul></div>}
       </div> 
    )
}