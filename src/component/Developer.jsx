import React, { Fragment, useEffect, useState } from "react";
import { Card, Typography, Grid } from "@mui/material";
import StickHeader from "./StickHeader";
export default function Developer() {
  return (
    <Fragment>
      <StickHeader title="개발자 스킬" />
      <div
        style={{
          flex: 1,
          backgroundColor:
            "#92A9DE" /*background: "linear-gradient(to right top, #00bed8, #00d4cb, #60e6ae, #acf38b, #f9f871)"*/,
        }}
      >
        {/*
                linear-gradient(to right top, #1976d2, #7894dd, #aeb5e8, #d9d9f3, #ffffff)
            linear-gradient(to right top, #00bed8, #00d4cb, #60e6ae, #acf38b, #f9f871);
                */}

        <br />
        <div style={{ margin: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card style={{ marginBottom: 10 }}>
                <ul>
                  <Typography style={{ fontWeight: "bold" }} variant="h6">
                    WEB
                  </Typography>
                  <li>
                    REACT
                    <ul>
                      <li>nextjs</li>
                    </ul>
                  </li>
                  <li>JAVASCRIPT</li>
                  <li>JSP</li>
                </ul>
              </Card>
              <Card style={{ marginBottom: 10 }}>
                <ul>
                  <Typography style={{ fontWeight: "bold" }} variant="h6">
                    DB
                  </Typography>
                  <li>ORACLE</li>
                </ul>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card style={{ marginBottom: 10 }}>
                <ul>
                  <Typography style={{ fontWeight: "bold" }} variant="h6">
                    APP
                  </Typography>
                  <li>
                    REACT-NATIVE(EXPO)
                    <ul>
                      <li>noti-push</li>
                      <li>google-map</li>
                    </ul>
                  </li>
                </ul>
              </Card>
              <Card style={{ marginBottom: 10 }}>
                <ul>
                  <Typography style={{ fontWeight: "bold" }} variant="h6">
                    SERVER
                  </Typography>
                  <li>NODE.JS</li>
                  <li>SPRING-BOOT</li>
                  <li>GRAPHQL</li>
                </ul>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}
