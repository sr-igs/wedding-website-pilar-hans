import { Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer(){
    
    const styles = {
        textAlign:"center",
        padding:"1rem",
        marginTop:"2rem",
        fontFamily: "'Martel','serif'",
        color:"#E65631"
    }

    const router = useRouter();

    return(
        <div style={styles}>
            <Divider variant="middle" />
            <p style={{fontSize:"2rem",marginBottom:"0"}}>
                <Link href={router.asPath} locale="es" style={{ margin: "0 8px" }}>{"🇪🇸"}</Link> 
                <Link href={router.asPath} locale="de" style={{ margin: "0 8px" }}>{"🇩🇪"}</Link>
                <Link href={router.asPath} locale="en" style={{ margin: "0 8px" }}>{"🇬🇧"}</Link>
            </p>
            <p style={{marginTop:0}}>Copyright Pilar and Hans 2026</p>
        </div>
    )
}