import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";
import Minus from "@material-ui/icons/Remove";

interface MyInfoIState {
  useStyles: any;
  handleCareerMinus: (event: React.FormEvent) => void;
  handleCareerAdd: (event: React.FormEvent) => void;
  handleAwardMinus: (event: React.FormEvent) => void;
  handleAwardAdd: (event: React.FormEvent) => void;
  handleClassMinus: (event: React.FormEvent) => void;
  handleClassAdd: (event: React.FormEvent) => void;
  name: string;
  birth: string;
  email: string;
  gender: string;
  phone: string;
  university: {
    name: string;
    location: string;
    duration: string;
    major: string;
    subMajor: string;
    gradeAvg: string;
    classification: string;
  };
  highschool: {
    name: string;
    location: string;
    duration: string;
  };
  careers: Array<{
    id: number;
    name: string;
    position: string;
    duration: string;
    description: string;
  }>;
  careerLen: number;
  awards: Array<{
    id: number;
    name: string;
    date: string;
    organization: string;
  }>;
  awardLen: number;
  classifications: Array<{
    type: string;
    name: string;
    date: string;
    grade: string;
    Associtation: string;
  }>;
  classificationLen: number;
  handleSubmit: (event: React.FormEvent) => void;
  updateTerm: any;
}
const Container = styled.div`
  border-top: 2px solid rgba(13, 13, 13, 0.3);
  color: #070707;
  padding-top: 20px;
  margin: 20px 10px;
`;
const Box = styled.div`
  padding: 10px 0px;
`;
const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  opacity: 0.7;
  margin-top: 24px;
