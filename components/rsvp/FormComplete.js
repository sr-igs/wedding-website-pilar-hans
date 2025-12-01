import styles from "./FormComplete.module.css";
import { Button, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function FormComplete(props) {

  const t = props.translation;
  const today = new Date();
  const changeDate = new Date(props.changeDate);
  const isAfterChangeDate = today.getTime()>=changeDate.getTime()
  //today.getTime() > changeDate.getTime()

  const menuMap = {
    meat: "meat",
    fish: "fish",
    vegetarian: "vegetarian",
  };

  const busMap = {
    no_bus: "busOption1",
    both_ways: "busOption2",
    there_only: "busOption3",
    return_only: "busOption4",
  };

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
                    <strong>{t("dietaryT")}</strong>: {person.dietary}
                  </p>
                )}
                {attending && (
                  <p
                    key={`songText-${person.name}`}
                    id={`songText-${person.name}`}
                  >
                    <strong>{t("songT")}</strong>: {person.song}
                  </p>
                )}
                {attending && (
                  <p
                    key={`menuText-${person.name}`}
                    id={`menuText-${person.name}`}
                  >
                    <strong>Menu</strong>: {t(menuMap[person.other])}
                  </p>
                )}
                {attending && (
                  <p
                    key={`busText-${person.name}`}
                    id={`busText-${person.name}`}
                  >
                    <strong>Bus</strong>: {t(busMap[person.bus])}
                  </p>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div className={styles.changeDiv}>
        <h4>
          {!isAfterChangeDate
            ? `${t("changeOne")} ${props.changeDate} ${t("changeTwo")}`
            : t("noChange")}
        </h4>
        {!isAfterChangeDate && (
          <Button variant="outlined" onClick={props.onChangeClick}>
            {t("changeButton")}
          </Button>
        )}
      </div>
    </div>
  );
}

export default FormComplete;
