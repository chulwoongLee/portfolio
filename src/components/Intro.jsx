import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
export default function Intro() {
  const [pageStatus, setPageStatus] = useState(false);
  useEffect(() => {
    setPageStatus(true);
  }, []);
  return (
    <article
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div>
        <Typography color="#ffffff" variant="h6">
          안녕하세요 개발자 이철웅 입니다.
          <br /> 현재 프론트엔드 직무로 일하고 있습니다.
        </Typography>
        <Typography color="#ffffff" variant="h6"></Typography>
        <br />
        <Typography
          style={{
            opacity: pageStatus ? 1 : 0,
            transition: "all 4.4s",
          }}
          color="#ffffff"
          variant="body1"
        >
          인트로 페이지는 내용이 없습니다.
          <br />
          다른 탭을 눌러주세요
        </Typography>
      </div>
    </article>
  );
}
