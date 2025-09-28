import styles from "./DetailsForm.module.css";
import { Card,CardContent,Grid,TextField,Select,InputLabel,MenuItem } from "@mui/material";

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

    function onBusChange(e){
        let value = e.target.value;
        props.handleChange(props.id,value,"bus")
    }

    const t = props.translation;

 return(
    <Grid>
    <div className={styles.mainDiv}>
        <Card variant="outlined">
            <CardContent>
                <h4>{props.name}</h4>
                <TextField sx={{mb:2}} value={props.dietary} fullWidth label={t("dietaryQ")} id={`dietary-${props.name}`} onChange={onDietaryChange} />
                <TextField sx={{mb:2}} value={props.song} fullWidth label={t("songQ")} id={`music-${props.name}`} onChange={onSongChange} />
                <TextField multiline rows={2} value={props.other} fullWidth label={t("otherQ")} id={`others-${props.name}`} onChange={onOtherChange}/>
                <InputLabel id="bus-select-question">{t("busTitle")}</InputLabel>
                {/* TODO: Fix this so that it actually select the right option */}
                <Select labelId="bus-select-question" id="bus-select-question" value={props.bus} label="Bus" onChange={onBusChange} >
                    <MenuItem value={10}>{t("busOption1")}</MenuItem>
                    <MenuItem value={10}>{t("busOption2")}</MenuItem>
                    <MenuItem value={10}>{t("busOption3")}</MenuItem>
                    <MenuItem value={10}>{t("busOption4")}</MenuItem>
                </Select>
            </CardContent>
        </Card>
    </div>
    </Grid>
 )
}

export default DetailsForm