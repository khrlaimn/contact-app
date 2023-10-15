import React from "react";

//  Class Components
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  // add function
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandotry!");
      return;
    }
    this.props.addContactHandler(this.state); // pass handler from the App component
    this.setState({ name: "", email: "" }); // after click add the input disspear
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={this.add}>
          {" "}
          {/* submit the form */}
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />{" "}
            {/* event function */}
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />{" "}
            {/* event function */}
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
