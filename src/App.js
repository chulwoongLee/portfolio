import Main from "./component/Main";
import { Snackbar, Typography } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";
function App() {
  const [finishPage, setFinishPage] = useState(true);
  return (
    <div className="App">
      <Main />
      <Snackbar
        open={finishPage}
        autoHideDuration={5000}
        onClose={() => {
          console.log("종료");
          setFinishPage(false);
        }}
      >
        <div
          style={{
            backgroundColor: "#EDF7ED",
            display: "flex",
            width: "100%",
          }}
        >
          <CheckCircleOutline
            style={{ color: "#80C683", fontWeight: "bold" }}
            fontSize="large"
          />
          <Typography
            style={{
              color: "#1E595F",
              fontWeight: "bold",
              alignSelf: "center",
            }}
            variant="body1"
          >
            oracle-cloud 이슈로 몇몇 예제페이지 안됩니다.
          </Typography>
        </div>
      </Snackbar>
    </div>
  );
}

export default App;
