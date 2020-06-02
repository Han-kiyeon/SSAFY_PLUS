// 가져올 아이콘 모양들
import Home from "@material-ui/icons/Home";
import Assignment from "@material-ui/icons/Assignment";
import Description from "@material-ui/icons/Description";
import PermIdentity from "@material-ui/icons/PermIdentity";
import WorkIcon from "@material-ui/icons/Work";
import ErrorIcon from "@material-ui/icons/Error";

// 레이아웃에 입힐 뷰들
import Main from "views/Main/Main.js";
import Portfolio from "views/Portfolio/firstPage";
import Portfolio2 from "views/Portfolio/secondPage";
import Portfolio3 from "views/Portfolio/thirdPage";
import PortfolioResult from "views/Portfolio/resultPage";
import Support from "views/Support";
import BoardMain from "views/Board/BoardMain.js";
import PostList from "views/Board/PostList.js";
import PostDetail from "views/Board/PostDetail.js";
import SignIn from "views/Auth/SignIn";
import SignUp from "views/Auth/SignUp";
import BreakingError from "views/BreakingError/BreakingError.js";
import MakePost from "views/Board/MakePost.js";

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
    id: 4,
    path: "/breakingerror",
    name: "에러타파",
    icon: ErrorIcon,
    component: BreakingError,
    layout: "/plus",
  },
  {
    path: "/postList",
    name: "게시글 목록",
    component: PostList,
    layout: "/plus",
  },
  {
    path: "/episode",
    name: "Job Support",
    icon: WorkIcon,
    component: Support,
    layout: "/plus",
  },
  {
    id: 2,
    path: "/portfolio/1/:id",
    name: "Portfolio",
    icon: Assignment,
    component: Portfolio,
    layout: "/plus",
  },
  {
    path: "/portfolio/2/:id",
    name: "Portfolio",
    component: Portfolio2,
    layout: "/plus",
  },
  {
    path: "/portfolio/3/:id",
    name: "Portfolio",
    component: Portfolio3,
    layout: "/plus",
  },
  {
    path: "/portfolio/result/:id",
    name: "Portfolio",
    component: PortfolioResult,
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
  {
    path: "/postdetail",
    name: "게시글상세",
    component: PostDetail,
    layout: "/plus",
  },
  {
    path: "/postcreate",
    name: "게시글작성하기",
    component: MakePost,
    layout: "/plus",
  },
];

export default dashboardRoutes;
