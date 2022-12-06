import React, { Fragment } from "react";
import { Button, Typography } from "@mui/material";
import DevelopHistory from "./DevelopHistory";

import { SwrPage } from "src/swr/SwrPage";
import SamplePage from "./SamplePage";
import Intro from "./Intro";
export default function Main() {
  return (
    <Fragment>
      <ComponentTitle />
      <ComponentBody />
      <ComponentFooter />
    </Fragment>
  );
}

function ComponentTitle() {
  const { setSwrPageValue } = SwrPage();
  const menuList = [
    { title: "개발경력", page: "developHistory" },
    { title: "샘플페이지", page: "samplePage" },
    { title: "샘플프로젝트", page: "sampleProject" },
  ];
  return (
    <section
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Button
        onClick={() => {
          setSwrPageValue("");
        }}
      >
        <Typography
          style={{ fontWeight: "bold", color: "#ffffff" }}
          variant="h5"
        >
          이철웅s
        </Typography>
      </Button>
      <div style={{ flexGrow: 1 }} />
      <div>
        {menuList.map((dataList, index) => (
          <SubComponentMenuItem
            title={dataList.title}
            page={dataList.page}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
function SubComponentMenuItem(props) {
  const { title, page } = props;
  const { swrPageValue, setSwrPageValue } = SwrPage();
  return (
    <Button
      onClick={() => {
        if (page === "sampleProject") {
          alert("준비중 입니다.");
        } else {
          setSwrPageValue(page);
        }
      }}
    >
      <Typography
        style={{
          color: "#ffffff",
          fontWeight: swrPageValue === page ? "bold" : 400,
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}

function ComponentBody() {
  const { swrPageValue } = SwrPage();

  return (
    <section
      style={{ flex: 1, width: "100%", height: "100%", overflowY: "auto" }}
    >
      {swrPageValue === "" && <Intro />}
      {swrPageValue === "developHistory" && <DevelopHistory />}
      {swrPageValue === "samplePage" && <SamplePage />}
      {swrPageValue === "sampleProject" && <Intro />}
    </section>
  );
}

function ComponentFooter() {
  return (
    <Typography
      variant="body1"
      color="textSecondary"
      align="center"
      style={{ fontWeight: "bold", color: "#ffffff" }}
    >
      이철웅 ytooktoo2@nate.com
    </Typography>
  );
}
