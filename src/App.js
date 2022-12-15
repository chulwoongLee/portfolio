import Main from "./component/Main";
import "./App.css";
import { SwrPage } from "./swr/SwrPage";
import { useEffect, useState } from "react";
import { Modal, Typography, Button } from "@mui/material";
function App() {
  const { swrPageValue } = SwrPage();
  const [settingDeg, setSettingDeg] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  useEffect(() => {
    window.alert = (a) => {
      setAlertMessage(a);
    };
    document.body.style.overscrollBehaviorY = "none";
  }, []);
  useEffect(() => {
    let pickDeg = "#000000";
    if (swrPageValue === "") {
      pickDeg = "#000000";
    } else if (swrPageValue === "developHistory") {
      pickDeg = "#28161C";
    } else if (swrPageValue === "samplePage") {
      pickDeg = "#170000";
    } else if (swrPageValue === "portfolie-asis") {
      //pickDeg = "#3A2F0B";
      pickDeg = "#92A9DE";
    }
    setSettingDeg(pickDeg);
  }, [swrPageValue]);
  return (
    <article
      style={{
        alignItems: "flex-start",
        justifyContent: "center",
        display: "flex",
        height: "100vh",
        backgroundColor: settingDeg,
        //background: `linear-gradient(${settingDeg}deg, rgba(32,29,38,1) 0%, rgba(87,57,78,1) 100%)`,
        transition: "all 0.4s",
      }}
    >
      <div
        style={{
          padding: "0px 12px",
          maxWidth: 1280,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ height: 12 }} />
        <Main />
        <div style={{ height: 24 }} />
      </div>
      <Modal open={alertMessage.length > 0}>
        <div
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: 24,
              borderRadius: 24,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {" "}
              {alertMessage}
            </Typography>
            <Button
              style={{ marginTop: 12 }}
              variant="contained"
              fullWidth
              onClick={() => {
                setAlertMessage("");
              }}
            >
              <Typography>확인</Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </article>
  );
}

export default App;
