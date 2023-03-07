import { Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
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
    this.setState({ users: DUMMY_USERS });
    this.setState({ filteredUsers: DUMMY_USERS });
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
          <Users users={this.state.filteredUsers} />
        </div>
      </>
    );
  }
}

export default UserFinder;
