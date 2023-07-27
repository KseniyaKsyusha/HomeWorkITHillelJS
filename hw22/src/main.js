import $ from "jquery";
import './main.css';
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpg"
import { showButton } from './button/button';

/* console.log($("body"));

const picture = document.createElement('img');
picture.setAttribute('src', image1);
document.querySelector('body').appendChild(picture);

const text = document.createElement('span');
text.textContent = 'Contact!!!!'
document.querySelector('body').appendChild(text);

throw new Error ('Error');
 */

const divContainer = $('<div>').attr({'id':'container'});
const picture = document.createElement('img');
$(picture).attr('src', image1);
$('body').append(divContainer);
$('#container').append(picture);

showButton();

$('#myButton').click(function () {
    $(picture).attr('src', image2);
    $(this).hide();
})
