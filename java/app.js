let images = [{
    url: "./images/Completed-projects.jpg",
    title: "Rostov-on-Don<br> LCD admiral",
    title2: "81 m<sup>2</sup>",
    title3: "3.5 months",
    title4: "Upon request",
    subTitle: "Rostov-on-Don, Admiral"
}, {
    url: "./images/comp-pr2.jpg",
    title: "Sochi<br> Thieves",
    title2: "105 m<sup>2</sup>",
    title3: "4 months",
    title4: "Upon request",
    subTitle: "Sochi Thieves"
}, {
    url: "./images/comp-pr3.jpg",
    title: "Rostov-on-Don<br> Patriotic",
    title2: "93 m<sup>2</sup>",
    title3: "3 months",
    title4: "Upon request",
    subTitle: "Rostov-on-Don Patriotic"
}];

console.log("Nadejda")

function initSlider(options) {
    if (!images || !images.length) return;
    
    options = options || {
      titles: false,
      dots: true,
      autoplay: false
    };

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let firstTitle = document.querySelector(".first_title_slider");
    let secondTitle = document.querySelector(".second_title_slider");
    let thirdTitle = document.querySelector(".third_title_slider");
    let fourthTitle = document.querySelector(".fourth_title_slider");
    let sliderSubtitle = document.querySelector(".completed-subtitle");

    initImages();
    initArrows();
    initSubTitle();
  
    if (options.dots) {
      initDots();
    }
    
    if (options.titles) {
      initTitles();
    }
    
    if (options.autoplay) {
      initAutoplay();
    }

    function initImages() {
        images.forEach((image, index) => {
          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
        });
      }

    function initArrows() {
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("ar-lef")) {
             nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
             nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
    }

    function initDots() {
        images.forEach((image, index) => {
          let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
          sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
    }


    function initSubTitle() {
      images.forEach((image, index) => {
        let sTl = `<div class="completed-subtilte-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].subTitle}</div>`;
        sliderSubtitle.innerHTML += sTl;
      });
      sliderSubtitle.querySelectorAll(".completed-subtilte-item").forEach(sTl => {
        sTl.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
      
  }

      function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        if (options.dots) {
          sliderDots.querySelector(".active").classList.remove("active");
          sliderDots.querySelector(".n" + num).classList.add("active");
        }
        sliderSubtitle.querySelector(".active").classList.remove("active");
        sliderSubtitle.querySelector(".n" + num).classList.add("active");
        if (options.titles) changeTitle(num);
      }

      function initTitles() {
        let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
        firstTitle.innerHTML += titleDiv;
        let titleDiv2 = `<div class="slider__images-title">${images[0].title2}</div>`;
        secondTitle.innerHTML += titleDiv2;
        let titleDiv3 = `<div class="slider__images-title">${images[0].title3}</div>`;
        thirdTitle.innerHTML += titleDiv3;
        let titleDiv4 = `<div class="slider__images-title">${images[0].title4}</div>`;
        fourthTitle.innerHTML += titleDiv4;

      }
      
      function changeTitle(num) {
        if (!images[num].title) return;
        let sliderTitle = firstTitle.querySelector(".slider__images-title");
        sliderTitle.innerHTML = images[num].title;
        let sliderTitle2 = secondTitle.querySelector(".slider__images-title");
        sliderTitle2.innerHTML = images[num].title2;
        let sliderTitle3 = thirdTitle.querySelector(".slider__images-title");
        sliderTitle3.innerHTML = images[num].title3;
        let sliderTitle4 = fourthTitle.querySelector(".slider__images-title");
        sliderTitle4.innerHTML = images[num].title4;
      }

      function initAutoplay() {
        setInterval(() => {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          moveSlider(nextNumber);
        }, options.autoplayInterval);
      }
}


let sliderOptions = {
    dots: true,
    titles: true,
    autoplay: false,
    autoplayInterval: 5000
  };

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});