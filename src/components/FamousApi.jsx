import React from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";

import "../css/FamousApi.scss";

const FamousApi = () => {
  return (
    <Card height="397px">
      <CardTitle>오늘의 명언</CardTitle>
      <CardBody>
        34. 매일 당신을 두렵게 만드는 일을 하나씩 하라. – 미상
      </CardBody>
    </Card>
  );
};

export default FamousApi;
