import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import {parseLines} from './commands/Parser'



class Converter extends Component {
  // When the enter is pressed
  onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      let ansibleString = parseLines(e.target.value)
      console.log(e.target.value)
      this.setState({
        ansibleCode: ansibleString
      })
    }
  }

  state = {
    bashCode: "#!/bin/bash\n",
    ansibleCode: "---",
    copied: false
  }
  handleChange = (e) => {
  }

  render() {
    return (
      <div className="converter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-6">
            <div className="form-floating">
              <textarea onChange={this.handleChange} onKeyDown={this.onEnterPress} className="form-control" id="floatingTextareaLeft" defaultValue={this.state.bashCode}></textarea>
              <label htmlFor="floatingTextareaLeft"><img className="smallLogo" src="bash2ansible/img/bashLogo.png" alt="bashLogo" /></label>
            </div>
          </div>
          <div className="col-6 col-md-6 border-left">
            <div className="form-floating">
              <textarea className="form-control" id="floatingTextareaRight" value={this.state.ansibleCode} disabled></textarea>
              <label htmlFor="floatingTextareaLeft"><img className="smallLogo" src="bash2ansible/img/ansibleLogo.png" alt="ansibleLogo" /></label>
            </div>
          </div>

        </div>
      </div>
      <div id="footer">
      {this.state.value}
      <br></br>
      <CopyToClipboard text={this.state.ansibleCode}
          onCopy={() => { 
            this.setState({copied: true});
            NotificationManager.success('Copied', '');
          }}
          >
        <button className="btn btn-dark btn-lg">Copy to clipboard</button>
        </CopyToClipboard>
        <br></br>
      </div>
      <NotificationContainer/>
      </div>

    )
  }
}


export default Converter
