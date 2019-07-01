'use strict';

class Cookie {
    parse(cookie = document.cookie) {
      const parsedCookie = cookie.split(";").reduce((res, c) => {
        const [key, val] = c
          .trim()
          .split("=")
          .map(decodeURIComponent);
        const allNumbers = str => /^\d+$/.test(str);
        try {
          return { ...res, [key]: allNumbers(val) ? val : JSON.parse(val) };
        } catch (e) {
          return { ...res, [key]: val };
        }
      }, {});
      return parsedCookie;
    }
    getItem(key, cookie = document.cookie) {
      return this.parse(cookie)[key];
    }
}
var index = new Cookie();

module.exports = index;
