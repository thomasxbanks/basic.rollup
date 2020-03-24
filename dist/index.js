(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  /**
   * @constant {Function} - Delays the running of the next function
   * @param {Number} delaySeconds - The number of whole seconds to delay by
   * @example delay(2).then(() => nextFunction())
   * @returns {Promise} - `resolve` after `delaySeconds`
   */
  const delay = (delaySeconds) => new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));

  var delay_1 = delay;

  /**
   * @constant {Function} - Provides a unique-ish identifier
   * @example salt() = 0egnmh5vo
   * @returns {String} - A 9-character string of random characters
   */
  const salt = () => Math.random().toString(36).substr(2, 9);

  var salt_1 = salt;

  var name = "rollup.starter";

  const thing = () => `hello world ${salt_1()}`;

  const init = async () => {
    const element = document.body.querySelector('main');
    element.innerHTML += thing();
    await delay_1(2);
    element.innerHTML += name;
  };

  window.onload = init;

})));
