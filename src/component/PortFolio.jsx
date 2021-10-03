import React, { Fragment } from "react";
import { Typography,Button } from "@mui/material";
import mainPageImg from "src/img/mainPageImg.png";
import codeExampleImg from "src/img/codeExampleImg.png";
import statementExampleImg from "src/img/statementExampleImg.png";
export default function PortFolio() {
    return (
        <Fragment>
            <div style={{ backgroundColor: "#DDDDDD" }}>
                <div style={{ margin: 10 }}>
                    <Button variant="contained" onClick={()=>{window.open("http://140.238.29.13:3000/");}}><Typography style={{ fontWeight: "bold" }} variant="h6">예제페이지</Typography></Button>
                    <br/>
                    <br/>
                    <br/>
                    <Typography style={{ fontWeight: "bold" }} variant="h6">대시보드의 이해</Typography>
                    <img width="100%" src={mainPageImg} />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">코드값의 이해와 사용예제</Typography>
                    <img width="100%" src={codeExampleImg} />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">요구사항 기반으로 개발진행</Typography>
                    <img width="100%" src={statementExampleImg} />
                </div>
            </div>
        </Fragment>
    );
}