import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Freelancers from './pages/Freelancers';
import Enquiries from './pages/Enquiries';
import Dashboard from './components/Dashboard';
import FreelancerRegister from './components/FreelancerRegister';
import ClientEnquiryForm from './components/ClientEnquiryForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/freelancers" component={Freelancers} />
        <Route path="/enquiries" component={Enquiries} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={FreelancerRegister} />
        <Route path="/enquiry" component={ClientEnquiryForm} />
      </Switch>
    </Router>
  );
};

export default App;