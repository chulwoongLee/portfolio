import React, { Fragment } from "react";
import { Container, Typography } from "@mui/material";
import Developer from "./Developer";
import DevelopHistory from "./DevelopHistory";
import PortFolio from "./PortFolio";
import StickHeader from "./StickHeader";
import { useState } from "react";
import { useEffect } from "react";
export default function Main() {
  const [windowMode, setWindoeMode] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 980) {
      setWindoeMode(true);
    }
  }, []);
  return (
    <Fragment>
      <Developer />
      <DevelopHistory />
      <PortFolio />
      {windowMode && (
        <section
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ width: 768 }}>
            <StickHeader title="스토리북" />
          </div>
          <embed
            style={{ width: 768, height: 1000 }}
            src={process.env.PUBLIC_URL + "/storybook-static/index.html"}
          />
        </section>
      )}
      <footer
        style={{
          bottom: 0,
          position: "sticky",
          backgroundColor: "#DDDDDD",
          zIndex: 9998,
        }}
      >
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          style={{ fontWeight: "bold" }}
        >
          Copyright © 이철웅 ytooktoo2@nate.com
        </Typography>
      </footer>
    </Fragment>
  );
}
