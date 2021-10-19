import React, { Fragment } from "react";
import { Typography, Button } from "@mui/material";
import mainPageImg from "src/img/mainPageImg.png";
import codeExampleImg from "src/img/codeExampleImg.png";
import statementExampleImg from "src/img/statementExampleImg.png";
import notiPushImg from "src/img/notiPushImg.png";
import woongPangImg from "src/img/woongPangImg.png";
import whatshereImg from "src/img/whatshereImg.png";
import StickHeader from "./StickHeader";
import CountryMap from "./CountryMap";
import ChartExample from "./ChartExample";
export default function PortFolio() {
    return (
        <Fragment>
            <StickHeader title="예제" />
            <div style={{ backgroundColor: "#DDDDDD" }}>
                <div style={{ margin: 10 }}>
                    <br />
                    <br />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">업무시스템</Typography>
                    <br />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">대시보드</Typography>
                    <img width="100%" src={mainPageImg} />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">코드값의 이해와 사용예제</Typography>
                    <img width="100%" src={codeExampleImg} />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">요구사항 기반으로 개발진행</Typography>
                    <img width="100%" src={statementExampleImg} />
                    <Button variant="contained" onClick={() => { window.open("http://140.238.29.13:3000"); }}><Typography style={{ fontWeight: "bold" }} variant="h6">예제페이지</Typography></Button>
                    <br />
                    <br />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">FCM-EXPO연동을 통한 push 알림</Typography>
                    <img width="100%" src={notiPushImg} />
                    <br />
                    <br />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">타사 API연동하여 화면 출력</Typography>
                    <img width="100%" src={woongPangImg} />
                    <Button variant="contained" onClick={() => { window.open("https://chulwoonglee.github.io/woong-pang"); }}><Typography style={{ fontWeight: "bold" }} variant="h6">예제페이지</Typography></Button>
                    <br />
                    <br />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">google-map사용하여 앱 개발</Typography>
                    <img width="100%" src={whatshereImg} />
                    <Button variant="contained" onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.chulwoong.whatshere"); }}><Typography style={{ fontWeight: "bold" }} variant="h6">예제페이지</Typography></Button>
                    <br />
                    <br />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">svg를 이용한 지도(이벤트)표현</Typography>
                    <CountryMap />
                    <br />
                    <br />
                    <Typography style={{ fontWeight: "bold" }} variant="h6">오픈소스를 이용한 차트 활용</Typography>
                    <ChartExample />
                    <br />
                </div>
            </div>
        </Fragment>
    );
}