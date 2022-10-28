import styles from "./DetailsForm.module.css";
import { Card,CardContent,Grid,TextField } from "@mui/material";

function DetailsForm(props){

    function onDietaryChange(e){
        let value = e.target.value;
        props.handleChange(props.id,value,"dietary");
    }

    function onSongChange(e){
        let value = e.target.value;
        props.handleChange(props.id,value,"song");
    }

    function onOtherChange(e){
        let value = e.target.value;
        props.handleChange(props.id,value,"other");
    }

 return(
    <Grid>
    <div className={styles.mainDiv}>
        <Card variant="outlined">
            <CardContent>
                <h4>{props.name}</h4>
                <TextField sx={{mb:2}} value={props.dietary} fullWidth label={"Any dietary requirements?"} id={`dietary-${props.name}`} onChange={onDietaryChange} />
                <TextField sx={{mb:2}} value={props.song} fullWidth label={"A song you'd love to hear"} id={`music-${props.name}`} onChange={onSongChange} />
                <TextField multiline rows={2} value={props.other} fullWidth label={"Anything else we should know?"} id={`others-${props.name}`} onChange={onOtherChange}/>
            </CardContent>
        </Card>
    </div>
    </Grid>
 )
}

export default DetailsForm