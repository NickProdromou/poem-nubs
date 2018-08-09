import { configure } from 'enzyme';
import { theme } from '../src/styles/theme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
