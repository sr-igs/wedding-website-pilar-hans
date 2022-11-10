import styles from "./Venue.module.css"

export default function VenueStay(){
    return(
        <div className={styles.mainDiv}>
            <h3 className={styles.title}>{'"Only You" Hotel (*****)'}</h3>
            <div className={styles.address}>
                <em>{"📍 Plaça de Rodrigo Botet, 5, 46002 València"}</em>
            </div>
            <div className={styles.text}>
            <p >{"If you'd like to stay at the venue, a 5* hotel right in the city centre of Valencia, guests can get a 15% discount using the code below and booking through"} 
            <a className={styles.hotelLink} href="https://www.onlyyouhotels.com/en/hotels/only-you-hotel-valencia/" target="_blank" rel="noreferrer"> {"their website."}</a>{"It is also pet friendly."}</p>
            </div>
            <div className={styles.discountCode}>
                <strong>{"Discount Code:"}</strong> {"ENLACEIGNACIOYCATHERINE"}
            </div>
        </div>
    )
}