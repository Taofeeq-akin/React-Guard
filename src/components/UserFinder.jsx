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
      // filteredUsers: DUMMY_USERS,
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // Will only run once wen the page is rendered mostly use for sending http request...
  componentDidMount() {
    // send http request
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  //   used instead of useEffect
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
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
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setsearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setsearchTerm(event.target.value);
//   };

//   return (
//     <>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </>
//   );
// };

export default UserFinder;
