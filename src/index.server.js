import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";

// express 선언
const app = express();

// 서버 사이드 렌더링 처리를 위한 핸들러 함수
const serverRender = (req, res, next) => {
  // 이 함수는 HTTP 404가 발생하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 처리해줌

  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // 랜더링 처리 후 클라에게 결과를 리턴
  const root = ReactDOMServer.renderToString(jsx);
  res.send(root);
};

const serve = express.static(path.resolve("./build"), {
  index: false, // root 경로에서 index.html을 보여주지 않도록 설정
});

// serve는 serverRender 전에 선언해야 함.
app.use(serve);
app.use(serverRender);

// 5000포트로 서버 가동
app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
