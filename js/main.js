const btn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const border1 = document.querySelector('.border1');
const border2 = document.querySelector('.border2');
const border3 = document.querySelector('.border3');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
const link5 = document.querySelector('.link5');

btn.addEventListener('click', function () {
  $('.welcome').toggleClass('close');
  $('.about').toggleClass('close');
  $('.service').toggleClass('close');
  $('.skill').toggleClass('close');
  $('.work').toggleClass('close');
  $('.contact').toggleClass('close');
  $('.footer').toggleClass('close');
  $('nav').toggleClass('open-menu');
  $('body').toggleClass('hidden');
  border1.classList.toggle('open1');
  border2.classList.toggle('open2');
  border3.classList.toggle('open3');
});

link1.addEventListener('click', function () {
  $('nav').toggleClass('open-menu');
  $(".welcome").toggleClass("close");
  $(".about").toggleClass("close");
  $(".service").toggleClass("close");
  $(".skill").toggleClass("close");
  $(".work").toggleClass("close");
  $(".contact").toggleClass("close");
  $(".footer").toggleClass("close");
  $("body").toggleClass("hidden");
  border1.classList.toggle("open1");
  border2.classList.toggle("open2");
  border3.classList.toggle("open3");
});

link2.addEventListener('click', function () {
  $('nav').toggleClass('open-menu');
  $(".welcome").toggleClass("close");
  $(".about").toggleClass("close");
  $(".service").toggleClass("close");
  $(".skill").toggleClass("close");
  $(".work").toggleClass("close");
  $(".contact").toggleClass("close");
  $(".footer").toggleClass("close");
  $("body").toggleClass("hidden");
  border1.classList.toggle("open1");
  border2.classList.toggle("open2");
  border3.classList.toggle("open3");
});

link3.addEventListener('click', function () {
  $('nav').toggleClass('open-menu');
  $(".welcome").toggleClass("close");
  $(".about").toggleClass("close");
  $(".service").toggleClass("close");
  $(".skill").toggleClass("close");
  $(".work").toggleClass("close");
  $(".contact").toggleClass("close");
  $(".footer").toggleClass("close");
  $("body").toggleClass("hidden");
  border1.classList.toggle("open1");
  border2.classList.toggle("open2");
  border3.classList.toggle("open3");
});

link4.addEventListener('click', function () {
  $('nav').toggleClass('open-menu');
  $(".welcome").toggleClass("close");
  $(".about").toggleClass("close");
  $(".service").toggleClass("close");
  $(".skill").toggleClass("close");
  $(".work").toggleClass("close");
  $(".contact").toggleClass("close");
  $(".footer").toggleClass("close");
  $("body").toggleClass("hidden");
  border1.classList.toggle("open1");
  border2.classList.toggle("open2");
  border3.classList.toggle("open3");
});

link5.addEventListener('click', function () {
  $('nav').toggleClass('open-menu');
  $(".welcome").toggleClass("close");
  $(".about").toggleClass("close");
  $(".service").toggleClass("close");
  $(".skill").toggleClass("close");
  $(".work").toggleClass("close");
  $(".contact").toggleClass("close");
  $(".footer").toggleClass("close");
  $("body").toggleClass("hidden");
  border1.classList.toggle("open1");
  border2.classList.toggle("open2");
  border3.classList.toggle("open3");
});


if (!("scrollBehavior" in document.documentElement.style)) {
  import("scroll-behavior-polyfill");
}