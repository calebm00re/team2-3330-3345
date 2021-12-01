import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {
  Route, BrowserRouter, Switch
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import Navbar from './Pages/Navbar';
import { Sidebar } from './Pages/Sidebar';
import Landing from './Pages/Landing.jsx';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import OnboardingPage from './Pages/Onboarding';
import BrowsePage from './Pages/Browse';
import ProfilePage from './Pages/ProfilePage';
import ProfileEdit from './Pages/ProfileEdit';
import CreateEditEvent from './Pages/CreateEditEvent';
import EventPage from './Pages/EventPage';

// React functional component
function App () {
  // state for storage of the information on the webpage of forms and list, uses hooks
  const [number, setNumber] = useState("")
  const [values, setValues] = useState([])

  // ENTER YOUR EC2 PUBLIC IP/URL HERE
  const ec2_url = ''
  // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
  const ec2 = false;
  // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
  const url = ec2 ? ec2_url : 'localhost'
  

  return (
    <>
    <main className="app-content">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Landing />
          </Route>
          <Route exact path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/signup">
            <Navbar />
            <SignUp />
          </Route>
          <Route exact path="/onboarding">
            <Navbar hideButtons={true} />
            <OnboardingPage />
          </Route>
          <PrivateRoute path="/home">
            <Sidebar selectedTab="home" />
              <Home />
          </PrivateRoute>
          <PrivateRoute path="/profile/:userId">
            <Sidebar selectedTab="profile" />
              <ProfilePage />
          </PrivateRoute>
          <PrivateRoute path="/editprofile/">
            <Sidebar selectedTab="profile" />
              <ProfileEdit />
          </PrivateRoute>
          <PrivateRoute path="/browse">
            <Sidebar selectedTab="browse" />
              <BrowsePage />
          </PrivateRoute>
          <PrivateRoute path="/events/:eventId">
            <Sidebar selectedTab="browse" />
              <EventPage />
          </PrivateRoute>
          <PrivateRoute path="/edit/:eventId">
            <Sidebar selectedTab="" />
              <CreateEditEvent isEditing={true} />
          </PrivateRoute>
          <PrivateRoute path="/post">
            <Sidebar selectedTab="post"/>
              <CreateEditEvent isEditing={false} />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </main>
      
    </>
  );
}

export default App;
