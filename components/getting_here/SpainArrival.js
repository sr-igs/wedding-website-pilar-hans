import { useTranslation } from 'next-i18next';

export default function SpainArrival(props){
    const {t} = useTranslation("arrivingValencia");
    
    return(
       <div>
            <h4>{t("title")}</h4>
            {props.location==="rest"&&<ul>
                <li>{"We unfortunately couldn't add information for many more places, but we recommend websites like "}<a target="_blank" rel="noreferrer" href="https://www.rome2rio.com">{"Rome 2 Rio"}</a>{" to find more information."}</li>
                <li>{"Of course, please feel free to contact us if you have any questions. You can find our details in the menu."}</li>
            </ul>}
            {props.location==="us"&&<ul>
                <li>{"You can book a direct flight between major Australian cities and Valencia"}</li>
                <li>{"At the time of writing, this will require at least 2 changes: one in a major international hub, and one in a major European airport"}</li>
                <li>{"It is likely that there will be a long layover between flights, and you might have to cross the European border at the major European aiport to enter the "}<a href="https://www.schengenvisainfo.com/schengen-visa-countries-list/" target="_blank" rel="noreferrer">{"Schengen area"}</a> {", so the options below might be better."}</li>
            </ul>}
            {props.location==="germany"&&<ul>
                <li><strong>{t("boldSection1De")}</strong></li>
                <ul>
                    <li>{t("section1-1De")}</li>
                    <li>{t("section1-2De")}</li>
                    <li>{t("section1-3De")}</li>
                </ul>
                <li><strong>{t("boldSection2De")}</strong></li>
                <ul>
                    <li>{t("section2-1De")}</li>
                </ul>
                <li><strong>{t("boldSection3De")}</strong></li>
                <ul>
                    <li>{t("section3-1De")}</li>
                </ul>
              
            </ul>}
            {props.location==="us"&&<div>
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