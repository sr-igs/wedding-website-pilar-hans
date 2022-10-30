import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormLabel,Card,CardContent,Grid } from '@mui/material';
import styles from "./RsvpForm.module.css";

function RsvpForm(props){

    function onRsvpChange(e){
        let value = e.target.value;
        props.handleChange(props.id,value,"rsvp");
    }

    const t = props.translation;

    return(
        <div className={styles.mainDiv}>
            <Card variant="outlined">
                <CardContent>
                    <h3>{props.name}</h3>
                    <FormControl>
                        <FormLabel id="rsvp-radio-group-label">{t("joinUs")}</FormLabel>
                        <RadioGroup onChange={onRsvpChange} aria-labelledby="rsvp-radio-group-label" name="rsvp-radio-buttons" value={props.rsvp}>
                            <FormControlLabel value={"yes"} control={<Radio />} label={t("yes")} sx={{m:2}} />
                            <FormControlLabel value={"no"} control={<Radio />} label={t("no")} sx={{m:2}}  />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    )
}

export default RsvpForm