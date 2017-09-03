import _ from 'lodash';
import './style.css'
import TestImage from './test.jpg'
import Data from './data.xml'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  var theicon = new Image()
  theicon.src = TestImage
  element.appendChild(theicon)

  console.log(Data)

  return element;
}

document.body.appendChild(component());