$(document).ready(function () {
  $("#filter-btn").click(function () {
    $("#side-bar").addClass("display-side-bar");
    $(".overlay").addClass("active");
  });

  $(".overlay").click(function () {
    $(".overlay").removeClass("active");
    $("#side-bar").removeClass("display-side-bar");
  });

  $("#close-filter-btn").click(function () {
    $(".overlay").removeClass("active");
    $("#side-bar").removeClass("display-side-bar");
  });

  $("#need-it-by-filter").click(function () {
    $("#need-it-by-filter").toggleClass("filter-icon-rotate");
    $(".need-it-by-filter-option").toggleClass("filter-display");
  });

  $("#price-filter").click(function () {
    $("#price-filter").toggleClass("filter-icon-rotate");
  });

  $("#need-it-by-cursor").draggable({
    start: function (event, ui) {
      let startCoordinate = $(this).position();
      console.log("startCoordinate");
      console.log(startCoordinate);
    },
    stop: function (event, ui) {
      let stopCoordinate = $(this).position();
      console.log("endCoordinate");
      console.log(stopCoordinate);
    },
    containment: ".need-it-by-filter-option",
    axis: "x",
  });

  $("#list-tire-result").empty();
  $(function () {
    let curPage = 0;
    let listData;
    const resultPerPage = 10;
    const starFullColor = `<img src="assets/star-full-color.svg" alt="star" class="star-rating" />`;
    const starWithoutColor = `<img src="assets/star-without-color.svg" alt="star" class="star-rating" />`;

    const getRatingStars = (rating) => {
      let listRatingStars = "";
      for (let i = 0; i < rating; i++) {
        listRatingStars += ` ${starFullColor}`;
      }
      for (let i = 0; i < 5 - rating; i++) {
        listRatingStars += ` ${starWithoutColor}`;
      }
      return listRatingStars;
    };

    $.getJSON("./mock/MOCK_DATA.json", function (data) {
      listData = data
        .sort((a, b) => -a.price + b.price)
        .map(({ rating, recentlyAdded, price }) => {
          return `<div class="wrap-result">
            <div class="wrap-image">
                <div class="featured-tire-card-detail-overview-option-badge">
                    <!-- Display discount -->
                    <!-- <span class="featured-tire-card-detail-overview-option-badge-save">Save
                        $100</span> -->
                </div>
                <img src="assets/tires.png" alt="tires" />
                <div
                    class="featured-tire-card-detail-overview-option-badge featured-tire-card-detail-overview-option-badge-right">
                    <div>
                        <img src="assets/compare-plus.svg" alt="" srcset="">
                        <span>Compare</span>
                    </div>
                </div>
            </div>
            <div class="wrap-detail">
                <div class="featured-tire-card-detail-overview-option-detail wrap-detail-col">
                    <img src="assets/tire-name.png" alt="tires-brand" class="tire-brand" />
                    <!-- Display tire name -->
                    <span class="tire-name">
                        {{tire-name}}
                    </span>
                    <!-- Display tire type -->
                    <span class="tire-type">
                        {{tire-type}}
                    </span>
                    <!-- Display tire rating number -->
                    <div class="wrap-rating w-100-fl-row">
                        <div class="wrap-rating-list-star" id="wrap-rating-list-star">
                            ${getRatingStars(rating)}
                        </div>
                        <span class="rating-number">${rating}</span>
                    </div>
                </div>
                <div class="featured-tire-card-detail-overview-option-detail wrap-detail-col">
                    <!-- Display weather status -->
                    <div class="weather-status w-100-fl-row">
                        <img src="assets/weather.svg" alt="">
                        <span>All weather</span>
                        <img src="assets/info-icon.svg" alt="">
                    </div>
                    <!-- Display tire warranty number -->
                    <span class="warranty-number">
                        {{number}} Mile warranty
                    </span>
                    <!-- Display weather status -->
                    <div class="weather-status w-100-fl-row">
                        <span>Black sidewall</span>
                        <img src="assets/info-icon.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="wrap-pricing">
                <div class="featured-tire-card-footer">
                    <!-- Pricing --->
                    <span class="pricing">
                        $${price} EA
                    </span>
                    <!-- Available date --->
                    <div class="available-data">
                        <img src="assets/tick.svg" alt="tick">
                        <span>Available ${new Date(
                          recentlyAdded
                        ).getMonth()}/${new Date(
            recentlyAdded
          ).getDate()}</span>
                    </div>
                    <div class="mail-in-rebate">
                        <img src="assets/special.svg" alt="special">
                        <span>Mail-in rebate of $75</span>
                    </div>
                    <button onclick="">ADD TO CART</button>
                </div>
            </div>
        </div>`;
        });

      $("#number-result-found").text(`${listData.length} Tire Results`);

      for (let i = curPage; i < curPage + resultPerPage; i++) {
        $("#list-tire-result").append(listData[i]);
      }
    });

    $("#see-more-result-btn").click(function () {
      curPage += resultPerPage;
      for (let i = curPage; i < curPage + resultPerPage; i++) {
        $("#list-tire-result").append(listData[i]);
      }
    });
  });
});
