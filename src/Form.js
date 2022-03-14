import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "test",
      password: "testnn",
      displayName: "edsdfsf"
    };
  }

  inputSet = (e) => {
    console.log(e.target.name);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = (e) => {
    e.preventDefault();
    var dat = {
      usename: this.state.username,
      password: this.state.password,
      display_name: this.state.displayName
    };

    axios.post("http://localhost/api/api.php", dat).then((response) => {
      if (response.data == "success") {
        alert("success");
      } else {
        alert("failed");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Registration</h2>
        <form>
          <div className="form-group">
            <label> User name </label>
            <input
              type="text"
              onChange={this.inputSet}
              name="username"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label> Password </label>
            <input
              type="password"
              onChange={this.inputSet}
              name="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label> Display name</label>
            <input
              type="text"
              onChange={this.inputSet}
              name="displayName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.register}>
              Register{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
