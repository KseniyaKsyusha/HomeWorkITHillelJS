import $ from 'jquery';
export const showButton = () => {
    const button = document.createElement('button');
    $('#container').append(button);
    $(button).text('Click my');
    $(button).attr('id', 'myButton');

}