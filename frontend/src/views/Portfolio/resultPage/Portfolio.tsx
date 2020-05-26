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
import firstPic2 from "./testImg/hhh_2.png";

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
  skill1: string[];
  skill2: string[];
  skill3: string[];
  skill4: string[];
  skill5: string[];
  project_len: number;
  t_projectName1: string;
  t_projectPeriod1: string;
  t_projectDesc1: string;
  t_mystacks1: string[];
  t_projectStacks1: string;
  t_roles1: string[];
}

const styles = StyleSheet.create({
  Page: {
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
    top: "33%",
    left: "3%",
  },
  s_skills: {
    position: "absolute",
    top: "39%",
    left: "7%",
    width: "75vw",
  },
  s_skiilBoxShadow1: {
    position: "absolute",
    top: "3%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "8vh",
  },
  s_skiilBoxShadow2: {
    position: "absolute",
    top: "23%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "8vh",
  },
  s_skiilBoxShadow3: {
    position: "absolute",
    top: "43%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "8vh",
  },
  s_skiilBoxShadow4: {
    position: "absolute",
    top: "63%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "8vh",
  },
  s_skiilBoxShadow5: {
    position: "absolute",
    top: "83%",
    left: "1%",
    backgroundColor: "#E6E6E6",
    width: "75vw",
    height: "8vh",
  },
  s_skiilBox: {
    backgroundColor: "#fafafa",
    marginTop: 9,
    marginBottom: 14,
    height: "8vh",
  },
  s_skillBox_title: {
    display: "table",
    padding: 4,
    fontSize: 15,
  },
  s_skillBox_score: {
    display: "table",
    padding: 4,
    fontSize: 17,
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
    opacity: 1,
  },
  t_project_descBox: {
    position: "absolute",
    top: "10%",
    left: "10%",
    backgroundColor: "#070707",
    opacity: 0.9,
    width: "45vw",
    height: "23vh",
  },
  t_project_title: {
    paddingTop: 22,
    paddingLeft: 7,
    opacity: 1,
    fontSize: 24,
    color: "#f2f2f2",
  },
  t_project_subtitle: {
    paddingTop: 22,
    paddingLeft: 7,
    marginBottom: 13,
    opacity: 1,
    fontSize: 20,
    color: "#f2f2f2",
  },
  t_project_desc: {
    marginTop: 5,
    marginLeft: 20,
    opacity: 0.8,
    fontSize: 13,
    color: "#f2f2f2",
  },
  fo_desc_box_shadow: {
    position: "absolute",
    top: "7%",
    left: "5%",
    backgroundColor: "#d8d8d8",
    opacity: 1,
    width: "80vw",
    height: "40vh",
  },
  fo_desc_box: {
    position: "absolute",
    top: "6%",
    left: "4%",
    backgroundColor: "#fafafa",
    opacity: 1,
    width: "80vw",
    height: "40vh",
  },
  fo_project_info_title: {
    marginTop: 25,
    marginLeft: 12,
    marginBottom: 12,
    opacity: 0.9,
    fontSize: 30,
    color: "#070707",
  },
  fo_projectImg_shadow: {
    position: "absolute",
    bottom: "4%",
    left: "5%",
    backgroundColor: "#d8d8d8",
    opacity: 1,
    width: "80vw",
    height: "35vh",
  },
  fo_projectImg: {
    position: "absolute",
    bottom: "5%",
    left: "4%",
    opacity: 1,
    width: "80vw",
    height: "35vh",
  },
  fo_project_desc: {
    marginTop: 5,
    marginLeft: 14,
    marginBottom: 8,
    color: "#070707",
    fontSize: 13,
    opacity: 0.9,
  },
  fo_project_subdesc: {
    marginTop: 12,
    marginBottom: 8,
    marginLeft: 14,
    color: "#070707",
    fontSize: 13,
    opacity: 0.9,
  },
  fo_subtext: {
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 5,
    color: "#070707",
    fontSize: 18,
    opacity: 0.9,
  },
  fo_mystack: {
    marginTop: 8,
    marginLeft: 14,
    marginBottom: 7,
    color: "#070707",
    opacity: 0.7,
    fontSize: 14,
  },
  fo_myroles: {
    marginTop: 10,
    marginLeft: 14,
    color: "#070707",
    fontSize: 14,
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
  skill2,
  skill3,
  skill4,
  skill5,
  project_len,
  t_projectName1,
  t_projectPeriod1,
  t_projectDesc1,
  t_mystacks1,
  t_projectStacks1,
  t_roles1,
}: PortfolioIState) {
  return (
    <Document>
      <Page style={styles.Page}>
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
      <Page style={styles.Page}>
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
            <View style={styles.s_skiilBoxShadow4}></View>
            <View style={styles.s_skiilBoxShadow5}></View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill1[0]}</Text>
              <Text style={styles.s_skillBox_reason}>{skill1[2]}</Text>
              <Text style={styles.s_skillBox_score}>{skill1[1]}/100</Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill2[0]}</Text>
              <Text style={styles.s_skillBox_reason}>{skill2[2]}</Text>
              <Text style={styles.s_skillBox_score}>{skill2[1]}/100</Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill3[0]}</Text>
              <Text style={styles.s_skillBox_reason}>{skill3[2]}</Text>
              <Text style={styles.s_skillBox_score}>{skill3[1]}/100</Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill4[0]}</Text>
              <Text style={styles.s_skillBox_reason}>{skill4[2]}</Text>
              <Text style={styles.s_skillBox_score}>{skill4[1]}/100</Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>{skill5[0]}</Text>
              <Text style={styles.s_skillBox_reason}>{skill5[2]}</Text>
              <Text style={styles.s_skillBox_score}>{skill5[1]}/100</Text>
            </View>
          </View>
        </View>
      </Page>
      {project_len > 0 && (
        <Page object-fit="fill" size="A4" style={styles.thirdPage}>
          <Image style={styles.t_projectImg} src={firstPic} />
          <View style={styles.t_project_descBox}>
            <Text style={styles.t_project_title}>Project 1.</Text>
            <Text style={styles.t_project_subtitle}>{t_projectName1}</Text>
            <Text style={styles.t_project_desc}>{t_projectDesc1}</Text>
            <Text style={styles.t_project_desc}>{t_projectStacks1}</Text>
          </View>
        </Page>
      )}
      {project_len > 0 && (
        <Page style={styles.Page}>
          <View style={styles.Shadow}></View>
          <View style={styles.Box}>
            <View style={styles.fo_desc_box_shadow}></View>
            <View style={styles.fo_desc_box}>
              <Text style={styles.fo_project_info_title}>{t_projectName1}</Text>
              <Text style={styles.fo_project_desc}>{t_projectDesc1}</Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 기간: {t_projectPeriod1}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 스택: {t_projectStacks1}
              </Text>
              <Text style={styles.fo_subtext}> my role</Text>
              <Text style={styles.fo_mystack}>
                {" "}
                {t_mystacks1[0]} &nbsp; {t_mystacks1[1]} &nbsp; {t_mystacks1[2]}
              </Text>
              {t_roles1[0] && (
                <Text style={styles.fo_myroles}>1. {t_roles1[0]}</Text>
              )}
              {t_roles1[1] && (
                <Text style={styles.fo_myroles}>2. {t_roles1[1]}</Text>
              )}
              {t_roles1[2] && (
                <Text style={styles.fo_myroles}>3. {t_roles1[2]}</Text>
              )}
            </View>
            <View style={styles.fo_projectImg_shadow}></View>
            <Image style={styles.fo_projectImg} src={firstPic2} />
          </View>
        </Page>
      )}
    </Document>
  );
}

export default Portfolio;
