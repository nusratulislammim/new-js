# project for events
## project 06
[html link](https://stackblitz.com/edit/dom-project-chaiaurcode-bg1ogyjq?file=6-unlimitedColors%2Fchaiaurcode.js,6-unlimitedColors%2Findex.html)
```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID;

const startChangingColor = function () {
  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalID) {
    intervalID = setInterval(changeBg, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.getElementById('stop').addEventListener('click', stopChangingColor);

```

## project 05
[html link](https://stackblitz.com/edit/dom-project-chaiaurcode-bg1ogyjq?file=6-unlimitedColors%2Fchaiaurcode.js,5-keyboard%2Fchaiaurcode.js,5-keyboard%2Findex.html)
```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div>
  <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
  <tr>
  <tr>
    <td>${e.key===''?'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `
})
```