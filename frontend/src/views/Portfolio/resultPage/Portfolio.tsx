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

interface PortfolioDTO {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  projects: Array<ProjectDTO>;
  skills: Array<SkillDTO>;
  project_len: number;
  profile_image_url: string;
}
interface SkillDTO {
  description: string;
  name: string;
  percentage: number;
}
interface ProjectDTO {
  description: string;
  name: string;
  period: string;
  roles: Array<string>;
  my_stacks: Array<String>;
  stacks: string;
  url: string;
  big_image_url: string;
  small_image_url: string;
}
const fontUrl =
  "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.2/Cafe24Dangdanghae.woff";
Font.register({
  family: "Impact",
  src: fontUrl,
});

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

const characterMap = new Map<string, string>();
characterMap.set("customer", "고객지향");
characterMap.set("national", "국제적인");
characterMap.set("positive", "긍정적인");
characterMap.set("steady", "꾸준한");
characterMap.set("versatile", "다재다능한");
characterMap.set("reliable", "듬직한");
characterMap.set("goal", "목표지향적인");
characterMap.set("bright", "밝은");
characterMap.set("learner", "빨리배우는");
characterMap.set("sincere", "성실한");
characterMap.set("communicating", "소통하는");
characterMap.set("doing", "실행력");
characterMap.set("passionate", "열정적인");
characterMap.set("polite", "예의바른");
characterMap.set("perfective", "완벽주의");
characterMap.set("principles", "원칙적인");
characterMap.set("flexible", "유연한");
characterMap.set("patience", "인내심");
characterMap.set("active", "적극적인");
characterMap.set("honesty", "정직한");
characterMap.set("creative", "창의적인");
characterMap.set("responsibility", "책임감");
characterMap.set("best", "최고의");
characterMap.set("leading", "팀을 이끄는");
characterMap.set("committed", "헌신적인");
characterMap.set("innovative", "혁신적인");
characterMap.set("realistic", "현실적인");
characterMap.set("cooperative", "협동적인");

