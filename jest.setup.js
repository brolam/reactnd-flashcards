//Source : http://blog.sapegin.me/all/react-jest
import jsdom from 'jsdom'
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//https://stackoverflow.com/questions/46896639/ensure-a-dom-environment-is-loaded-for-enzyme
function setUpDomEnvironment() {
  const { JSDOM } = jsdom;
  const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'});
  const { window } = dom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
      userAgent: 'node.js',
  };
  copyProps(window, global);
}

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

setUpDomEnvironment();


// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;