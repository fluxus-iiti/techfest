import React, { useEffect } from "react";

function Carousel() {
   useEffect(() => {
      var carousel = document.querySelector(".carousel");
      var cells = carousel.querySelectorAll(".carousel__cell");
      var cellCount; // cellCount set from cells-range input value
      var selectedIndex = 0;
      var cellWidth = carousel.offsetWidth;
      var cellHeight = carousel.offsetHeight;
      var isHorizontal = true;
      var rotateFn = isHorizontal ? "rotateY" : "rotateX";
      var radius, theta;
      // console.log( cellWidth, cellHeight );

      function rotateCarousel() {
         var angle = theta * selectedIndex * -1;
         carousel.style.transform =
            "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
      }

      var prevButton = document.querySelector(".previous-button");
      prevButton.addEventListener("click", function () {
         selectedIndex--;
         rotateCarousel();
      });

      var nextButton = document.querySelector(".next-button");
      nextButton.addEventListener("click", function () {
         selectedIndex++;
         rotateCarousel();
      });

      var cellsRange = document.querySelector(".cells-range");
      cellsRange.addEventListener("change", changeCarousel);
      cellsRange.addEventListener("input", changeCarousel);

      function changeCarousel() {
         cellCount = cellsRange.value;
         theta = 360 / cellCount;
         var cellSize = isHorizontal ? cellWidth : cellHeight;
         radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
         for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            if (i < cellCount) {
               // visible cell
               cell.style.opacity = 1;
               var cellAngle = theta * i;
               cell.style.transform =
                  rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
            } else {
               // hidden cell
               cell.style.opacity = 0;
               cell.style.transform = "none";
            }
         }

         rotateCarousel();
      }

      var orientationRadios = document.querySelectorAll(
         'input[name="orientation"]'
      );
      (function () {
         for (var i = 0; i < orientationRadios.length; i++) {
            var radio = orientationRadios[i];
            radio.addEventListener("change", onOrientationChange);
         }
      })();

      function onOrientationChange() {
         var checkedRadio = document.querySelector(
            'input[name="orientation"]:checked'
         );
         isHorizontal = checkedRadio.value == "horizontal";
         rotateFn = isHorizontal ? "rotateY" : "rotateX";
         changeCarousel();
      }

      // set initials
      onOrientationChange();
   });
   return (
      <>
         <div class="scene">
            <div class="carousel">
               <div class="carousel__cell">
                  <img alt="" src="/images/blochs.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/cfa.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/concastle.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/enosium.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/metabizz.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/nakshatra.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/overtinker.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/redesign.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/topgear.png" className="flux"></img>
               </div>
               <div class="carousel__cell">
                  <img alt="" src="/images/euristica.svg" className="flux"></img>
               </div>
               {/* <div class="carousel__cell">
            <img alt="" src="/images/blochs.png"></img>
          </div>
          <div class="carousel__cell">
            <img alt="" src="/images/blochs.png"></img>
          </div>
          <div class="carousel__cell">
            <img alt="" src="/images/blochs.png"></img>
          </div>
          <div class="carousel__cell">
            <img alt="" src="/images/blochs.png"></img>
          </div>
          <div class="carousel__cell">
            <img alt="" src="/images/blochs.png"></img>
          </div> */}
            </div>
         </div>

         <div class="carousel-options">
            <p>
               <label className="hidden">
                  Cells
                  <input
                     class="cells-range"
                     type="range"
                     min="3"
                     max="15"
                     value="10"
                  />
               </label>
            </p>
            <p className="">
               <button class="previous-button mr-10">{`<`}</button>
               <button class="next-button ml-10">{`>`}</button>
            </p>
            <p className="hidden">
               Orientation:
               <label>
                  <input type="radio" name="orientation" value="horizontal" checked />
                  horizontal
               </label>
               <label>
                  <input type="radio" name="orientation" value="vertical" />
                  vertical
               </label>
            </p>
         </div>
      </>
   );
}

export default Carousel;
