import { Divider } from "@mui/material"

export default function Footer(){
    const styles = {
        textAlign:"center",
        padding:"1rem",
        marginTop:"2rem",
        fontFamily: "'Martel','serif'",
        color:"#AEA4D0"
    }

    return(
        <div style={styles}>
            <Divider variant="middle" />
            <p>Copyright Ignacio and Catherine 2023</p>
        </div>
    )
}