import React, { useState, useRef } from "react";
import { Typography, Card, Tabs, Tab } from "@mui/material";
import StickHeader from "./StickHeader";
import CountryMap from "./CountryMap";

import SettingSwiper from "./common/SettingSwiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination]);
let settingData = [
  {
    title: "업무시스템",
    url: "http://132.226.169.203:3000",
    list: [
      { subTitle: "대시보드", img: "/img/mainPageImg.png" },
      { subTitle: "코드값의 이해와 사용예제", img: "/img/codeExampleImg.png" },
      {
        subTitle: "요구사항 기반으로 개발진행",
        img: "/img/statementExampleImg.png",
      },
    ],
  },
  {
    title: "앱개발",
    url: "https://play.google.com/store/apps/details?id=com.chulwoong.whatshere",
    list: [
      { subTitle: "google-map 렌더링", img: "/img/whatshereImg.png" },
      { subTitle: "FCM-EXPO push알림", img: "/img/notiPushImg.png" },
    ],
  },
  {
    title: "API연동 및 cors 처리",
    url: "https://chulwoonglee.github.io/woong-pang",
    list: [
      { subTitle: "타사 API연동으로 물품 판매 ", img: "/img/woongPangImg.png" },
    ],
  },
];
export default function PortFolio() {
  const swiperRef = useRef(null);
  const [pickTab, setPickTab] = useState(0);
  return (
    <section>
      <StickHeader title="개발샘플" />
      <div style={{ backgroundColor: "#92A9DE" }}>
        <div style={{ margin: 10 }}>
          <br />
          <br />
          {settingData.map((dataList, index) => (
            <Card style={{ marginBottom: 10 }} key={index}>
              <SettingSwiper settingData={dataList} />
            </Card>
          ))}

          <Card style={{ marginBottom: 10 }}>
            <br />
            <Typography style={{ fontWeight: "bold" }} variant="h6">
              기타
            </Typography>
            <Tabs
              value={pickTab}
              onChange={(e, v) => {
                setPickTab(v);
                swiperRef.current.swiper.slideTo(v);
              }}
            >
              <Tab label="svg를 이용한 지도(이벤트)표현" style={{ flex: 1 }} />
              <Tab
                label="트렌드 데이터를 이용한 차트 표현"
                style={{ flex: 1 }}
              />
              <Tab
                label="slack-hook연동하여 업무 담당자에게 메시지 전달"
                style={{ flex: 1 }}
              />
            </Tabs>
            <br />
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              pagination={true}
              onSlideChange={(e) => {
                setPickTab(e.activeIndex);
              }}
            >
              <SwiperSlide style={{ textAlign: "center" }}>
                <CountryMap />
              </SwiperSlide>
              <SwiperSlide style={{ textAlign: "center" }}>
                <img width="100%" src="/img/chartExampleImg.png" />
              </SwiperSlide>
              <SwiperSlide style={{ textAlign: "center" }}>
                <img width="100%" src="/img/connectSlack.png" />
              </SwiperSlide>
            </Swiper>
          </Card>
        </div>
      </div>
    </section>
  );
}
