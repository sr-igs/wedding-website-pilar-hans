import styles from "./FormComplete.module.css";
import { Button, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function FormComplete(props) {
  return (
    <div className={styles.mainDiv}>
      <h3>{"Thank you for RSVPing"}</h3>
      <h4>{"This is what you told us"}</h4>
      <Grid container justifyContent="center" spacing={3}>
        {props.people.map((person) => {
          let attending = person.rsvp === "yes";
          return (
            <Grid key={`grid-${person.name}`}>
              <Card
                variant="outlined"
                sx={{ p: 3, width: "20rem" }}
                key={`summary-${person.name}`}
                id={`summary-${person.name}`}
              >
                <h3 key={`title-${person.name}`} id={`title-${person.name}`}>
                  {person.name}
                </h3>
                <p
                  key={`attendingText-${person.name}`}
                  id={`attendingText-${person.name}`}
                  className={attending ? styles.attending : styles.notAttending}
                >
                  {person.rsvp === "yes"
                    ? "Attending"
                    : "Not attending"}
                </p>
                {attending && (
                  <p
                    key={`dietaryText-${person.name}`}
                    id={`dietaryText-${person.name}`}
                  >
                    {"Dietary Requirements"}:{person.dietary}
                  </p>
                )}
                {attending && (
                  <p
                    key={`songText-${person.name}`}
                    id={`songText-${person.name}`}
                  >
                    {"Requested song"}:{person.song}
                  </p>
                )}
                {attending && (
                  <p
                    key={`otherText-${person.name}`}
                    id={`othertText-${person.name}`}
                  >
                    {"Other information"}:{person.other}
                  </p>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div className={styles.changeDiv}>
        <h4>
          {props.changePossible
            ? `Need to change your response? You can do it until ${props.changeDate} by clicking the button below`
            : "Unfortunately you can't change your response through the website. Please contact us if you have any changes."}
        </h4>
        {props.changePossible && (
          <Button variant="outlined" onClick={props.onChangeClick}>
            {"Change Response"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default FormComplete;
