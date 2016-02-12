import React, {Component} from 'react';
import toId from '../../toId';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(e) {
    e.preventDefault();
    const node = this.refs.input;
    const username = node.value.trim();
    if (!username) return this.props.onAddError({message: 'Username cannot be empty.'});
    const userid = toId(username);
    if (!userid) return this.props.onAddError({message: 'Only letters and numbers are allowed.'});
    if (userid.length > 15) return this.props.onAddError({message: 'Cannot be longer than 15 characters.'});
    this.props.onAddUser(username);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Project Gryph</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right" onSubmit={this.handleAddUser}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" ref="input" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
