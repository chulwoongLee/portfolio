import React, { Fragment, useEffect, useState } from "react";
import { Grid, Card, CardHeader, Avatar, CardContent, Typography } from "@mui/material";
export default function Developer() {
    const [pageStart, setPageStart] = useState(false);

    useEffect(() => {
        setPageStart(true);
    }, []);
    return (
        <Fragment>
            <div style={{ backgroundColor: "#DDDDDD", height: 650 }}>
                <div style={{ margin: 10 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={5}>
                            <Card style={{ height: 600 }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Avatar sx={{ width: 100, height: 100 }} />
                                </div>
                                <CardContent>
                                <Typography style={{ fontWeight: "bold" }} variant="h6">풀스택 개발자</Typography>
                                    <ul>
                                        <li>React 및 React-native관련 선호 합니다.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={7}>
                            <Card style={{ height: 600 }}>
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
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fragment>
    );
}