import styles from "./FormComplete.module.css";
import { Button, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function FormComplete(props) {

  const t = props.translation;

  return (
    <div className={styles.mainDiv}>
      <h3>{t("thankYou")}</h3>
      <h4>{t("toldUs")}</h4>
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
                    ? t("attending")
                    : t("notAttending")}
                </p>
                {attending && (
                  <p
                    key={`dietaryText-${person.name}`}
                    id={`dietaryText-${person.name}`}
                  >
                    {t("dietaryT")}:{person.dietary}
                  </p>
                )}
                {attending && (
                  <p
                    key={`songText-${person.name}`}
                    id={`songText-${person.name}`}
                  >
                    {t("songT")}:{person.song}
                  </p>
                )}
                {attending && (
                  <p
                    key={`otherText-${person.name}`}
                    id={`othertText-${person.name}`}
                  >
                    {t("otherT")}:{person.other}
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
            ? `${t("changeOne")} ${props.changeDate} ${t("changeTwo")}`
            : t("noChange")}
        </h4>
        {props.changePossible && (
          <Button variant="outlined" onClick={props.onChangeClick}>
            {t("changeButton")}
          </Button>
        )}
      </div>
    </div>
  );
}

export default FormComplete;
