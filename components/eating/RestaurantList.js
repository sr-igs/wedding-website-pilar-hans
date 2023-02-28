import { Masonry } from "@mui/lab";
import DoCard from "../ui/DoCard";

export default function RestaurantList(props){
    return(
        <Masonry columns={{xs:1,sm:2,md:3,lg:4,xl:5}} spacing={2}>
            {/* <DoCard key={i.title} image={i.image} title={i.title} description={i.description} link={i.link} /> */}
            {props.data.map(d=>{
                return(<DoCard key={`rest-${d.title}`} title={d.title} description={d.description} link={d.link} image={null} address={d.address} />)
            })}
        </Masonry>
    )
}