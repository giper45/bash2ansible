import './App.css';
import 'react-notifications/lib/notifications.css';

import './Converter'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';

import Converter from './Converter';




class App extends React.Component {
//      constructor(props) {
//         super(props);
//  }

  render () {
    return (
    <div className="App">
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container-fluid">
          <div><span style={{ fontSize: "1.2em" }}><b>bash2Ansible</b> | </span><span>Convert your bash scripts in Ansible language</span></div>
        </div>
      </nav>
      <Converter></Converter>
      

    </div>
  );
}
}

export default App;
