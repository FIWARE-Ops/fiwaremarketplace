function includeHTML(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            $(`#${elmnt.id}`).html(this.responseText);
          }
          if (this.status == 404) {
            $(`#${elmnt.id}`).html("Page not found.");
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML(cb);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
}

// Returns the right classNames for isotope card filtering system
function createClassFilter(data) {
  var filterString = "";
  var regex = /([^a-zA-Z0-9À-ÿ])/gi;
  if (typeof data == "object") {
    data.forEach((element, i) => {
      if (i + 1 === data.length) {
        filterString += `${element.toLowerCase().replace(/&amp/gi, "").replace(regex, "-")}`;
      } else {
        filterString += `${element.toLowerCase().replace(/&amp/gi, "").replace(regex, "-")} `;
      }
    });
  } else {
    filterString = data.toLowerCase().replace(/&amp/gi, "").replace(regex, "-");
  }

  return filterString;
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
  return itemElem.innerText.match(qsRegex);
}

function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

function initTextSearch(msnry) {
  // Search input
  document.querySelector("#searchInput").addEventListener("keyup", (e) => {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("resetActive");
    } else {
      e.target.parentNode.classList.remove("resetActive");
    }
    msnry.arrange({
      filter: function (itemElem, itemElem2) {
        return inputSearch(itemElem2, e.target.value);
      },
    });
  });
}

function filterToggle() {
  let filtersContainer = document.querySelector(".filters-container");
  document
    .querySelector("#mobileToggleFilters")
    .addEventListener("click", (ev) => {
      ev.target.classList.toggle("activeButton");

      if (!filtersContainer.classList.contains("active")) {
        filtersContainer.classList.add("active");
        document.querySelector("#filter-button-text").innerText =
          "Hide Filters";
        filtersContainer.style.height = "auto";

        let height = filtersContainer.clientHeight + "px";

        filtersContainer.style.height = "0px";

        setTimeout(function () {
          filtersContainer.style.height = height;
        }, 0);
      } else {
        filtersContainer.style.height = "0px";
        document.querySelector("#filter-button-text").innerText =
          "Show Filters";

        filtersContainer.addEventListener(
          "transitionend",
          function () {
            filtersContainer.classList.remove("active");
          },
          {
            once: true,
          }
        );
      }
    });
}

function getCSSFilter(id) {
  var cssFilter = "";
  var currentType = $(id).val();
  if (currentType !== "*") {
    cssFilter = "." + currentType;
  }
  return document.querySelector(id) ? cssFilter : "";
}

function filterOptions(id, filter, data, css) {
  var itemCSSFilter = ".grid-item:visible";
  // update Type select
  if (document.querySelector(id) && data && filter) {
    var arr = ["*"];
    data.forEach((el) => {
      var typeClass = createClassFilter(el);
      if (typeClass !== "" && $("." + typeClass + css + itemCSSFilter).size()) {
        arr.push(typeClass);
      }
    });
    $(`${id} option`).each(function () {
      if (arr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}

function dropdownFilters(filter) {
  var companyCSSFilter = getCSSFilter("#filterCompany");
  var roleCSSFilter = getCSSFilter("#filterRole");
  var departmentCSSFilter = getCSSFilter("#filterDepartment");
  var domainCSSFilter = getCSSFilter("#filterDomain");
  var countryCSSFilter = getCSSFilter("#filterCountry");

  filterOptions(
    "#filterCompany",
    filter.fCompany,
    window.companies,
    roleCSSFilter + departmentCSSFilter + domainCSSFilter + countryCSSFilter
  );
  filterOptions(
    "#filterRole",
    filter.fRole,
    window.titles,
    companyCSSFilter + departmentCSSFilter + domainCSSFilter + countryCSSFilter
  );
  filterOptions(
    "#filterDepartment",
    filter.fDepartment,
    window.departments,
    companyCSSFilter + roleCSSFilter + domainCSSFilter + countryCSSFilter
  );
  filterOptions(
    "#filterDomain",
    filter.fDomain,
    window.domains,
    companyCSSFilter + roleCSSFilter + departmentCSSFilter + countryCSSFilter
  );
  filterOptions(
    "#filterCountry",
    filter.fCountry,
    window.countries,
    companyCSSFilter + roleCSSFilter + departmentCSSFilter + domainCSSFilter
  );
}

function createModalContent(tingleModalData) {
  var modalHtml = "";
  console.warn(tingleModalData);

  modalHtml += "<div class='info-modal'>";
  modalHtml += '<img class="headshot" src="' + tingleModalData.img + '" />';
  modalHtml += "<div class='credits-modal'>";
  if (tingleModalData.name !== '') {
    modalHtml += "<h1>" + tingleModalData.name + "</h1>";
  }
  if (tingleModalData.position !== '') {
    modalHtml += "<h2>" + tingleModalData.position + "</h2>";
  }
  if (tingleModalData.company !== '') {
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
  if (tingleModalData.content !== '') {
    modalHtml += "<p>" + tingleModalData.content + "</p>";
  }
  modalHtml += "</div>";
  modalHtml += "<div class='details-modal'>";
  modalHtml += "<div class='social-modal'>";

  if (tingleModalData.twitter !== '') {
    modalHtml +=
      '<a class="twitter-link" href="' +
      tingleModalData["twitter"] +
      '" target="_blank"></a>';
  }
  if (tingleModalData.linkedin !== '') {
    modalHtml +=
      '<a class="linkedin-link" href="' +
      tingleModalData["linkedin"] +
      '" target="_blank"></a>';
  }
  if (tingleModalData.flag !== '') {
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
  document.querySelectorAll(".cat-bio").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: "Close",
        cssClass: ["tingle-modal--fullscreen"],
        onOpen: function () {
          console.log("modal open");
        },
        onClose: function () {
          console.log("modal closed");
        },
        beforeClose: function () {
          // here's goes some logic
          // e.g. save content before closing the modal
          return true; // close the modal
          return false; // nothing happens
        },
      });
      // set content

      modal.setContent(createModalContent(window.modalData[el.dataset.modal]));

      // open modal
      modal.open();
    });
  });

  $(document).ready(function () {
    $(".f-cat a").on("click", function (e) {
      e.stopPropagation();
    });
  });
}