function Portfolio({
  name,
  birth,
  email,
  phone,
  characters,
  skills,
  project_len,
  projects,
  profile_image_url,
}: PortfolioDTO) {
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
            <Text style={styles.f_Character}>
              #{characterMap.get(characters[0])}
            </Text>
            <Text style={styles.f_Character}>
              #{characterMap.get(characters[1])}
            </Text>
            <Text style={styles.f_Character}>
              #{characterMap.get(characters[2])}
            </Text>
            <Text style={styles.f_Character}>
              #{characterMap.get(characters[3])}
            </Text>
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
            <Image style={styles.s_image} source={profile_image_url} />
          </View>
          <Text style={styles.s_skillTitle}>Skills</Text>
          <View style={styles.s_skills}>
            <View style={styles.s_skiilBoxShadow1}></View>
            <View style={styles.s_skiilBoxShadow2}></View>
            <View style={styles.s_skiilBoxShadow3}></View>
            <View style={styles.s_skiilBoxShadow4}></View>
            <View style={styles.s_skiilBoxShadow5}></View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>
                {skills[0] && skills[0].name}
              </Text>
              <Text style={styles.s_skillBox_reason}>
                {skills[0] && skills[0].description}
              </Text>
              <Text style={styles.s_skillBox_score}>
                {skills[0] && skills[0].percentage}/100
              </Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>
                {skills[1] && skills[1].name}
              </Text>
              <Text style={styles.s_skillBox_reason}>
                {skills[1] && skills[1].description}
              </Text>
              <Text style={styles.s_skillBox_score}>
                {skills[1] && skills[1].percentage}/100
              </Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>
                {skills[2] && skills[2].name}
              </Text>
              <Text style={styles.s_skillBox_reason}>
                {skills[2] && skills[2].description}
              </Text>
              <Text style={styles.s_skillBox_score}>
                {skills[2] && skills[2].percentage}/100
              </Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>
                {skills[3] && skills[3].name}
              </Text>
              <Text style={styles.s_skillBox_reason}>
                {skills[3] && skills[3].description}
              </Text>
              <Text style={styles.s_skillBox_score}>
                {skills[3] && skills[3].percentage}/100
              </Text>
            </View>
            <View style={styles.s_skiilBox}>
              <Text style={styles.s_skillBox_title}>
                {skills[4] && skills[4].name}
              </Text>
              <Text style={styles.s_skillBox_reason}>
                {skills[4] && skills[4].description}
              </Text>
              <Text style={styles.s_skillBox_score}>
                {skills[4] && skills[4].percentage}/100
              </Text>
            </View>
          </View>
        </View>
      </Page>
      {project_len > 0 && (
        <Page object-fit="fill" size="A4" style={styles.thirdPage}>
          <Image style={styles.t_projectImg} src={projects[0].big_image_url} />
          <View style={styles.t_project_descBox}>
            <Text style={styles.t_project_title}>Project 1.</Text>
            <Text style={styles.t_project_subtitle}>{projects[0].name}</Text>
            <Text style={styles.t_project_desc}>{projects[0].description}</Text>
            <Text style={styles.t_project_desc}>{projects[0].stacks}</Text>
          </View>
        </Page>
      )}
      {project_len > 0 && (
        <Page style={styles.Page}>
          <View style={styles.Shadow}></View>
          <View style={styles.Box}>
            <View style={styles.fo_desc_box_shadow}></View>
            <View style={styles.fo_desc_box}>
              <Text style={styles.fo_project_info_title}>
                {projects[0].name}
              </Text>
              <Text style={styles.fo_project_desc}>
                {projects[0].description}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 기간: {projects[0].period}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 스택: {projects[0].stacks}
              </Text>
              <Text style={styles.fo_subtext}> my role</Text>
              <Text style={styles.fo_mystack}>
                {projects[0].my_stacks && projects[0].my_stacks[0]} &nbsp;
                {projects[0].my_stacks && projects[0].my_stacks[1]} &nbsp;
                {projects[0].my_stacks && projects[0].my_stacks[2]}
              </Text>
              {projects[0].roles[0] && (
                <Text style={styles.fo_myroles}>1. {projects[0].roles[0]}</Text>
              )}
              {projects[0].roles[1] && (
                <Text style={styles.fo_myroles}>2. {projects[0].roles[1]}</Text>
              )}
              {projects[0].roles[2] && (
                <Text style={styles.fo_myroles}>3. {projects[0].roles[2]}</Text>
              )}
            </View>
            <View style={styles.fo_projectImg_shadow}></View>
            <Image
              style={styles.fo_projectImg}
              src={projects[0].small_image_url}
            />
          </View>
        </Page>
      )}
      {project_len > 1 && (
        <Page object-fit="fill" size="A4" style={styles.thirdPage}>
          <Image style={styles.t_projectImg} src={projects[1].big_image_url} />
          <View style={styles.t_project_descBox}>
            <Text style={styles.t_project_title}>Project 2.</Text>
            <Text style={styles.t_project_subtitle}>{projects[1].name}</Text>
            <Text style={styles.t_project_desc}>{projects[1].description}</Text>
            <Text style={styles.t_project_desc}>{projects[1].stacks}</Text>
          </View>
        </Page>
      )}
      {project_len > 1 && (
        <Page style={styles.Page}>
          <View style={styles.Shadow}></View>
          <View style={styles.Box}>
            <View style={styles.fo_desc_box_shadow}></View>
            <View style={styles.fo_desc_box}>
              <Text style={styles.fo_project_info_title}>
                {projects[1].name}
              </Text>
              <Text style={styles.fo_project_desc}>
                {projects[1].description}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 기간: {projects[1].period}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 스택: {projects[1].stacks}
              </Text>
              <Text style={styles.fo_subtext}> my role</Text>
              <Text style={styles.fo_mystack}>
                {projects[1].my_stacks && projects[1].my_stacks[0]} &nbsp;
                {projects[1].my_stacks && projects[1].my_stacks[1]} &nbsp;
                {projects[1].my_stacks && projects[1].my_stacks[2]}
              </Text>
              {projects[1].roles[0] && (
                <Text style={styles.fo_myroles}>1. {projects[1].roles[0]}</Text>
              )}
              {projects[1].roles[1] && (
                <Text style={styles.fo_myroles}>2. {projects[1].roles[1]}</Text>
              )}
              {projects[1].roles[2] && (
                <Text style={styles.fo_myroles}>3. {projects[1].roles[2]}</Text>
              )}
            </View>
            <View style={styles.fo_projectImg_shadow}></View>
            <Image
              style={styles.fo_projectImg}
              src={projects[1].small_image_url}
            />
          </View>
        </Page>
      )}
      {project_len > 2 && (
        <Page object-fit="fill" size="A4" style={styles.thirdPage}>
          <Image style={styles.t_projectImg} src={projects[2].big_image_url} />
          <View style={styles.t_project_descBox}>
            <Text style={styles.t_project_title}>Project 3.</Text>
            <Text style={styles.t_project_subtitle}>{projects[2].name}</Text>
            <Text style={styles.t_project_desc}>{projects[2].description}</Text>
            <Text style={styles.t_project_desc}>{projects[2].stacks}</Text>
          </View>
        </Page>
      )}
      {project_len > 2 && (
        <Page style={styles.Page}>
          <View style={styles.Shadow}></View>
          <View style={styles.Box}>
            <View style={styles.fo_desc_box_shadow}></View>
            <View style={styles.fo_desc_box}>
              <Text style={styles.fo_project_info_title}>
                {projects[2].name}
              </Text>
              <Text style={styles.fo_project_desc}>
                {projects[2].description}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 기간: {projects[2].period}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 스택: {projects[2].stacks}
              </Text>
              <Text style={styles.fo_subtext}> my role</Text>
              <Text style={styles.fo_mystack}>
                {projects[2].my_stacks && projects[2].my_stacks[0]} &nbsp;
                {projects[2].my_stacks && projects[2].my_stacks[1]} &nbsp;
                {projects[2].my_stacks && projects[2].my_stacks[2]}
              </Text>
              {projects[2].roles[0] && (
                <Text style={styles.fo_myroles}>1. {projects[2].roles[0]}</Text>
              )}
              {projects[2].roles[1] && (
                <Text style={styles.fo_myroles}>2. {projects[2].roles[1]}</Text>
              )}
              {projects[2].roles[2] && (
                <Text style={styles.fo_myroles}>3. {projects[2].roles[2]}</Text>
              )}
            </View>
            <View style={styles.fo_projectImg_shadow}></View>
            <Image
              style={styles.fo_projectImg}
              src={projects[2].small_image_url}
            />
          </View>
        </Page>
      )}
      {project_len > 3 && (
        <Page object-fit="fill" size="A4" style={styles.thirdPage}>
          <Image style={styles.t_projectImg} src={projects[3].big_image_url} />
          <View style={styles.t_project_descBox}>
            <Text style={styles.t_project_title}>Project 4.</Text>
            <Text style={styles.t_project_subtitle}>{projects[3].name}</Text>
            <Text style={styles.t_project_desc}>{projects[3].description}</Text>
            <Text style={styles.t_project_desc}>{projects[3].stacks}</Text>
          </View>
        </Page>
      )}
      {project_len > 3 && (
        <Page style={styles.Page}>
          <View style={styles.Shadow}></View>
          <View style={styles.Box}>
            <View style={styles.fo_desc_box_shadow}></View>
            <View style={styles.fo_desc_box}>
              <Text style={styles.fo_project_info_title}>
                {projects[3].name}
              </Text>
              <Text style={styles.fo_project_desc}>
                {projects[3].description}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 기간: {projects[3].period}
              </Text>
              <Text style={styles.fo_project_subdesc}>
                프로젝트 스택: {projects[3].stacks}
              </Text>
              <Text style={styles.fo_subtext}> my role</Text>
              <Text style={styles.fo_mystack}>
                {projects[3].my_stacks && projects[3].my_stacks[0]} &nbsp;
                {projects[3].my_stacks && projects[3].my_stacks[1]} &nbsp;
                {projects[3].my_stacks && projects[3].my_stacks[2]}
              </Text>
              {projects[3].roles[0] && (
                <Text style={styles.fo_myroles}>1. {projects[3].roles[0]}</Text>
              )}
              {projects[3].roles[1] && (
                <Text style={styles.fo_myroles}>2. {projects[3].roles[1]}</Text>
              )}
              {projects[3].roles[2] && (
                <Text style={styles.fo_myroles}>3. {projects[3].roles[2]}</Text>
              )}
            </View>
            <View style={styles.fo_projectImg_shadow}></View>
            <Image
              style={styles.fo_projectImg}
              src={projects[3].small_image_url}
            />
          </View>
        </Page>
      )}
    </Document>
  );
}

export default Portfolio;
