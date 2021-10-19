import React, { Fragment, useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import StickHeader from "./StickHeader";
export default function Developer() {
    return (
        <Fragment>
            <StickHeader title="개발자 스킬"/>
            <div style={{ backgroundColor: "#DDDDDD", height: 650 }}>
                <br/>
                <div style={{ margin: 10 }}>
                    <Card style={{ height: 600}}>
                        <ul>
                            <Typography style={{ fontWeight: "bold" }} variant="h6">WEB</Typography>
                            <li>REACT
                                <ul>
                                    <li>렌더링 퍼포먼스</li>
                                    <li>rest-api-렌더링</li>
                                </ul>
                            </li>
                            <li>JAVASCRIPT</li>
                            <ul>
                                <li>ES6문법 사용</li>
                                <li>Redux</li>
                                <li>Redux-saga</li>
                            </ul>
                            <li>JSP</li>
                        </ul>
                        <ul><Typography style={{ fontWeight: "bold" }} variant="h6">APP</Typography>
                            <li>REACT-NATIVE(EXPO)
                                <ul>
                                    <li>noti-push</li>
                                    <li>google-map</li>
                                </ul>
                            </li>
                        </ul>
                        <ul><Typography style={{ fontWeight: "bold" }} variant="h6">SERVER</Typography>
                            <li>NODE.JS</li>
                            <li>SPRING-BOOT</li>
                            <li>GRAPHQL</li>
                        </ul>
                        <ul><Typography style={{ fontWeight: "bold" }} variant="h6">DB</Typography>
                            <li>ORACLE</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </Fragment>
    );
}