var init = false;
var msnry;
var selectors = {
  fCompany: true,
  fRole: true,
  fDepartment: true,
  fDomain: true,
  fCountry: true,
};
var filterObj = {};

function initSelect() {
  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: ".grid-sizer",
    },
    getSortData: {
      name: ".name parseInt",
      year: ".year",
    },
    sortAscending: {
      name: true,
      year: false,
    },
  });
  msnry.on("arrangeComplete", (filteredItems) => {
    $("#filteredCompanies").text(filteredItems.length);
    /*if (document.activeElement !== document.getElementById("searchInput")) {
      $("html, body").scrollTop($("#searchInput").offset().top + 70);
    }*/
    dropdownFilters(selectors);
  });

  initTextSearch(msnry);

  /*
    document.querySelector(".resetInput").addEventListener("click", (el) => {
      document.querySelector("#searchInput").value = "";
      document.querySelector(".search-element").classList.remove("resetActive");
      msnry.arrange({
        filter: function (itemElem, itemElem2) {
          return true;
        },
      });
    });

    // SORT BY ALPHABETICALLY
    document.querySelector("#orderByName").addEventListener("click", (e) => {
      if (e.target.classList.contains("active") == false) {
        msnry.arrange({ sortBy: "name" });
        e.target.classList.add("active");
      } else {
        msnry.arrange({ sortBy: "original-order" });
        e.target.classList.remove("active");
      }
    });

    // SORT BY YEAR
    document.querySelector("#orderByYear").addEventListener("click", (e) => {
      if (e.target.classList.contains("active") == false) {
        msnry.arrange({ sortBy: "year" });
        e.target.classList.add("active");
      } else {
        msnry.arrange({ sortBy: "original-order" });
        e.target.classList.remove("active");
      }
    });*/

  $(".filters-container select").each(function (index) {
    $(this).bind("change", (e) => {
      if (e.target.id === "searchInput") {
        return;
      }

      selectors = {
        fCompany: e.target.id !== "filterCompany",
        fRole: e.target.id !== "filterRole",
        fDepartment: e.target.id !== "filterDepartment",
        fDomain: e.target.id !== "filterDomain",
        fCountry: e.target.id !== "filterCountry",
      };

      if (document.getElementById(e.target.id).value === "*") {
        selectors = {
          fCompany: true,
          fRole: true,
          fDepartment: true,
          fDomain: true,
          fCountry: true,
        };
      }

      filterObj[e.target.id] = `${
        e.target.value == "*" ? "" : "." + e.target.value
      }`;
      msnry.arrange({
        filter: concatValues(filterObj),
      });

      e.preventDefault();
    });
  });
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
        }
      );
      return false;
    } // End if
  });
}

function horizontalScroll() {
  // Horizontal Scroll
  var sliders = document.querySelectorAll(".chips");
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

document.addEventListener("DOMContentLoaded", () => {
  $("#app").css("visibility", "hidden");
  $(document).ready(function () {
    includeHTML(() => {
      $("#filteredCompanies").text(window.modalData.length);
      horizontalScroll();
      smoothScroll();
        $("#app").css("visibility", "visible");
        if (init) {
          return;
        }
        init = true;
        initSelect();
        initModal();
        filterToggle();
        // Isotope istantiation
        // Relies on unpkg.com/imagesloaded
        var count = 0;
        $('#app').imagesLoaded()
        .always( function( instance ) {
          msnry.arrange({ sortBy: "original-order" })
        })
        .progress( function( instance, image ) {
            count++;
            if ( count % 12 === 0){
              msnry.arrange({ sortBy: "original-order" });
            }
        });
    });
  });
});
