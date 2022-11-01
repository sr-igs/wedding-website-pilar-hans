import { Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer(){
    
    const styles = {
        textAlign:"center",
        padding:"1rem",
        marginTop:"2rem",
        fontFamily: "'Martel','serif'",
        color:"#AEA4D0"
    }

    const router = useRouter();

    return(
        <div style={styles}>
            <Divider variant="middle" />
            <p style={{fontSize:"2rem",marginBottom:"0"}}><Link href={router.asPath} locale="es">{"🇪🇸"}</Link> <Link href={router.asPath} locale="en">{"🇬🇧"}</Link></p>
            <p style={{marginTop:0}}>Copyright Ignacio and Catherine 2023</p>
        </div>
    )
}