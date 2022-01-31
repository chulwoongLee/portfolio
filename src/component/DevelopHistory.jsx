import React, { Fragment, useState } from "react";
import { Stepper, Step, StepLabel, Typography, Card, Button, Dialog, DialogTitle, DialogContent, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, } from "@mui/material";
import StickHeader from "./StickHeader";
let settingData = [
    {
        "subject": "2021.11~현재 블루앤트", "contents": "테크랩-올라케어 프론트엔드 담당자",
        "subContents": [
            {
                "subTitle": "이벤트 유입용 랜딩페이지 개발", "list": [
                    "공통 디자인 개발로 모듈형 이벤트 페이지 개발",
                    "매월 정기 이벤트 개발 진행"
                ]
            },
            {
                "subTitle": "올라케어 백오피스 리뉴얼", "list": [
                    "병원,약국,운영 각 페이지 공통,컴포넌트 개발",
                ]
            },
        ]
    },
    {
        "subject": "2020.04~2021.06 프리랜서", "contents": "예다함상조 통합유지보수 MOBILE(WEB) 및 TABLET(APP)담당",
        "subContents": [
            {
                "subTitle": "대외계 업무(cors해결)", "list": [
                    "nice 모듈 및 rest통신으로 본인인증 인터페이스 개발",
                    "nice 모듈 및 rest통신으로 결제모듈 인터페이스 개발",
                    "kakao 모듈 및 rest통신으로 본인인증 인터페이스 개발",
                    "kicc 모듈 및 rest통신으로 결제모듈 인터페이스 개발",
                ]
            },
            {
                "subTitle": "모바일 간편가입(MOBILE 용 WEB)", "list": [
                    "https://mobilejoin.yedaham.co.kr/",
                    "csr 처리 위하여 cra프로젝트(react)로 개발",
                    "보안처리 위하여 난독화 작업",
                    "별도 인스턴스 통신 위한 내부 인터페이스 개발"
                ]
            },
            {
                "subTitle": "상조시스템(TABLET 용 ANDROID_APP)", "list": [
                    "보안이슈로 store 배포 안하고 별도 서버 이용(expo) 및 인증개발",
                    "렌더링 퍼포먼스 해결 위하여 재사용 컴포넌트 작업",
                    "장례용품,장례식장 등 출력 및 소개 페이지 작업",
                    "상품 upsale,payback 작업 등 산술식 및 화면 표출 개발",
                    "고객 서명 및 화면 캡쳐 렌더링 작업"
                ]
            },
        ]
    },
    {
        "subject": "2017.08~2020.03 프리랜서", "contents": "예다함상조 통합유지보수 ERP(BO) 담당",
        "subContents": [
            {
                "subTitle": "전광판 업무지원", "list": [
                    "react 기반 ui구성 및 기능구현(오토스크롤 및 재사용 가능한 컴포넌트)",
                ]
            },
            {
                "subTitle": "물류업무", "list": [
                    "거래처 및 발주,입고 관리 시스템 개발",
                    "재고자산 개발 및 관리",
                    "상조업무 인터페이스 개발 -> 물품연동 작업"
                ]
            },
            {
                "subTitle": "재무업무", "list": [
                    "상조업무 연동하여 매출 시스템 개발 및 관리",
                    "전표 발생으로 매입 시스템 개발 및 관리",
                    "소득신고용 전문양식 개발",
                    "계정 별 권한 연동하여 자동 전표 및 전자서명 개발"
                ]
            },
            {
                "subTitle": "인사업무", "list": [
                    "계정 별 연차휴가 등록 및 관리 시스템 개발",
                    "캡스데이터 연동하여 근태시스템 개발",
                    "직원 별 교육 등록 및 관리 시스템 개발",
                    "연말 정산 업무 지원"
                ]
            },
        ]
    },
    {
        "subject": "2015.04~2016.10 아림티앤씨", "contents": "ERP 사업부",
        "subContents": [
            {
                "subTitle": "물류업무", "list": []
            },
            {
                "subTitle": "재무업무", "list": []
            },
            {
                "subTitle": "인사업무", "list": []
            },
        ]
    }
]
export default function DevelopHistory() {
    const [pickData, setPIckData] = useState(null);
    return (
        <Fragment>
            <StickHeader title="개발경력" />
            <div style={{ backgroundColor: "#E3F0FF" }}>
                <br />
                <div style={{ margin: 10 }}>
                    <Card>
                        <Stepper activeStep={settingData.length} orientation="vertical">
                            {settingData.map((dataList, index) => (
                                <Step key={index}>
                                    <StepLabel>
                                        <Typography style={{ fontWeight: "bold" }} variant="h6">{dataList.subject}</Typography>
                                        <Typography>{dataList.contents}</Typography>
                                        <Button variant="contained" color="primary" onClick={() => { setPIckData(dataList) }}><Typography>주요성과</Typography></Button>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Card>
                </div>
                <br />
            </div>
            <Dialog
                style={{ zIndex: 9999 }}
                maxWidth="lg"
                open={pickData !== null}>
                {pickData !== null &&
                    <div>
                        <DialogTitle style={{ display: "flex" }}><div style={{ flexGrow: 1 }}>{pickData.subject}</div><Button variant="contained" color="secondary" onClick={() => { setPIckData(null); }}>닫기</Button></DialogTitle>
                        <TableContainer style={{ maxHeight: 500 }}>
                            <Table>
                                <TableBody>
                                    {pickData.subContents.map((dataList, index) => (
                                        <TableRow key={index}>
                                            <TableCell colSpan={1} style={{ borderBottomWidth: 0 }}>
                                                <ul>
                                                    <Typography variant="h6" style={{ fontWeight: "bold" }}>{dataList.subTitle}</Typography>
                                                    {dataList.list.map((dataListD, indexD) => (
                                                        <li key={indexD}><Typography variant="body1">{dataListD}</Typography></li>
                                                    ))}
                                                </ul>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                }
            </Dialog>
        </Fragment>
    );
}