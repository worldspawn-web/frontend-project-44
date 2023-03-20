/* eslint-disable no-console, import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import readlineSync from 'readline-sync';

const userNameAsk = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default userNameAsk();
