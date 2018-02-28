var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/robothead1.png') {
      myImage.setAttribute ('src','images/robothead2.png');
    } else {
      myImage.setAttribute ('src','images/robothead1.png');
    }
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Robot Brain is cool, ' + myName;
};
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Robot Brain is cool, ' + storedName;
};
myButton.onclick = function() {
  setUserName();
}