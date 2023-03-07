import { Component } from "react";
import ErrorBoundary from "../error/ErrorBoundary";
import UserContext from "../store/userContext";

import classes from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      users: [],
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    // http request to fetch data
    console.log("data fetch successfully");
    console.log(this.context);
    this.setState({ users: this.context.users });
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.state.users.filter((user) => {
          return user.name.toLowerCase().includes(this.state.searchTerm);
        }),
      });
    }
  }
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
        </div>
      </>
    );
  }
}

export default UserFinder;
