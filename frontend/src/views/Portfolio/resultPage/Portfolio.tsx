import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import firstPic from "./testImg/hhh_1.png";

const fontUrl =
  "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.2/Cafe24Dangdanghae.woff";
Font.register({
  family: "Impact",
  src: fontUrl,
});

interface PortfolioIState {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  skill1: string;
  s_score1: string;
  s_reason1: string;
  skill2: string;
  s_score2: string;
  s_reason2: string;
  skill3: string;
  s_score3: string;
  s_reason3: string;
}

const styles = StyleSheet.create({
  firstPage: {
    fontFamily: "Impact",
    backgroundColor: "#fafafa",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Box: {
    backgroundColor: "#F2F2F2",
    width: "90vw",
    height: "90vh",
    transform: "translate(-3%, -3%)",
  },
  Shadow: {
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "#E6E6E6",
    width: "90vw",
    height: "90vh",
  },

  f_TitleBox: {
    marginTop: 33,
    marginLeft: 25,
    fontSize: 20,
  },
  f_Title: {
    opacity: 0.8,
    fontSize: 25,
  },
  f_Desc: {
    marginTop: 10,
    marginLeft: 25,
    opacity: 0.5,
    fontSize: 10,
  },
  f_Characters: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    opacity: 0.7,
    fontSize: 15,
  },
  f_Character: {
    paddingBottom: 8,
    opacity: 0.7,
    fontSize: 15,
  },
  secondPage: {
    fontFamily: "Impact",
    backgroundColor: "#fafafa",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  s_InfoTitle: {
    position: "absolute",
    top: "5%",
    left: "3%",
    fontSize: 18,
  },
  s_InfoBox: {
    position: "absolute",
    top: "8%",
    left: "7%",
    width: "50vw",
    height: "50vh",
    paddingTop: 2,
    fontSize: 14,
  },
  s_image: {
    position: "absolute",
    left: "113%",
    width: "18vw",
    height: "18vh",
  },
  s_InfoBox_contents: {
    paddingTop: 18,
  },
  s_InfoSkills: {
    position: "absolute",
    top: "5%",
    left: "3%",
    fontSize: 18,
  },
  s_skillTitle: {
    position: "absolute",
    top: "37%",
    left: "3%",
  },
  s_skills: {
    position: "absolute",
    top: "45%",
    left: "7%",
    width: "75vw",
  },
  s_skiilBoxShadow1: {
    position: "absolute",
    top: "4%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "10vh",
  },
  s_skiilBoxShadow2: {
    position: "absolute",
    top: "38%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "9.7vh",
  },
  s_skiilBoxShadow3: {
    position: "absolute",
    top: "71%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "10vh",
  },
  s_skiilBox: {
    backgroundColor: "#fafafa",
    marginTop: 10,
    marginBottom: 25,
    height: "10vh",
  },
  s_skillBox_title: {
    display: "table",
    padding: 4,
    fontSize: 17,
  },
  s_skillBox_score: {
    display: "table",
    padding: 4,
    fontSize: 19,
    left: "80%",
    opacity: 0.8,
  },
  s_skillBox_reason: {
    display: "table",
    padding: 4,
    fontSize: 13,
    opacity: 0.6,
  },
  thirdPage: {
    fontFamily: "Impact",
    width: "100vw",
    height: "100vh",
  },
  t_projectImg: {
    opacity: 0.9,
  },
});

function Portfolio({
  name,
  birth,
  email,
  phone,
  characters,
  skill1,
  s_score1,
  s_reason1,
  skill2,
  s_score2,
  s_reason2,
  skill3,
  s_score3,
  s_reason3,
}: PortfolioIState) {
  return (
    <Document>
      <Page style={styles.firstPage}>
        <View style={styles.Shadow}></View>
        <View style={styles.Box}>
          <View style={styles.f_TitleBox}>
            <Text style={styles.f_Title}>{name}'s IT Portfolio</Text>
          </View>
          <Text style={styles.f_Desc}>
            &nbsp; {email} &nbsp; {phone}
          </Text>
          <View style={styles.f_Characters}>
            <Text style={styles.f_Character}>#{characters[0]}</Text>
            <Text style={styles.f_Character}>#{characters[1]}</Text>
            <Text style={styles.f_Character}>#{characters[2]}</Text>
            <Text style={styles.f_Character}>#{characters[3]}</Text>
          </View>
        </View>
      </Page>
      <Page style={styles.secondPage}>
        <View style={styles.Shadow}></View>
        <View style={styles.Box}>
          <Text style={styles.s_InfoTitle}>Infomation</Text>
          <View style={styles.s_BoxShadow}></View>
          <View style={styles.s_InfoBox}>
            <Text style={styles.s_InfoBox_contents}>
              이 &nbsp; 름 &nbsp;&nbsp; : {name}
            </Text>
            <Text style={styles.s_InfoBox_contents}>생년월일 : {birth}</Text>
            <Text style={styles.s_InfoBox_contents}>
              이메일 &nbsp;&nbsp; : {email}
            </Text>
            <Text style={styles.s_InfoBox_contents}>전화번호 : {phone}</Text>
            <Image
              style={styles.s_image}
              source="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsnCO2zl9DBZJ4v8mdXNYD1AlT1q3Y5A9e6qb4tkX2Dwvzpp6y&usqp=CAU"
            />
          </View>
          <Text style={styles.s_skillTitle}>Skills</Text>
          <View style={styles.s_skills}>
            <View style={styles.s_skiilBoxShadow1}></View>
            <View style={styles.s_skiilBoxShadow2}></View>
            <View style={styles.s_skiilBoxShadow3}></View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill1}</Text>
              <Text style={styles.s_skillBox_reason}>{s_reason1}</Text>
              <Text style={styles.s_skillBox_score}>{s_score1}/100</Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill2}</Text>
              <Text style={styles.s_skillBox_reason}>{s_reason2}</Text>
              <Text style={styles.s_skillBox_score}>{s_score2}/100</Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill3}</Text>
              <Text style={styles.s_skillBox_reason}>{s_reason3}</Text>
              <Text style={styles.s_skillBox_score}>{s_score3}/100</Text>
            </View>
          </View>
        </View>
      </Page>
      <Page object-fit="fill" size="A4">
        <Image style={styles.t_projectImg} src={firstPic} />
        <View style={styles.t_project_descBox}>
          <Text style={styles.t_project_descText}>HHH</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Portfolio;
