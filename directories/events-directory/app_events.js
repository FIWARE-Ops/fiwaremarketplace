
function createModalContent(tingleModalData) {
  var modalHtml = "";

  modalHtml += "<div class='info-modal'>";
  modalHtml += '<img class="headshot" src="' + tingleModalData.img + '" />';
  modalHtml += "<div class='credits-modal'>";
  if (tingleModalData.name !== "") {
    modalHtml += "<h1>" + tingleModalData.name + "</h1>";
  }
  if (tingleModalData.position !== "") {
    modalHtml += "<h2>" + tingleModalData.position + "</h2>";
  }
  if (tingleModalData.company !== "") {
    modalHtml +=
      '<a class="company-link" href="' +
      tingleModalData["company-link"] +
      '" target="_blank">' +
      tingleModalData.company +
      "</a>";
  }
  modalHtml += "</div>";
  modalHtml += "</div>";
  modalHtml += "<div class='bio-modal'>";
  if (tingleModalData.content !== "") {
    modalHtml += "<p>" + tingleModalData.content + "</p>";
  }
  modalHtml += "</div>";
  modalHtml += "<div class='details-modal'>";
  modalHtml += "<div class='social-modal'>";

  if (tingleModalData.twitter !== "") {
    modalHtml +=
      '<a class="twitter-link" href="' +
      tingleModalData["twitter"] +
      '" target="_blank"></a>';
  }
  if (tingleModalData.linkedin !== "") {
    modalHtml +=
      '<a class="linkedin-link" href="' +
      tingleModalData["linkedin"] +
      '" target="_blank"></a>';
  }
  if (tingleModalData.flag !== "") {
    modalHtml += `<img class="flag"  src="${tingleModalData.flag}"/>`;
  }
  modalHtml += "</div>";
  modalHtml += "<div class='tags-modal'>";
  if (tingleModalData.domain) {
    modalHtml += '<p class="domain">' + tingleModalData.domain + "</p>";
  }
  /*
  if (tingleModalData.location) {
    modalHtml += '<p class="location">' + tingleModalData.location + "</p>";
  }*/
  modalHtml += "</div>";

  return modalHtml;
}


function initModal() {
  // Modal
  document.querySelectorAll(".speaker").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: "Close",
        cssClass: ["tingle-modal--fullscreen"],
        onOpen: function () {},
        onClose: function () {},
        beforeClose: function () {
          // here's goes some logic
          // e.g. save content before closing the modal
          return true; // close the modal
        },
      });
      // set content

      modal.setContent(createModalContent(window.modalData[el.dataset.modal]));

      // open modal
      modal.open();
    });
  });
}

function scrollToView() {
  const element = $("#app .grid-item:visible:first").get(0);
  const headerOffset = 88 + $(".filters-container").parent().height();
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "instant",
  });
}

var scrollSet = false;
var init = false;
var msnry;
var selectedMonth =  new Number(new Date().toISOString().split('T')[0].replaceAll("-","").substring(0,6)- 1);
var selectedText = "";


function filterFunction (){
  const month = $(this).data('month');
  
  if ($(this).hasClass( "month-divider" ) ){
    return month >= selectedMonth;
  }
  if (selectedText !=="" ){
      return month >= selectedMonth && inputSearch($(this).html(), selectedText); 
  }
  return month >= selectedMonth;
}

function inputSearch(itemElem, textString) {
  var stopwords = /\b(FIWARE|IoT|Smart|Solution|Product|Device)\b/gi;
  var words = textString.trim().replaceAll(stopwords, "").split(/[ ,]+/);
  var regex = [];
  words.forEach(function (currentValue, index) {
    if (currentValue.trim() != "") {
      regex.push("(" + currentValue.trim() + ")");
    }
  });
  var qsRegex = new RegExp(regex.join("|"), "gi");
  return itemElem.match(qsRegex);
}


