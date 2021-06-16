import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

jest.setTimeout(10000);

configure({ adapter: new Adapter() });