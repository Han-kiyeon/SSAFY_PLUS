// 가져올 아이콘 모양들
import Home from "@material-ui/icons/Home";
import Assignment from "@material-ui/icons/Assignment";
import Description from "@material-ui/icons/Description";
import PermIdentity from "@material-ui/icons/PermIdentity";
import BurstModeIcon from "@material-ui/icons/BurstMode";

// 레이아웃에 입힐 뷰들
import Main from "views/Main/Main.js";
import Portfolio from "views/Portfolio/firstPage";
import Portfolio2 from "views/Portfolio/secondPage";
import Portfolio3 from "views/Portfolio/thirdPage";
import PortfolioResult from "views/Portfolio/resultPage";
import Episode from "views/Episode";
import BoardMain from "views/Board/BoardMain.js";
import PostList from "views/Board/PostList.js";
import SignIn from "views/Auth/SignIn";
import SignUp from "views/Auth/SignUp";

const dashboardRoutes = [
  {
    id: 1,
    path: "/main",
    name: "Main",
    icon: Home,
    component: Main,
    layout: "/plus",
  },
  {
    id: 3,
    path: "/board",
    name: "게시판",
    icon: Description,
    component: BoardMain,
    layout: "/plus",
  },
  {
    path: "/postList",
    name: "게시글 목록",
    icon: Description,
    component: PostList,
    layout: "/plus",
  },
  {
    id: 2,
    path: "/portfolio",
    name: "Portfolio",
    icon: Assignment,
    component: Portfolio,
    layout: "/plus",
  },
  {
    path: "/2/portfolio",
    name: "Portfolio",
    component: Portfolio2,
    layout: "/plus",
  },
  {
    path: "/3/portfolio",
    name: "Portfolio",
    component: Portfolio3,
    layout: "/plus",
  },
  {
    path: "/result/portfolio",
    name: "Portfolio",
    component: PortfolioResult,
    layout: "/plus",
  },
  {
    path: "/Episode",
    name: "Episode",
    icon: BurstModeIcon,
    component: Episode,
    layout: "/plus",
  },
  {
    path: "/signIn",
    name: "로그인",
    icon: PermIdentity,
    component: SignIn,
    layout: "/auth",
  },
  {
    path: "/signUp",
    name: "회원가입",
    component: SignUp,
    layout: "/auth",
  },
];

export default dashboardRoutes;
