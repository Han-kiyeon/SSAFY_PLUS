import React from "react";
import styled from "styled-components";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

interface PortfolioIState {
  name: string;
}

const styles = StyleSheet.create({
  vote: {
    fontSize: 10,
    display: "flex",
  },
  page: {
    backgroundColor: "#ff333f",
    width: "100vw",
    height: "100vh",
  },
  page2: {
    backgroundColor: "#33ff3f",
    width: "100vw",
    height: "100vh",
  },
  viewIsDiv: {
    width: "30vw",
    height: "30vh",
  },
});

function Portfolio({ name }: PortfolioIState) {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.viewIsDiv}>
          <Text style={styles.vote}>hi {name}</Text>
        </View>
      </Page>
      <Page style={styles.page2}>
        <View style={styles.viewIsDiv}>
          <Text style={styles.vote}>hi {name}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Portfolio;
