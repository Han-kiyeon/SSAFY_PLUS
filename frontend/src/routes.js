// 가져올 아이콘 모양들
import Home from "@material-ui/icons/Home";
import Assignment from "@material-ui/icons/Assignment";
import Description from "@material-ui/icons/Description";

// 레이아웃에 입힐 뷰들
import Main from "views/Main/Main.js";
import Portfolio from "views/Portfolio/Portfolio.js";
import QnA from "views/QnA/QnA.js"

const dashboardRoutes = [
  {
    path: "/main",
    name: "Main",
    icon: Home,
    component: Main,
    layout: "/plus"
  }, {
    path: "/portfolio",
    name: "Portfolio",
    icon: Assignment,
    component: Portfolio,
    layout: "/plus"
  }, {
    path: "/qna",
    name: "QnA",
    icon: Description,
    component: QnA,
    layout: "/plus"
  },
];

export default dashboardRoutes;
