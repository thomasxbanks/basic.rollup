import { salt } from 'lxl.utils';

const thing = () => `hello world ${salt()}`;

export default thing;
