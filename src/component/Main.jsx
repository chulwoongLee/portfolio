import React, { Fragment, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Developer from "./Developer";
import DevelopHistory from "./DevelopHistory";
import DevelopStyle from "./DevelopStyle";
import PortFolio from "./PortFolio";
export default function Main() {
    useEffect(() => {

    }, []);
    return (
        <Fragment>
            <Container maxWidth="sm">
                <Developer />
                <DevelopHistory/>
                {/*<DevelopStyle /> */}
                <PortFolio />
                <footer style={{ bottom: 0, position: "sticky", backgroundColor: "#DDDDDD",zIndex:9998 }}>
                    <Typography variant="body1" color="textSecondary" align="center" style={{ fontWeight: "bold" }}>Copyright © 이철웅 ytooktoo2@nate.com</Typography>
                </footer>
            </Container>
        </Fragment>
    );
}