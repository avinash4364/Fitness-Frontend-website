// select the days button and the whole schedule container
const dayList = document.querySelector('.day-list');
const days = document.querySelectorAll('.day');
const programs = document.querySelector('.schedule-container');

// array for getting the index of the day clicked
const dayArray = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

// function to return the index of the array
function getDayNo(element) {
  return dayArray.indexOf(element);
}

// function to display diffrent training regimes on different day
function displayPrograms(num) {
  //   for each programs first remove the selected class if present
  for (let i = 0; i < programs.children.length; i++) {
    programs.children[i].classList.remove('selected');
  }

  //   add the selected class to that programs whose button is clicked
  programs.children[3 + num].classList.add('selected');
}

// ! further simplify it

dayList.childNodes.forEach((day) => {
  day.addEventListener('click', (e) => {
    // get the day index of that button which is clicked
    const num = getDayNo(day.innerText.toLowerCase());
    displayPrograms(num);

    // const btnNum = e.target.classList[1].split('')[1];

    // add the background effect on the clicked button
    for (let i = 0; i < days.length; i++) {
      days[i].children[0].classList.remove('clicked');
    }
    e.target.classList.add('clicked');
  });
});

// intersection observer for the background images
// const bgImg = document.querySelectorAll('.bg-img');
// const bgOverlay = document.querySelector('.bg-overlay');
// const observer = new IntersectionObserver((entries) => {
//   // for each entries check if the background image is intersecting with the viewport or not
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // if it is intersecting then reduce the image background position y in negative direction by half the speed of the scrolling speed - to do that we need to fire an window scroll event

//       // get the scrollheight of the current element
//       console.log(bgOverlay.scrollTop);
//       let scrollHeightRTV = entry.boundingClientRect.top;
//       console.log(`scrollheight : ${scrollHeightRTV}`);
//       window.addEventListener('scroll', () => {
//         let scrollHeight = this.scrollY;
//         entry.target.style.backgroundPositionY =
//           '-' + Math.round(scrollHeight / 20) + 'rem';
//       });
//     }
//   });
// });

// bgImg.forEach((img) => {
//   observer.observe(img);
// });

// * Mobile Navigation
const mobileBtn = document.querySelector('.btn-mobile-nav');
const navigationHeader = document.querySelector('.header-navigation');

mobileBtn.addEventListener('click', () => {
  navigationHeader.classList.toggle('mobile');
});
