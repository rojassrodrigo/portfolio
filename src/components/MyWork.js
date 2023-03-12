import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const MyWork = ({title, id, dark}) => {
    const clases = useStyles();
    return (
        <div className={`${clases.section} ${dark && clases.sectiondark}`}>
            <div className={clases.sectionCont} id={id}>
                <Typography variant="h3">{title}</Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh"
    },
    sectiondark: {
        background: "#333",
        color: "#fff"
    },
    sectionCont:{
        maxWidth: "80vw",
        margin: "0 auto",

    }
  }))


export default MyWork;