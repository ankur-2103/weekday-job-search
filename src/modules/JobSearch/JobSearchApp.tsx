import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import JobSearchLayout from "./components/layout/JobSearchLayout";
import Home from "./pages/home";

export class JobSearchApp extends Component {
  render() {
    return (
      <Routes>
        <Route path="" element={<JobSearchLayout />}>
          <Route path="" element={<Home />}></Route>
        </Route>
      </Routes>
    );
  }
}

export default JobSearchApp;
