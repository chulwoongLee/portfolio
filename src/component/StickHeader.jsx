import React, { Fragment } from "react";
import { Card, Typography } from "@mui/material";
export default function StickHeader(props) {
    return (
        <Fragment>
            <div style={{ top: 0, position: "sticky", backgroundColor: "#1976D2", color: "#FFFFFF",zIndex:9998 }}>
                <Typography style={{ color: "#FFFFFF",fontWeight:"bold" }} variant="h6">{props.title}</Typography>
            </div>
        </Fragment>
    );
}