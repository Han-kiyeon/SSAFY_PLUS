import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface PortfolioIState {
  userId: string;
}

const Container = styled.div``;

const PortfolioPresenter: React.FunctionComponent<PortfolioIState> = ({
  userId,
}) => (
  <>
    <Container>Portfolio young</Container>
  </>
);
export default PortfolioPresenter;
