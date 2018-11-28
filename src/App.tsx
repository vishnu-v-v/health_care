import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./Routes";

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

function Content() {
  return (
    <div>
      {routes.map((props: any, key: number) => {
        return (
          <Route
            exact={true}
            path={props.path}
            component={props.component}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default App;
