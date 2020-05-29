import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface MyInfoIState {
  useStyles: any;
  name: string;
  birth: string;
  email: string;
  gender: string;
  phone: string;
  university_name: string;
  university_location: string;
  university_duration: string;
  university_major: string;
  university_subMajor: string;
  university_gradeAvg: string;
  university_classification: string;

  highschool: {
    name: string;
    location: string;
    duration: string;
    classification: string;
  };
  career: {
    name: string;
    position: string;
    duration: string;
    description: string;
  };
  award: {
    name: string;
    organization: string;
    date: string;
  };
  classification: {
    type: string;
    name: string;
    date: string;
    grade: string;
    Associtation: string;
  };

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
  margin-top: 17px;
`;
const Title = styled.div`
  font-size: 20px;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const InfoBox = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
function MyInfoPresenter({
  useStyles,
  handleSubmit,
  updateTerm,
  name,
  birth,
  email,
  gender,
  phone,
  university_name,
  university_location,
  university_duration,
  university_major,
  university_subMajor,
  university_gradeAvg,
  university_classification,
  highschool,
  career,
  award,
  classification,
}: MyInfoIState) {
  const classes = useStyles();

  return (
    <Container>
      <Box>
        <Title>기본 인적 사항</Title>
        <InfoBox>
          <form
            className={classes.input20}
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
          </form>
          <form
            className={classes.input30}
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
          </form>
        </InfoBox>
      </Box>
      <Box>
        <Title>학력 사항</Title>
        <SubTitle>대학 정보</SubTitle>
        <form
          className={classes.input20}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="학교 이름"
            helperText="ex) OO대학교"
            onChange={updateTerm}
            name="university"
            value={university_name}
            variant="outlined"
          ></TextField>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">지역</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={university_location}
              onChange={updateTerm}
              label="지역"
              name="university"
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
            value={university_duration}
            variant="outlined"
          ></TextField>
        </form>
        <form
          className={classes.input20}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="주 전공"
            onChange={updateTerm}
            name="university"
            value={university_major}
            variant="outlined"
          ></TextField>
        </form>
        <SubTitle>고등학교 정보</SubTitle>
      </Box>
      <Box>
        <Title>경력 사항</Title>
      </Box>
      <Box>
        <Title>자격 사항</Title>
      </Box>
    </Container>
  );
}

export default MyInfoPresenter;
