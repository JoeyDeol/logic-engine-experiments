const core = new Core([Search, Sayt, Events]);

core.fetchData("search");
core.fetchData("sayt");

// const originalAdd = window.addEventListener;
// window.addEventListener = (eventName, callback) => {
//   originalAdd.call(window, eventName, (event) => {
//     core.collectEvent(event);
//     callback(event);
//   });
// };

// window.addEventListener('click', () => console.log('click'));
