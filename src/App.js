import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                postPerPage={8}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                postPerPage={8}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                postPerPage={8}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                key="general"
                postPerPage={8}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key="health"
                postPerPage={8}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                postPerPage={8}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                postPerPage={8}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                postPerPage={8}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
