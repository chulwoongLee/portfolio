import React, { Fragment } from "react";
import { Typography, Button, Card } from "@mui/material";
import mainPageImg from "src/img/mainPageImg.png";
import codeExampleImg from "src/img/codeExampleImg.png";
import statementExampleImg from "src/img/statementExampleImg.png";
import notiPushImg from "src/img/notiPushImg.png";
import woongPangImg from "src/img/woongPangImg.png";
import whatshereImg from "src/img/whatshereImg.png";
import connectSlack from "src/img/connectSlack.png";
import StickHeader from "./StickHeader";
import CountryMap from "./CountryMap";
import ChartExample from "./ChartExample";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);
let settingData = [
    {
        "title": "업무시스템",
        "url": "http://140.238.29.13:3000",
        "list": [
            { "subTitle": "대시보드", "img": mainPageImg },
            { "subTitle": "코드값의 이해와 사용예제", "img": codeExampleImg },
            { "subTitle": "요구사항 기반으로 개발진행", "img": statementExampleImg },
        ]
    },
    {
        "title": "앱개발",
        "url": "https://play.google.com/store/apps/details?id=com.chulwoong.whatshere",
        "list": [
            { "subTitle": "google-map 렌더링", "img": whatshereImg },
            { "subTitle": "FCM-EXPO push알림", "img": notiPushImg }
        ]
    },
    {
        "title": "API연동 및 cors 처리",
        "url": "https://chulwoonglee.github.io/woong-pang",
        "list": [
            { "subTitle": "타사 API연동으로 물품 판매 ", "img": woongPangImg }
        ]
    },
]
export default function PortFolio() {
    return (
        <Fragment>
            <StickHeader title="개발샘플" />
            <div style={{ backgroundColor: "#92A9DE" }}>
                <div style={{ margin: 10 }}>
                    <br />
                    <br />
                    {settingData.map((dataList, index) => (
                        <Card style={{ marginBottom: 10 }} key={index}>
                            <Typography style={{ fontWeight: "bold" }} variant="h6">{dataList.title}</Typography>
                            <br />
                            <Swiper
                                slidesPerView={1}
                                pagination={true}
                            >
                                {dataList.list.map((dataListD, indexD) => (
                                    <SwiperSlide style={{ textAlign: "center" }} key={indexD}>
                                        <Typography style={{ fontWeight: "bold" }} variant="body1">{dataListD.subTitle}</Typography>
                                        <img width="100%" src={dataListD.img} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {dataList.url !== null &&
                                <Button variant="contained" onClick={() => { window.open(dataList.url); }}><Typography style={{ fontWeight: "bold" }} variant="h6">예제페이지</Typography></Button>
                            }
                        </Card>
                    ))}



                    <Card style={{ marginBottom: 10 }}>
                        <Typography style={{ fontWeight: "bold" }} variant="h6">기타</Typography>
                        <br />
                        <Swiper
                            slidesPerView={1}
                            pagination={true}
                        >
                            <SwiperSlide style={{ textAlign: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="body1">svg를 이용한 지도(이벤트)표현</Typography>
                                <CountryMap />
                            </SwiperSlide>
                            <SwiperSlide style={{ textAlign: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="body1">오픈소스를 이용한 차트 활용</Typography>
                                <ChartExample />
                            </SwiperSlide>
                            <SwiperSlide style={{ textAlign: "center" }}>
                                <Typography style={{ fontWeight: "bold" }} variant="body1">slack-hook연동하여 업무 담당자에게 메시지 전달</Typography>
                                <img width="100%" src={connectSlack} />
                            </SwiperSlide>
                        </Swiper>
                    </Card>
                </div>
            </div>
        </Fragment>
    );
}