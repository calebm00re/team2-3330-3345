import axios from "axios";
import {URL} from '../utils/utils'

export class UserRepository {
  /**
   * Get information about the currently signed in user
   * @returns {Object} - The current user signed in
   */
  currentUser() {
    const user = sessionStorage.getItem("user");
    if (!user) return {};
    return JSON.parse(user);
  }

  /**
   * Determine if a user is currently signed in
   * @returns {bool} - Whether a there is currently a user signed in or not
   */
  loggedIn() {
    return Object.keys(this.currentUser()).length !== 0;
  }

  /**
   * Logout the user and delete session information
   */
  logout() {
    sessionStorage.removeItem("user");
  }

  /**
   * Attempt to login
   * @param {string} name - The name to sign in with
   * @param {string} password - The password to sign in with
   * @returns {Object} - the errors of the login request
   */


  async login(name, password) {
    const errors = {};
    // const { data, status } = axios.post(URL + "/api/login", {userName: name, psw: password});

    const { data, status } = await axios.post(URL + "/api/login", {userName: name, psw: password });

    if (status > 204) errors.request = "Bad Request";

    switch (data.status) {
      case 1:
        errors.userName = "There is no user with this email";
        errors.success = false;
        console.log("case 1: " + errors.userName)
        break;
      case 2:
        errors.psw = "Incorrect password";
        errors.success = false;
        console.log("case 2: " + errors.password)
        break;

      default:
        console.log("in default case")
        console.log("data first name = " + data.firstName)
        console.log("data first name = " + data.lastName)
        
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            userName: name,
            firstName: data.firstName,
            lastName: data.lastName,
            userID: data.userID,
          })
        );
        errors.success = true;
        break;
    }
    return errors;
  }

  /**
   * Attempt to create a new account
   * @param {string} userName - The email to register with
   * @param {string} password - The password to register with
   * @param {string} firstName - The first name of the user
   * @param {string} lastName - The last name of the user
   * @returns {Object} - The errors of the register request
   */
  async register(firstname, lastname, username, pass) {
    const errors = { success: false };
    
    const { data, status } = await axios.post(URL + "/api/createUser", {firstName: firstname, lastName: lastname, userName: username, psw: pass, dob: "none", bio: "This is the start of something new."});

    if (status <= 201) {
      errors.success = true;
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          userName: username,
          firstName: firstname,
          lastName: lastname,
          userID : data.data.insertId
        })
      );
    }

    return errors;
  }

  /**
   * Get information about a user
   * @param {number} id - The id of the user to get
   * @returns {[Object, Object]} - Data, error tuple
   */
  async getUserById(id) {
    console.log(id)
    const errors = { success: false };
    const { data, status } = await axios.get(URL + "/api/getUser", {userID: id });

    if (status >= 201) errors.request = "Bad Request";
    else errors.success = true;

    return [data, errors];
  }

    /**
   * Get information about a user
   * @param {number} username - The id of the user to get
   * @returns {[Object, Object]} - Data, error tuple
   */
     async getUserIDByName(username) {
      const errors = { success: false };
      const { data, status } = await axios.get(URL + "/api/getUser", {
        params: { userName: username },
      });
  
      if (status >= 201) errors.request = "Bad Request";
      else errors.success = true;
  
      return [data, errors];
    }
  
}
