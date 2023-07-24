// js/dashboard_main.js
import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;
  const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };

  $('#start-btn').on('click', debounce(updateCounter, 1000));
});
