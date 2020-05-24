import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

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
}

const styles = StyleSheet.create({
  page_1: {
    fontFamily: "Impact",
    backgroundColor: "#fafafa",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  page_1_box: {
    backgroundColor: "#5882FA",
    width: "90vw",
    height: "90vh",
  },

  vote: {
    opacity: 1,
    fontSize: 10,
    display: "flex",
  },
  page: {
    fontFamily: "Impact",
    backgroundColor: "#ff333f",
    width: "100vw",
    height: "100vh",
  },

  viewIsDiv: {
    width: "30vw",
    height: "30vh",
  },
});

function Portfolio({ name, birth, email, phone, characters }: PortfolioIState) {
  return (
    <Document>
      <Page style={styles.page_1}>
        <View style={styles.page_1_box}>
          <Text style={styles.vote}>hi {name}</Text>
          <Text style={styles.vote}>hi {birth}</Text>
          <Text style={styles.vote}>hi {email}</Text>
          <Text style={styles.vote}>hi {phone}</Text>
          <Text style={styles.vote}>hi {characters}</Text>
          <Text style={styles.vote}>hi {characters[0]}</Text>
          <Text style={styles.vote}>hi {characters[1]}</Text>
          <Text style={styles.vote}>hi {characters[2]}</Text>
          <Text style={styles.vote}>hi {characters[3]}</Text>
        </View>
      </Page>
      <Page style={styles.page}>
        <View style={styles.viewIsDiv}>
          <Text style={styles.vote}>hi {name}</Text>
          <Text style={styles.vote}>hi {birth}</Text>
          <Text style={styles.vote}>hi {email}</Text>
          <Text style={styles.vote}>hi {phone}</Text>
          <Text style={styles.vote}>hi {characters}</Text>
          <Text style={styles.vote}>hi {characters[0]}</Text>
          <Text style={styles.vote}>hi {characters[1]}</Text>
          <Text style={styles.vote}>hi {characters[2]}</Text>
          <Text style={styles.vote}>hi {characters[3]}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Portfolio;
