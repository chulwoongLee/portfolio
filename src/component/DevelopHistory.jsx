import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
let settingData = [
  {
    subject: "2023.01~ 재담미디어",
    contents: "전략사업본부-프론트엔드 리더",
    subContents: [
      {
        subTitle: "구독형 웹툰플랫폼 쇼츠",
        list: [
          "전체아키텍처 설계",
          "공통 컴포넌트 설계",
          "전역저장소 구성",
          "API도메인 패턴 구성",
          "내부 node통한 API처리 구성",
        ],
      },
      {
        subTitle: "쇼츠어드민",
        list: [
          "전체아키텍처 설계",
          "공통 컴포넌트 설계",
          "전역저장소 구성",
          "API도메인 패턴 구성",
          "내부 node통한 API처리 구성",
        ],
      },
      {
        subTitle: "웹툰 대학공모전 웹툰런",
        list: ["전체개발"],
      },
    ],
  },
  {
    subject: "2021.11~2022.11 블루앤트",
    contents: "테크랩-올라케어(프론트엔드)",
    subContents: [
      {
        subTitle: "심리상담 프론트 설계 및 개발",
        list: [
          "프로세스 정리 및 설계협업",
          "플러터 앱에 웹뷰 형태로 도메인 제공",
          "app-web간 통신 규약 개발",
          "운영업무 위한 통합 어드민 개발",
        ],
      },
      {
        subTitle: "프론트엔드 표준 설계",
        list: [
          "typescript 적용",
          "TDD 일부 적용(함수 레벨)",
          "storybook 생성하여 각 공통컴포넌트 개발 및 정리",
          "디렉토리 정의",
          "전역저장소 swr로 대체하여 공통 구현 및 폴링 형태의 fetcher 구현",
          "next에 포함 된 node 통하여 api통신(보안 이슈)",
        ],
      },
      {
        subTitle: "올라케어(비대면 진료) 백오피스 고도화",
        list: [
          "아키텍쳐 및 공통 컴포넌트 설계",
          "약국 어드민 사이트(프론트)전체 개발",
          "병원 어드민 사이트(프론트)전체 개발",
        ],
      },
      {
        subTitle: "올라케어 정산사이트 개발",
        list: ["회계처리 위한 사이트 개발"],
      },
      {
        subTitle: "리쿠르트 지원 페이지 개발",
        list: ["업무지원 용 페이지 개발(구인)"],
      },
      {
        subTitle: "이벤트 유입용 랜딩페이지 개발",
        list: ["모듈형 이벤트 페이지 개발"],
      },
    ],
  },
  {
    subject: "2020.04~2021.06 프리랜서",
    contents:
      "예다함상조 통합유지보수(프론트엔드) MOBILE(WEB) 및 TABLET(APP)담당",
    subContents: [
      {
        subTitle: "대외계 업무(cors해결)",
        list: [
          "nice 모듈 및 rest통신으로 본인인증 인터페이스 개발",
          "nice 모듈 및 rest통신으로 결제모듈 인터페이스 개발",
          "kakao 모듈 및 rest통신으로 본인인증 인터페이스 개발",
          "kicc 모듈 및 rest통신으로 결제모듈 인터페이스 개발",
        ],
      },
      {
        subTitle: "모바일 간편가입(MOBILE 용 WEB)",
        list: [
          "https://mobilejoin.yedaham.co.kr/",
          "csr 처리 위하여 cra프로젝트(react)로 개발",
          "보안처리 위하여 난독화 작업",
          "별도 인스턴스 통신 위한 내부 인터페이스 개발",
        ],
      },
      {
        subTitle: "상조시스템(TABLET 용 ANDROID_APP)",
        list: [
          "보안이슈로 store 배포 안하고 별도 서버 이용(expo) 및 인증개발",
          "렌더링 퍼포먼스 해결 위하여 재사용 컴포넌트 작업",
          "장례용품,장례식장 등 출력 및 소개 페이지 작업",
          "상품 upsale,payback 작업 등 산술식 및 화면 표출 개발",
          "고객 서명 및 화면 캡쳐 렌더링 작업",
        ],
      },
    ],
  },
  {
    subject: "2017.08~2020.03 프리랜서",
    contents: "예다함상조 통합유지보수 ERP(BO) 담당(풀스택)",
    subContents: [
      {
        subTitle: "전광판 업무지원",
        list: [
          "react 기반 ui구성 및 기능구현(오토스크롤 및 재사용 가능한 컴포넌트)",
        ],
      },
      {
        subTitle: "물류업무",
        list: [
          "거래처 및 발주,입고 관리 시스템 개발",
          "재고자산 개발 및 관리",
          "상조업무 인터페이스 개발 -> 물품연동 작업",
        ],
      },
      {
        subTitle: "재무업무",
        list: [
          "상조업무 연동하여 매출 시스템 개발 및 관리",
          "전표 발생으로 매입 시스템 개발 및 관리",
          "소득신고용 전문양식 개발",
          "계정 별 권한 연동하여 자동 전표 및 전자서명 개발",
        ],
      },
      {
        subTitle: "인사업무",
        list: [
          "계정 별 연차휴가 등록 및 관리 시스템 개발",
          "캡스데이터 연동하여 근태시스템 개발",
          "직원 별 교육 등록 및 관리 시스템 개발",
          "연말 정산 업무 지원",
        ],
      },
    ],
  },
  {
    subject: "2015.04~2016.10 아림티앤씨(풀스택)",
    contents: "ERP 사업부",
    subContents: [
      {
        subTitle: "물류업무",
        list: [],
      },
      {
        subTitle: "재무업무",
        list: [],
      },
      {
        subTitle: "인사업무",
        list: [],
      },
    ],
  },
  {
    subject: "2013.07~2014.10 세원텔레텍(비개발자)",
    contents: "품질관리팀",
    subContents: [
      {
        subTitle: "제품Q/C",
        list: [],
      },
    ],
  },
];
export default function DevelopHistory() {
  const [pickData, setPIckData] = useState(null);
  return (
    <section>
      <Stepper activeStep={settingData.length} orientation="vertical">
        {settingData.map((dataList, index) => (
          <Step key={index}>
            <StepLabel>
              <Typography
                style={{ fontWeight: "bold", color: "#ffffff" }}
                variant="h6"
              >
                {dataList.subject}
              </Typography>
              <Typography style={{ color: "#ffffff" }}>
                {dataList.contents}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setPIckData(dataList);
                }}
              >
                <Typography>업무내용</Typography>
              </Button>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Dialog style={{ zIndex: 9999 }} maxWidth="lg" open={pickData !== null}>
        {pickData !== null && (
          <div>
            <DialogTitle style={{ display: "flex", gap: 12 }}>
              <div style={{ flexGrow: 1 }}>{pickData.subject}</div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => {
                  setPIckData(null);
                }}
              >
                닫기
              </Button>
            </DialogTitle>
            <TableContainer style={{ maxHeight: 500, minWidth: 320 }}>
              <Table>
                <TableBody>
                  {pickData.subContents.map((dataList, index) => (
                    <TableRow key={index}>
                      <TableCell colSpan={1} style={{ borderBottomWidth: 0 }}>
                        <ul>
                          <Typography
                            variant="h6"
                            style={{ fontWeight: "bold" }}
                          >
                            {dataList.subTitle}
                          </Typography>
                          {dataList.list.map((dataListD, indexD) => (
                            <li key={indexD}>
                              <Typography variant="body1">
                                {dataListD}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Dialog>
    </section>
  );
}