function initTextSearch(msnry) {
  // Search input
  document.querySelector("#searchInput").addEventListener("keyup", (e) => {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("resetActive");
    } else {
      e.target.parentNode.classList.remove("resetActive");
    }
    selectedText = e.target.value;
    msnry.arrange({ sortBy: "original-order" });
  });
}

function initSelect() {

  $("#filterMonth").change(function(){
       selectedMonth = this.value;
       msnry.arrange({ sortBy: "original-order" });
  });

  $(`#filterMonth option[value="${selectedMonth}"]`).prop('selected', true)

  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    filter: filterFunction,
    masonry: {
      columnWidth: ".grid-sizer",
    }
  });

  initTextSearch(msnry);
}

function initCalendar(){
  var calendarInstance1 = new calendarJs( "calendar1", { 
        exportEventsEnabled: true,
        useAmPmForTimeDisplays: true,
        fullScreenModeEnabled: false,
        showHolidays: false,
        isWidget: false,
        manualEditingEnabled: false,
        views: {
          fullDay: {
              enabled: false
          },
          fullWeek: {
              enabled: false
          },
          fullMonth: {
             enabled: true
          },
          fullYear: {
              enabled: false
          },
          timeline: {
              enabled: false
          },
          allEvents: {
              enabled: false
          }
        },
        events: {
            onEventClick: (e) => {
                console.log("Clicked me - Tung!");
                console.log(e)
            }        
        }
    });

    var event1 = {
      from: new Date(),
      to: new Date(),
      title: "New Event 1",
      description: "A description of the new event"
    };

    calendarInstance1.addEvent( event1 );

}



function smoothScroll() {
  // Add smooth scrolling to all links
  jQuery("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        },
      );
      return false;
    } // End if
  });
}


function horizontalScroll() {
  // Horizontal Scroll
  var sliders = document.querySelectorAll(".speakers");
  var isDown = false;
  var startX;
  var scrollLeft;
  sliders.forEach(function (slider) {
    slider.addEventListener("mousedown", function (e) {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", function () {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", function () {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk;
      var links = slider.querySelectorAll(".item");

      for (var i = 0; i < links.length; i++) {
        links[i].classList.add("noclick");
      }
    });
  });
}


function initSticky() {
  window.onscroll = onScrollHandler;

  function onScrollHandler() {
    const header = document.getElementById("filters");
    const footer = document.getElementById("no-sticky");

    if (
      !!header &&
      !!footer &&
      window.pageYOffset > header.offsetTop &&
      window.pageYOffset < footer.offsetTop
    ) {
      header.classList.add("stickybar");
      header.classList.remove("not-stickybar");
    } else {
      header.classList.remove("stickybar");
      header.classList.add("not-stickybar");
    }
  }
}

function viewToggle() {
  let button =  $("#view-button-text");
  document
    .querySelector("#viewToggle")
    .addEventListener("click", (ev) => {
      const view = button.text();
      if (view.includes("List View")) {
        button.text( "Calendar");
        $("#calendar").show();
        $("#app").hide();
      } else {
        button.text("List View");
        $("#app").show();
        $("#calendar").hide();
      }
    });
}

document.addEventListener("html-included", () => {

  $("#app").css("visibility", "visible");
  if (init) {
    return;
  }
  init = true;
  initSelect();
  initCalendar();
  horizontalScroll();
  smoothScroll();
  initModal();
  initSticky();
  viewToggle();
  let count = 0;
  let target = 7;
  // Isotope istantiation
  // Relies on unpkg.com/imagesloaded
  $("#app")
    .imagesLoaded()
    .always(function (instance) {
      msnry.arrange({ sortBy: "original-order" });
      msnry.on("arrangeComplete", (filteredItems) => {
        if (scrollSet) {
          scrollToView();
        }
      });
    })
    .fail(function () {
      // msnry.arrange({ sortBy: "original-order" });
    })
    .progress(function (instance, image) {
      count++;
      if (count % target === 0) {
        target = target + 7;
        msnry.arrange({ sortBy: "original-order" });
      }
    });
});