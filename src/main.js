import { delay } from 'lxl.utils';
import { name } from '../package.json';
import thing from './modules/module';

const init = async () => {
  const element = document.body.querySelector('main');
  element.innerHTML += `<h1>${thing()}</h1>`;
  await delay(2);
  element.innerHTML += `<h2>${name} 🤓</h2>`;
};

window.onload = init;
