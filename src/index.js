import _ from 'lodash';
import { LinkedList } from './linkedListComponents.js'
//for watching the html file 
require('./home.html')

const MainContent = document.getElementById('MainContent'); 
const list = new LinkedList(4)
list.append(3);
list.append(6);
list.append(7);
list.prepend(0);
list.pop();
list.shift();
const result = list.toString(); 
MainContent.innerHTML = result; 

const targetIndex = document.createElement('p'); 
const findExample = `Index of value 3 is ${list.find(3)}`; 
targetIndex.innerHTML = findExample; 

MainContent.appendChild(targetIndex);

list.insertAt(45, 2); 
const insertExample = list.toString(); 
const displayInsertExp = document.createElement('p');
displayInsertExp.innerHTML = `Insert 45 after 3rd number: ${insertExample}`;

MainContent.appendChild(displayInsertExp); 

list.insertAt(71, 1);
const insertExample2 = list.toString();
const displayInsertExp2 = document.createElement('p');
displayInsertExp2.innerHTML = `Insert 71 after 2nd number: ${insertExample2}`;

MainContent.appendChild(displayInsertExp2); 

list.removeAt(0);
const removeExample = list.toString();
const displayRemoveExp = document.createElement('p');
displayRemoveExp.innerHTML = `Use remove method to remove first number: ${removeExample}`;

MainContent.appendChild(displayRemoveExp); 

list.removeAt(1);
const removeExample2 = list.toString();
const displayRemoveExp2 = document.createElement('p');
displayRemoveExp2.innerHTML = `Use remove method to remove 2nd number: ${removeExample2}`;

MainContent.appendChild(displayRemoveExp2); 