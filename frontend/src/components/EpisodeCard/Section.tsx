import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface IEpisodeSection {
  children?: any;
}

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin: 25px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 27vw);
  grid-gap: 30px;
`;

const Section = ({ children }: IEpisodeSection) => (
  <Container>
    <Grid>{children}</Grid>
  </Container>
);

Section.protoTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
