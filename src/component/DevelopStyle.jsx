import React, { Fragment } from "react";
import { Stepper, Step, StepLabel, Typography, Card } from "@mui/material";
import StickHeader from "./StickHeader";
export default function DevelopStyle() {
    return (
        <Fragment>
            <StickHeader title="개발진행" />
            <div style={{ backgroundColor: "#E3F0FF", height: 550 }}>
                <br />
                <div style={{ margin: 10 }}>
                    <Card style={{ height: 500 }}>
                        <Stepper activeStep={5} orientation="vertical">
                            <Step>
                                <StepLabel>
                                    <Typography style={{ fontWeight: "bold" }} variant="h6">업무 분석</Typography>
                                    <Typography>요구사항 분석 및 검토하여 컨설팅 또는 개발 진행</Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography style={{ fontWeight: "bold" }} variant="h6">스키마 설계</Typography>
                                    <Typography>신규개발 기준으로 기존 데이터 마이그레이션 또는 스키마 설계</Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography style={{ fontWeight: "bold" }} variant="h6">ui,ux설계</Typography>
                                    <Typography>페이지 제작하여 현업 검토</Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography style={{ fontWeight: "bold" }} variant="h6">로직설계</Typography>
                                    <Typography>요구사항 정의에 맞춰 로직 설계 및 현업 검토</Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography style={{ fontWeight: "bold" }} variant="h6">개발 완료 및 개선</Typography>
                                    <Typography>개발 완료 후 단위 기간 마다 통계 데이터 기반으로 리팩토링 및 추가 기능 구현</Typography>
                                </StepLabel>
                            </Step>
                        </Stepper>
                    </Card>
                </div>
            </div>
        </Fragment>
    );
}