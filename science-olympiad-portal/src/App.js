// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ChildProfile from './components/ChildProfile';
import EventPage from './components/EventPage';
import Competition from './components/CompetitionDates';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/child/:childId" component={ChildProfile} />
        <Route path="/event/:eventId" component={EventPage} />
        <Route path="/competition" component={Competition} /> {/* Fix this line */}
      </Switch>
    </Router>
  );
  <Router>
  <Switch>
    {/* Other routes */}
    <Route path="/competition-dates" component={CompetitionDates} /> {/* Add this line */}
  </Switch>
</Router>
}

export default App;

