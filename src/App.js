import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Milestone from "./Components/Milestone";
import Overview from './Components/Overview';
import Timesheet from "./Components/Timesheet";
import Files from "./Components/Files"
import Discussion from "./Components/Discussion";
import Activity from "./Components/Activity"
import { PublicLayout } from './layouts/PublicLayout';
import Kenban from './Components/taskTypes/Kenban';

const App = () => {
	return (
    <div>     
      <Router>
        <div>
          <Routes>
            <Route  element={<PublicLayout/>}>
              <Route
                path="/"
                element={<Overview />}
              ></Route>
              <Route
                path="/milestone"
                element={<Milestone />}
              ></Route>
<Route
                path="/tasks"
                element={<Kenban/>}
              ></Route>
              <Route
                path="/overview"
                element={<Overview />}
              ></Route>
              <Route
                path="/timesheet"
                element={<Timesheet />}
              ></Route>
              <Route
                path="/files"
                element={<Files />}
              ></Route>
<Route
                path="/discussion"
                element={<Discussion />}
              ></Route>
              <Route
                path="/activity-feed"
                element={<Activity />}
              ></Route>
              </Route>
            </Routes>
          </div>
			  </Router>
      </div>
    )

}
  export default App