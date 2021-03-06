const API = require('./base');

class Auth extends API {
  constructor() {
    super();
    this.name = 'auth';
    this.base = '/me';
  }

  /**
   * @method hasValidCredentials
   *
   * @description
   * Tests to see if the credentials configured on the system are valid.
   */
  hasValidCredentials() {
    return this.http.get(this.base);
  }


  /**
   * @method isValidCredentials
   *
   * @description
   * Tests to see the provided credentials are valid.
   */
  isValidCredentials(username, password) {
    return this.http.get(this.base, { auth: { username, password } });
  }

  /**
   * @method authorities
   *
   * @description
   * List the user's authorities
   *
   */
  authorities() {
    return this.http.get(`${this.base}/authorities`);
  }
}

module.exports = new Auth();
