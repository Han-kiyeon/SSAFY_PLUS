# frontend 

> 신상엽 음영현 한승민

## React JS Web App



### 폴더 구조

- assets : img, css, jss 등 
- components : Navbar, Card, Grid 등 공통 되는 컴포넌츠 들
- layouts :  전체 틀 (딱 하나)
- views : layouts 안에 보여질 화면(개발 하는 곳)



material-ui

```react
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    </Card>
  );
}
```

위와 같은 방식이 공식문서에서 안내하는 material-ui 사용법

현재 우리 폴더를 살펴보면

```react
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
const useStyles = makeStyles(styles);

export default function SsafyPlus({ ...rest }) {
  // styles
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
    </div>
  );
}

```

useStyles 를 하나의 뷰 파일 xxx.js 에 넣지 않고 assets/jss/ -> 안에 넣어놓고 불러 오는 방식 채택



만약 질의 응답 게시판을 만들게 되면

views 안에 폴더 만들고 그 안에 xxx.js 만드시고 개발 하면 됩니다.

만들다가 grid 가 필요하면 components 에 grind 가져와서 쓰시면 되요~



현재 assets, components 폴더 안에있는것은 템플릿에서 가져온 것들 에서 조금 변형한것

## 필요한 것들 쓰시고 쓴 것은 따로 메모 해주세요!!!

나중에 안쓰는것들 지우게요

