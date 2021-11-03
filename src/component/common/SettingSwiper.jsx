import React, { Fragment, useState, useEffect, useRef } from "react";
import { Typography, Button, Tabs, Tab } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
export default function SettingSwiper(props) {
    const [pickTab, setPickTab] = useState(0);
    const swiperRef = useRef(null);
    return (
        <Fragment>
            <br />
            <Typography style={{ fontWeight: "bold" }} variant="h6">{props.settingData.title}</Typography>

            <Tabs value={pickTab} onChange={(e, v) => { setPickTab(v); swiperRef.current.swiper.slideTo(v); }} >
                {props.settingData.list.map((dataList, index) => (
                    <Tab label={dataList.subTitle} style={{ flex: 1 }} key={index} />
                ))}
            </Tabs>
            <br />
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                pagination={true}
                onSlideChange={(e) => { setPickTab(e.activeIndex); }}
            >
                {props.settingData.list.map((dataList, index) => (
                    <SwiperSlide style={{ textAlign: "center" }} key={index}>
                        <img width="100%" src={dataList.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {props.settingData.url !== null &&
                <Button variant="contained" onClick={() => { window.open(props.settingData.url); }}><Typography style={{ fontWeight: "bold" }} variant="h6">예제페이지</Typography></Button>
            }
        </Fragment >
    );
}