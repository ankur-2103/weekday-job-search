import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../../components/header/Header";
import "./JobSearchLayout.css";

export class JobSearchLayout extends Component {
  render() {
    return (
      <div className="layout-container">
        <Header />
        <div className="layout-outlet">
          <Outlet />
        </div>
      </div>
    );
  }
}

export default JobSearchLayout;
