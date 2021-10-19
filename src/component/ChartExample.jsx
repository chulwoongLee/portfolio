import React, { Fragment, useEffect } from "react";
import bb, { line } from "billboard.js"
import "billboard.js/dist/billboard.css";
import { Card, Typography } from "@mui/material";


export default function ChartExample() {
    useEffect(() => {
        var chart = bb.generate({
            bindto: "#chart",
            data: {
                // for ESM import usage, import 'line' module and execute it as
                // type: line(),
                type: line(),
                columns: [
                    ["data1", 30, 200, 100, 400, 150, 250],
                    ["data2", 40, 250, 100, 0,250,150]
                ]
            },
            zoom: {
                // for ESM import usage, import 'zoom' module and execute it as
                // enabled: zoom()
                enabled: true
            }
        });
        //chart.load();
    }, []);
    return (
        <Fragment>
            <div style={{ margin: 10 }}>
                <Card style={{  }}>
                    <div id="chart"></div>
                </Card>
            </div>
        </Fragment>
    );
}