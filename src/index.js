import foo from './fun';
import './style.css';
import otaku from './img.jpg';

foo();

// 웹팩은 똑똑해서 아래의 경우를 모두 인식한다.
// css를 동적으로 생성한 경우
document.getElementById('hello').classList.add('hello');

// img.jpeg를 동적으로 불러온 경우
let myImage = new Image();
myImage.src = otaku;
document.getElementById('hello').appendChild(myImage);

// 이런 식으로 폰트도 되고 CSV/XML/JSON도 됨
// 해당하는 로더만 있으면 된다.