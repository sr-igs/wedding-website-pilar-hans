import Header from "../../components/Header";
import StayCard from "../../components/ui/StayCard";
import VenueStay from "../../components/accomodation/Venue";
import OtherStay from "../../components/accomodation/Other";

export default function WhereToStayPage(props){
    return(
        <div>
            <Header />
            <StayCard title="Stay at the reception venue">
                <VenueStay />
            </StayCard>
            <StayCard title="Recommended places to stay">
                <OtherStay />
            </StayCard>
        </div>
    )
}