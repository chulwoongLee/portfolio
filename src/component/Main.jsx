import React, { Fragment,useEffect } from "react";
import { Container } from "@mui/material";
import Developer from "./Developer";
import DevelopStyle from "./DevelopStyle";
import PortFolio from "./PortFolio";
export default function Main() {
    useEffect(()=>{
        
    },[]);
    return (
        <Fragment>
            <Container maxWidth="sm">
                <Developer />
                <DevelopStyle/>
                <PortFolio/>
            </Container>
        </Fragment>
    );
}