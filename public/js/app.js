console.log('Client side javascript file is loaded!');
// fetch('https://puzzle.mead.io/puzzle').then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//   });
// });
// // console.log('data');
// fetch('http://localhost:3000/weather?address=India').then((res) => {
//   res.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//       return;
//     }
//     console.log(data.location);
//     console.log(data.forecast);
//   });
// });
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msgOne = document.querySelector('#msg1');
const msgTwo = document.querySelector('#msg2');

msgOne.textContent = '';
msgTwo.textContent = '';

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //   console.log('testing');
  const location = search.value;
  // console.log(location);
  msgOne.textContent = 'Loading.....';
  msgTwo.textContent = '';

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        msgOne.textContent = data.error;
        // console.log(data.error);
        return;
      }

      msgOne.textContent = data.location;
      msgTwo.textContent = data.forecast;
      // console.log(data.location);
      // console.log(data.forecast);
    });
  });
});