`;
const Title = styled.div`
  font-size: 20px;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const AddTitle = styled.div`
  display: inline-block;
  font-size: 20px;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
  transform: translateY(4px);
`;
const InfoBox = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const Form = styled.form`
  display: inline-block;
`;
const Button = styled.div`
  display: inline-block;
`;
function MyInfoPresenter({
  useStyles,
  handleSubmit,
  updateTerm,
  handleCareerAdd,
  handleCareerMinus,
  handleAwardAdd,
  handleAwardMinus,
  handleClassAdd,
  handleClassMinus,
  name,
  birth,
  email,
  gender,
  phone,
  university,
  highschool,
  careers,
  careerLen,
  awards,
  awardLen,
  classifications,
  classificationLen,
}: MyInfoIState) {
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <Title>기본 인적 사항</Title>
        <InfoBox>
          <Form
            className={classes.input10}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              label="이름"
              helperText="ex) 김싸피"
              onChange={updateTerm}
              name="name"
              value={name}
              variant="outlined"
            ></TextField>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Form>
          <Form
            className={classes.input8}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                성별
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                value={gender}
                onChange={updateTerm}
                label="gender"
                name="gender"
              >
                <MenuItem value={"male"}>남자</MenuItem>
                <MenuItem value={"female"}>여자</MenuItem>
                <MenuItem value={"etc"}>기타</MenuItem>
              </Select>
            </FormControl>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              label="생년월일"
              helperText="ex) 1994.01.15"
              onChange={updateTerm}
              name="birth"
              value={birth}
              variant="outlined"
            ></TextField>
          </Form>
          <br />
          <Form
            className={classes.input20}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              label="연락처"
              helperText="ex) 010-0000-0000"
              onChange={updateTerm}
              name="phone"
              value={phone}
              variant="outlined"
            ></TextField>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              label="이메일"
              helperText="ex) example@gmail.com"
              onChange={updateTerm}
              name="email"
              value={email}
              variant="outlined"
            ></TextField>
          </Form>
        </InfoBox>
      </Box>
      <Box>
        <Title>학력 사항</Title>
        <SubTitle>대학 정보</SubTitle>
        <Form
          className={classes.input10}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="학교 이름"
            helperText="ex) OO대학교"
            onChange={updateTerm}
            name="university_name"
            value={university.name}
            variant="outlined"
          ></TextField>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Form>
        <Form
          className={classes.input10}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">지역</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={university.location}
              onChange={updateTerm}
              label="지역"
              name="university_location"
            >
              <MenuItem value={"Seoul"}>서울</MenuItem>
              <MenuItem value={"Gyeonggi"}>경기도</MenuItem>
              <MenuItem value={"Chungcheong"}>충청도</MenuItem>
              <MenuItem value={"Jeolla"}>전라도</MenuItem>
              <MenuItem value={"Gyeongsang"}>경상도</MenuItem>
              <MenuItem value={"Gangwon"}>강원도</MenuItem>
              <MenuItem value={"Jeju"}>제주도</MenuItem>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            label="재학 기간"
            onChange={updateTerm}
            name="university_duration"
            value={university.duration}
            variant="outlined"
          ></TextField>
        </Form>
        <br />
        <Form
          className={classes.input10}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="주 전공"
            onChange={updateTerm}
            name="university_major"
            value={university.major}
            variant="outlined"
          ></TextField>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            label="부 전공"
            onChange={updateTerm}
            name="university_subMajor"
            value={university.subMajor}
            variant="outlined"
          ></TextField>
        </Form>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Form
          className={classes.input8}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="평균 학점"
            onChange={updateTerm}
            name="university_gradeAvg"
            value={university.gradeAvg}
            variant="outlined"
          ></TextField>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              졸업 여부
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={university.classification}
              onChange={updateTerm}
              label="university_classification"
              name="university_classification"
            >
              <MenuItem value={"Graduation"}>졸업</MenuItem>
              <MenuItem value={"GraduationSoon"}>졸업 예정</MenuItem>
              <MenuItem value={"BeforeGraduation"}>재학 중</MenuItem>
              <MenuItem value={"withdraw"}>퇴학</MenuItem>
              <MenuItem value={"Leave"}>자퇴</MenuItem>
            </Select>
          </FormControl>
        </Form>
        <SubTitle>고등학교 정보</SubTitle>
        <Form
          className={classes.input10}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="학교 이름"
            helperText="ex) OO고등학교"
            onChange={updateTerm}
            name="highschool_name"
            value={highschool.name}
            variant="outlined"
          ></TextField>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Form>
        <Form
          className={classes.input10}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">지역</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={highschool.location}
              onChange={updateTerm}
              label="지역"
              name="highschool_location"
            >
              <MenuItem value={"Seoul"}>서울</MenuItem>
              <MenuItem value={"Gyeonggi"}>경기도</MenuItem>
              <MenuItem value={"Chungcheong"}>충청도</MenuItem>
              <MenuItem value={"Jeolla"}>전라도</MenuItem>
              <MenuItem value={"Gyeongsang"}>경상도</MenuItem>
              <MenuItem value={"Gangwon"}>강원도</MenuItem>
              <MenuItem value={"Jeju"}>제주도</MenuItem>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            label="재학 기간"
            onChange={updateTerm}
            name="highschool_duration"
            value={highschool.duration}
            variant="outlined"
          ></TextField>
        </Form>
        <br />
      </Box>
      <Box>
        <AddTitle>경력 사항</AddTitle>
        {careerLen !== 4 && (
          <Button className={classes.AMButton} onClick={handleCareerAdd}>
            <Fab color="primary" aria-label="next" size="small">
              <Add fontSize="small" />
            </Fab>
          </Button>
        )}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {careerLen > 0 && (
          <Button className={classes.AMButton} onClick={handleCareerMinus}>
            <Fab color="primary" aria-label="next" size="small">
              <Minus fontSize="small" />
            </Fab>
          </Button>
        )}
        <br />
        <Form
          className={classes.input10}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="회사명"
            onChange={updateTerm}
            name="university_name"
            value={university.name}
            variant="outlined"
          ></TextField>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Form>
      </Box>

      <Box>
        <AddTitle>수상 경험</AddTitle>
        {awardLen !== 4 && (
          <Button className={classes.AMButton} onClick={handleAwardAdd}>
            <Fab color="primary" aria-label="next" size="small">
              <Add fontSize="small" />
            </Fab>
          </Button>
        )}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {awardLen > 0 && (
          <Button className={classes.AMButton} onClick={handleAwardMinus}>
            <Fab color="primary" aria-label="next" size="small">
              <Minus fontSize="small" />
            </Fab>
          </Button>
        )}
        <br />
      </Box>
      <Box>
        <AddTitle>자격 사항</AddTitle>
        {classificationLen !== 4 && (
          <Button className={classes.AMButton} onClick={handleClassAdd}>
            <Fab color="primary" aria-label="next" size="small">
              <Add fontSize="small" />
            </Fab>
          </Button>
        )}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {classificationLen > 0 && (
          <Button className={classes.AMButton} onClick={handleClassMinus}>
            <Fab color="primary" aria-label="next" size="small">
              <Minus fontSize="small" />
            </Fab>
          </Button>
        )}
        <br />
      </Box>
    </Container>
  );
}

export default MyInfoPresenter;
