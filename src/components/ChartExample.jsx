import React, { Fragment, useEffect, useState } from "react";
import bb, { line } from "billboard.js";
import "billboard.js/dist/billboard.css";
import { Card, Typography, TextField, Button } from "@mui/material";

export default function ChartExample() {
  const [fromDate, setFromDate] = useState("2021-10-15");
  const [toDate, setToDate] = useState("2021-10-18");
  useEffect(() => {
    bb.generate({
      bindto: "#chart",
      data: {
        // for ESM import usage, import 'line' module and execute it as
        // type: line(),
        type: line(),
        columns: [
          ["2021-10-15", 140, 200, 83, 65],
          ["2021-10-16", 55, 150, 45, 15],
          ["2021-10-17", 30, 123, 123, 64],
          ["2021-10-18", 74, 44, 167, 2],
        ],
      },
      zoom: {
        // for ESM import usage, import 'zoom' module and execute it as
        // enabled: zoom()
        enabled: true,
      },
    });
  }, []);
  return (
    <Fragment>
      <div style={{ margin: 10 }}>
        <Card style={{}}>
          <div style={{ display: "flex" }}>
            <TextField
              disabled
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value);
              }}
              type="date"
            ></TextField>
            <div style={{ flexGrow: 1, alignSelf: "center" }}>
              <Typography align="center" variant="h6">
                ~
              </Typography>
            </div>
            <TextField
              disabled
              value={toDate}
              onChange={(e) => {
                setToDate(e.target.value);
              }}
              type="date"
            ></TextField>
            <Button variant="contained">
              <Typography variant="body1">검색</Typography>
            </Button>
          </div>
          <div id="chart"></div>
        </Card>
      </div>
    </Fragment>
  );
}
