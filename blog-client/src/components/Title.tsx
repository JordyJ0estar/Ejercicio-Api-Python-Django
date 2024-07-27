import { Typography } from "@mui/material";
import Link from "next/link";

const TitleApi = () => {
    return (  
        <Typography variant="h5" >
            <Link href={"/"} className="title">Ejercicio Python con Django usando API</Link>
        </Typography>
    );
}
 
export default TitleApi;