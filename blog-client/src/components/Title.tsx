import { Typography } from "@mui/material";
import Link from "next/link";
import "./Components.css"

const TitleApi = () => {
    return (  
        <Typography className="containerTitle" >
            <Link href={"/"} className="title">Ejercicio Python con Django usando API</Link>
        </Typography>
    );
}
 
export default TitleApi;