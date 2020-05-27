import React from "react";
import { Link } from "react-router-dom";

export default function DisplayPresenter() {
  return <Link to={{ pathname: "/plus/portfolio/1/1" }}>create</Link>;
}
