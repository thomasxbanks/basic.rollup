import { delay } from 'lxl.utils';
import { name } from '../package.json';
import thing from './modules/module';

const init = async () => {
  const element = document.body.querySelector('main');
  element.innerHTML += thing();
  await delay(2);
  element.innerHTML += name;
};

window.onload = init;
