import { CircularProgress } from "@mui/material";
import {Box} from "@mui/material";

export default function LoadingModal(){

    const styles = {
        width:"10rem",
        color:"white",
        margin:"0 auto",
        textAlign:"center",
        marginTop:"20%"
    }

    return(
        <Box sx={styles}>
            <CircularProgress color="primary" />
            <h3>Loading</h3>
        </Box>
    )
}