import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import mainPageImgNew from "src/img/mainPageImgNew.png";
import mainPageImg from "src/img/mainPageImg.png";
import woongPangImg from "src/img/woongPangImg.png";
import whatshereImg from "src/img/whatshereImg.png";
import graphqlSample from "src/img/graphqlSample.png";
import storybookSample from "src/img/storybook-sample.png";
import dockerSampleImg from "src/img/docker-sample-img.png";
import chartExampleImg from "src/img/chartExampleImg.png";
import swagger from "src/img/swagger.png";
export default function SamplePage() {
  const webItemList = [
    {
      title: "백오피스(샘플)-new",
      description: "업무시스템 예제 페이지",
      img: mainPageImgNew,
      url: "https://sample-backoffice-frontend.vercel.app/login",
    },
    {
      title: "백오피스(샘플)",
      description: "업무시스템 예제 페이지",
      img: mainPageImg,
      url: "http://132.226.169.203:3000",
    },
    {
      title: "쿠팡 파트너스(샘플)",
      description: "쿠팡API사용 하여 받아온 상품 정보 출력",
      img: woongPangImg,
      url: "https://chulwoonglee.github.io/woong-pang",
    },
    {
      title: "스토리북(샘플)",
      description: "스토리북을 이용하여 샘플 컴포넌트 표출",
      img: storybookSample,
      url: process.env.PUBLIC_URL + "/storybook-static/index.html",
    },
    {
      title: "차트페이지(샘플)",
      description: "네이버API를 이용하여 트렌드데이터 서치 및 비교",
      img: chartExampleImg,
      url: "http://132.226.169.203:3044",
    },
  ];

  const appItemList = [
    {
      title: "안드로이드 앱(샘플)",
      description:
        "카카오api를 위하여 내 근처 카테고리 별 ui 렌더링 및 할인정보 표출",
      img: whatshereImg,
      url: "https://play.google.com/store/apps/details?id=com.chulwoong.whatshere",
    },
  ];

  const serverItemList = [
    {
      title: "스웨거(샘플)",
      description: "예제용 스웨거",
      img: swagger,
      url: "http://132.226.169.203:8091/swagger-ui.html",
    },
    {
      title: "graphql(샘플)",
      description:
        "graphql 기반의 API호출 사이트로 따로 토큰 처리 안하고 있어서 자유롭게 이용 가능합니다.",
      img: graphqlSample,
      url: "http://132.226.169.203:4000/graphql",
    },
  ];
  const dbItemList = [];
  const dockerItemList = [
    {
      title: "docker(샘플 없음)",
      description: "oracle-cloud에 docker image 생성",
      img: dockerSampleImg,
      url: null,
    },
  ];
  return (
    <Fragment>
      <div style={{ marginTop: 32 }}>
        <Typography
          style={{ fontWeight: "bold", color: "#ffffff" }}
          variant="h6"
        >
          WEB
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="body1">
          web-was의 레거시한 환경에서 jsp로 웹을 시작하였습니다.
          <br />
          바닐라 js 사용을 좋아하며 2020년부터는 react(nextjs)+typescript 위주로
          사용합니다.
        </Typography>
        <section
          style={{
            marginTop: 12,
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            flexWrap: "wrap",
            gap: 26,
          }}
        >
          {webItemList.map((dataList, index) => (
            <ComponentSampleItem
              img={dataList.img}
              title={dataList.title}
              description={dataList.description}
              url={dataList.url}
              key={index}
            />
          ))}
        </section>
      </div>

      <div style={{ marginTop: 32 }}>
        <Typography
          style={{ fontWeight: "bold", color: "#ffffff" }}
          variant="h6"
        >
          APP
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="body1">
          프리랜서 시절 고객의 요청으로 react-native 이용하여 개발
          진행하였습니다.
          <br />
          보안 이슈로 인하여 스토어에 배포하지 않고 안드로이드 기준
          expo-server를 통하여 app 배포 및 업데이트 관리하였습니다.
        </Typography>
        <section
          style={{
            marginTop: 12,
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            flexWrap: "wrap",
            gap: 26,
          }}
        >
          {appItemList.map((dataList, index) => (
            <ComponentSampleItem
              img={dataList.img}
              title={dataList.title}
              description={dataList.description}
              url={dataList.url}
              key={index}
            />
          ))}
        </section>
      </div>

      <div style={{ marginTop: 32 }}>
        <Typography
          style={{ fontWeight: "bold", color: "#ffffff" }}
          variant="h6"
        >
          SERVER
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="body1">
          레거시한 환경 및 자체 프레임워크를 많이 사용했습니다.
          <br />
          개인소스에 node(graphql)를 주로 이용하지만 상업적인 레벨이
          높지않습니다.
          <br />
          고객 요청으로 결제모듈 또는 인터페이스 모듈 개발에 spring-boot를 주
          이용하였습니다.
          <br />
          2020년도부터는 spring-boot에서 jpa환경으로 작업하였습니다.
        </Typography>
        <section
          style={{
            marginTop: 12,
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            flexWrap: "wrap",
            gap: 26,
          }}
        >
          {serverItemList.map((dataList, index) => (
            <ComponentSampleItem
              img={dataList.img}
              title={dataList.title}
              description={dataList.description}
              url={dataList.url}
              key={index}
            />
          ))}
        </section>
      </div>

      <div style={{ marginTop: 32 }}>
        <Typography
          style={{ fontWeight: "bold", color: "#ffffff" }}
          variant="h6"
        >
          DB
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="body1">
          고객요청의 대부분은 oracle로 수행했으며 가끔 my-sql, ms-sql사용하기도
          하였습니다.
          <br />
          spring-boot의 jpa나 nestjs의 orm 형태의 객체구성 레벨이 높지않으며
          직관적인 query사용을 좋아합니다.
          <br />
          예제페이지를 만들기 애매해서 따로 작성하지 않습니다.
        </Typography>
        <section
          style={{
            marginTop: 12,
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            flexWrap: "wrap",
            gap: 26,
          }}
        >
          {dbItemList.map((dataList, index) => (
            <ComponentSampleItem
              img={dataList.img}
              title={dataList.title}
              description={dataList.description}
              url={dataList.url}
              key={index}
            />
          ))}
        </section>
      </div>

      <div style={{ marginTop: 32 }}>
        <Typography
          style={{ fontWeight: "bold", color: "#ffffff" }}
          variant="h6"
        >
          DOCKER
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="body1">
          build-run을 통한 컨테이너 실행정도의 레벨
        </Typography>
        <section
          style={{
            marginTop: 12,
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            flexWrap: "wrap",
            gap: 26,
          }}
        >
          {dockerItemList.map((dataList, index) => (
            <ComponentSampleItem
              img={dataList.img}
              title={dataList.title}
              description={dataList.description}
              url={dataList.url}
              key={index}
            />
          ))}
        </section>
      </div>
    </Fragment>
  );
}

function ComponentSampleItem(props) {
  const { img, title, description, url } = props;
  const [overStatus, setOverStatus] = useState(false);
  return (
    <div
      style={{
        width: 180,
        height: 240,
        cursor: url ? "pointer" : "",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
      onMouseOver={() => {
        if (url) {
          setOverStatus(true);
        }
      }}
      onMouseOut={() => {
        setOverStatus(false);
      }}
      onClick={() => {
        if (url) {
          window.open(url);
        }
      }}
    >
      <Card
        style={{
          width: overStatus ? "95%" : "100%",
          height: overStatus ? "95%" : "100%",
          opacity: overStatus ? 0.5 : 1,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.4s",
        }}
      >
        <CardMedia
          width="100%"
          style={{ maxHeight: 125 }}
          component="img"
          image={img}
        />
        <div style={{ flexGrow: 1 }} />
        <CardContent>
          <Typography fontWeight="bold" variant="subtitle1">
            {title}
          </Typography>
          <Typography color="#858585" variant="caption">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
