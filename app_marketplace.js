var msnry;
var selectors = { fType: true, fDomain: true, fTech: true, fCompany: true };

// console.warn(`Log time: ${Date.now()}`);
// Returns a unique list of element based on a json property(eg. select of companies, or select of technologies)
function createUniqueList(jsonProperty) {
  var emptyList = [];
  var companies = pageData.map((el) => {
    var propertyVal = el[jsonProperty];
    if (Array.isArray(propertyVal)) {
      propertyVal.map((el2) => {
        emptyList.push(el2);
      });
      return emptyList;
    } else {
      return propertyVal;
    }
  });
  companies = emptyList.length > 0 ? emptyList : companies;
  var setOfValue = new Set(companies);
  companies = [...setOfValue].sort();
  return companies;
}

function createUniqueFilteredList(jsonProperty, filteredPageData) {
  var emptyList = [];
  var companies = filteredPageData.map((el) => {
    var propertyVal = el[jsonProperty];
    if (Array.isArray(propertyVal)) {
      propertyVal.map((el2) => {
        emptyList.push(el2);
      });
      return emptyList;
    } else {
      return propertyVal;
    }
  });
  companies = emptyList.length > 0 ? emptyList : companies;
  var setOfValue = new Set(companies);
  companies = [...setOfValue].sort(function (a, b) {
    var regex = /([^a-zA-Z0-9À-ÿ])/gi;
    return a
      .replace(regex, '')
      .toLowerCase()
      .localeCompare(b.replace(regex, '').toLowerCase());
  });
  return companies;
}

// function to repopulate the selects based on fiware member and fiware iHub checkbox
function createUniqueListByFilter() {
  let activeFilters = {
    filterByFiwareMember: document.querySelector('#fiwareMember').checked,
    filterByFiwareIhub: document.querySelector('#fiwareiHub').checked,
  };

  let filteredPageData = [];

  if (activeFilters.filterByFiwareMember && activeFilters.filterByFiwareIhub) {
    //console.log("both active");
    window.pageData.forEach((el, i) => {
      if (el['fiwareMember'] && el['fiwareIhub']) {
        filteredPageData.push(el);
      }
    });
  } else if (activeFilters.filterByFiwareMember) {
    //console.log("filterByFiwareMember active");
    window.pageData.forEach((el, i) => {
      if (el['fiwareMember']) {
        filteredPageData.push(el);
      }
    });
  } else if (activeFilters.filterByFiwareIhub) {
    //console.log("filterByFiwareIhub active");
    window.pageData.forEach((el, i) => {
      if (el['fiwareIhub']) {
        filteredPageData.push(el);
      }
    });
  } else {
    filteredPageData = window.pageData;
    //console.log("none is active");
  }
  return filteredPageData;
}

function initDropdowns() {
  var filteredPageData = createUniqueListByFilter();
  // update Company select
  var companiesSelectTmpl = "<option value='*'>All Organizations</option>";
  createUniqueFilteredList('company', filteredPageData).forEach((el) => {
    var companyClass = createClassFilter(el);
    var selectEl = `<option value="${companyClass}">${el}</option>`;
    companiesSelectTmpl += selectEl;
  });
  document.querySelector('#filterCompany').innerHTML = companiesSelectTmpl;

  // update Technology Select
  var technologiesTmpl = "<option value='*'>All Technologies</option>";
  companiesTechnology = createUniqueFilteredList(
    'technology',
    filteredPageData
  ).forEach((el) => {
    var techClass = createClassFilter(el);
    var selectEl = `<option value="${techClass}">${el}</option>`;
    technologiesTmpl += selectEl;
  });
  document.querySelector('#filterTechnology').innerHTML = technologiesTmpl;

  // update Type select
  var typesSelectTmpl = "<option value='*'>All Products</option>";
  createUniqueFilteredList('type', filteredPageData).forEach((el) => {
    var typeClass = createClassFilter(el);
    var selectEl = `<option value="${typeClass}">${el}</option>`;
    typesSelectTmpl += selectEl;
  });
  document.querySelector('#filterType').innerHTML = typesSelectTmpl;

  // update Domain select
  var domainsSelectTmpl = "<option value='*'>All Domains</option>";
  createUniqueFilteredList('domain', filteredPageData).forEach((el) => {
    var domainClass = createClassFilter(el);
    var selectEl = `<option value="${domainClass}">${el}</option>`;
    domainsSelectTmpl += selectEl;
  });
  document.querySelector('#filterDomain').innerHTML = domainsSelectTmpl;
}

function dropdownFilters(filter) {
  var filteredPageData = createUniqueListByFilter();
  var itemCSSFilter = '.grid-item:visible';
  var companyCSSFilter = '';
  var currentCompany = $('#filterCompany').val();
  if (currentCompany !== '*') {
    companyCSSFilter = '.' + currentCompany;
  }
  var typeCSSFilter = '';
  var currentType = $('#filterType').val();
  if (currentType !== '*') {
    typeCSSFilter = '.' + currentType;
  }

  var domainCSSFilter = '';
  var currentDomain = $('#filterDomain').val();
  if (currentDomain !== '*') {
    domainCSSFilter = '.' + currentDomain;
  }

  var techCSSFilter = '';
  var currentTech = $('#filterTechnology').val();
  if (currentTech !== '*') {
    techCSSFilter = '.' + currentTech;
  }

  // update Company select
  if (filter.fCompany) {
    var companyNameArr = ['*'];
    createUniqueFilteredList('company', filteredPageData).forEach((el) => {
      var companyClass = createClassFilter(el);
      if (
        $(
          '.' +
            companyClass +
            domainCSSFilter +
            typeCSSFilter +
            techCSSFilter +
            itemCSSFilter
        ).size()
      ) {
        companyNameArr.push(companyClass);
      }
    });

    $('#filterCompany option').each(function () {
      if (companyNameArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // update Type select
  if (filter.fType) {
    var typesArr = ['*'];
    createUniqueFilteredList('type', filteredPageData).forEach((el) => {
      var typeClass = createClassFilter(el);
      if (
        $(
          '.' +
            typeClass +
            domainCSSFilter +
            companyCSSFilter +
            techCSSFilter +
            itemCSSFilter
        ).size()
      ) {
        typesArr.push(typeClass);
      }
    });
    $('#filterType option').each(function () {
      if (typesArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // update Domain select
  if (filter.fDomain) {
    var companyDomainArr = ['*'];
    createUniqueFilteredList('domain', filteredPageData).forEach((el) => {
      var domainClass = createClassFilter(el);
      if (
        $(
          '.' +
            domainClass +
            typeCSSFilter +
            companyCSSFilter +
            techCSSFilter +
            itemCSSFilter
        ).size()
      ) {
        companyDomainArr.push(domainClass);
      }
    });
    $('#filterDomain option').each(function () {
      if (companyDomainArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // update Technology Select
  if (filter.fTech) {
    var companiesTechnologyArr = ['*'];
    createUniqueFilteredList('technology', filteredPageData).forEach((el) => {
      var techClass = createClassFilter(el);
      if (
        $(
          '.' +
            techClass +
            typeCSSFilter +
            companyCSSFilter +
            domainCSSFilter +
            itemCSSFilter
        ).size()
      ) {
        companiesTechnologyArr.push(techClass);
      }
    });
    $('#filterTechnology option').each(function () {
      if (companiesTechnologyArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}

// Returns a list of <li> for companies' technologies or domains
function createList(elements) {
  var list = '';
  elements.forEach((element) => {
    list += `<li>${element}</li>`;
  });
  return list;
}

// Returns the right classNames for isotope card filtering system
function createClassFilter(data) {
  var filterString = '';
  var regex = /([^a-zA-Z0-9À-ÿ])/gi;
  if (typeof data == 'object') {
    data.forEach((element, i) => {
      if (i + 1 === data.length) {
        filterString += `${element.toLowerCase().replace(regex, '-')}`;
      } else {
        filterString += `${element.toLowerCase().replace(regex, '-')} `;
      }
    });
  } else {
    filterString = data.toLowerCase().replace(regex, '-');
  }

  return filterString;
}

// Check if a company is Fiware member and return the right className for isotope card filtering system
function isFiwareMemberClass(data) {
  return data == true ? 'isFiwareMember' : '';
}

// Check if a company is Fiware iHub and return the right className for isotope card filtering system
function isFiwareIhubClass(data) {
  return data == true ? 'isFiwareIhub' : '';
}

// Shuffle object order in pageData array before print the card html in page
function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

// print technology

function printTecnology(data) {
  if (data.length != 0) {
    return `<div class="chip-technology">
        <p class="label-card">Technology</p>
        <ul class="chips">${createList(data)}</ul>
        <span class="chips-gradient"></span>
      </div>`;
  } else {
    return '';
  }
}

// print domain

function printDomain(data) {
  if (data.length != 0) {
    return `<div class="chip-domain">
        <p class="label-card">Domain</p>
        <ul class="chips">${createList(data)}</ul>
        <span class="chips-gradient"></span>
    </div>`;
  } else {
    return '';
  }
}

// Card creation
function cardCreation() {
  var appContainer = document.querySelector('#app');
  var appContainerTmpl = '';
  pageData.forEach((gridElementData, i) => {
    var gridElement = `<div class="grid-item ${createClassFilter(
      gridElementData.domain
    )} ${createClassFilter(gridElementData.technology)} ${createClassFilter(
      gridElementData.company
    )} ${createClassFilter(gridElementData.type)} ${isFiwareMemberClass(
      gridElementData.fiwareMember
    )} ${isFiwareIhubClass(gridElementData.fiwareIhub)}">
    <div class="gridElementLogo">
      <img src="${gridElementData.img}" alt="${gridElementData.company}" />
    </div>
    <div class="gridElementTextContainer">
      <p class="solution-name">${gridElementData.name}</p>
      <div class="company-certified">
      <h3 class="name">${gridElementData.company}</h3>
      <div class="label-certification"><span class="material-icons-outlined" id="ico-featured">verified</span> <span class="year">${
        gridElementData.year
      }</span></div>
      </div>
      <p class="excerpt">${gridElementData.content}</p>
    </div>
    <div class="gridElementTechnologyDomain">
      <div class="chip-technology-domain">
      
        ${printTecnology(gridElementData.technology)}    
      
      
        ${printDomain(gridElementData.domain)}

      </div>
    </div>
    <div class="foot">
    <a class="details" href="${
      gridElementData.companyLink
    }"><span id="ico-info" class="material-icons-outlined">info</span> See details</a>
    </div>
  </div>`;

    appContainerTmpl += gridElement;
    //appContainer.insertAdjacentHTML("beforeend", gridElement);
  });
  appContainer.innerHTML = appContainerTmpl;

  document.getElementById('filteredCompanies').innerText = pageData.length;
}

// Isotope istantiation

function initCards() {
  msnry = new Isotope('.grid', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    masonry: {
      columnWidth: '.grid-sizer',
    },
    getSortData: {
      name: '.name',
      year: '.year',
    },
  });

  msnry.on('arrangeComplete', (filteredItems) => {
    document.getElementById('filteredCompanies').innerText =
      filteredItems.length;
    if (document.activeElement !== document.getElementById('searchInput')) {
      // $('html, body').animate({ 'scrollTop': $('#searchInput').offset().top + 70}, 200);
      $('html, body').scrollTop($('#searchInput').offset().top + 70);
    }
    dropdownFilters(selectors);
    //console.warn(filteredItems);
  });
}

// Main wrapper of filter functions
var filterFunctions = {
  hasClass: (itemElem, selectorStringClass) => {
    if (selectorStringClass == '') {
      return true;
    } else {
      return itemElem.classList.contains(selectorStringClass);
    }
  },
  inputSearch: (itemElem, textString) => {
    var stopwords = /\b(FIWARE|IoT|Smart|Solution|Product|Device)\b/gi;
    var words = textString.trim().replaceAll(stopwords, '').split(/[ ,]+/);
    var regex = [];
    words.forEach(function (currentValue, index) {
      if (currentValue.trim() != '') {
        regex.push('(' + currentValue.trim() + ')');
      }
    });
    var qsRegex = new RegExp(regex.join('|'), 'gi');
    return itemElem.innerText.match(qsRegex);
  },
};

// Search input
document.querySelector('#searchInput').addEventListener('keyup', (e) => {
  if (e.target.value != '') {
    e.target.parentNode.classList.add('resetActive');
  } else {
    e.target.parentNode.classList.remove('resetActive');
  }
  msnry.arrange({
    filter: function (itemElem, itemElem2) {
      return filterFunctions.inputSearch(itemElem2, e.target.value);
    },
  });
});

document.querySelector('.resetInput').addEventListener('click', (el) => {
  document.querySelector('#searchInput').value = '';
  document.querySelector('.search-element').classList.remove('resetActive');
  msnry.arrange({
    filter: function (itemElem, itemElem2) {
      return true;
    },
  });
});

// SORT BY ALPHABETICALLY
document.querySelector('#orderByName').addEventListener('click', (e) => {
  if (e.target.classList.contains('active') == false) {
    msnry.arrange({ sortBy: 'name' });
    e.target.classList.add('active');
  } else {
    msnry.arrange({ sortBy: 'original-order' });
    e.target.classList.remove('active');
  }
});

// SORT BY YEAR
document.querySelector('#orderByYear').addEventListener('click', (e) => {
  if (e.target.classList.contains('active') == false) {
    msnry.arrange({ sortBy: 'year' });
    e.target.classList.add('active');
  } else {
    msnry.arrange({ sortBy: 'original-order' });
    e.target.classList.remove('active');
  }
});

var filterObj = {};

var updateFilterObj = (targetIdKey, targetValue) => {
  var filterSafeValue;
  if (targetIdKey == 'fiwareMember') {
    createUniqueListByFilter();
    if (document.querySelector('#' + targetIdKey).checked) {
      filterSafeValue = '.isFiwareMember';
    } else if (!document.querySelector('#' + targetIdKey).checked) {
      filterSafeValue = '';
    }
  } else if (targetIdKey == 'fiwareiHub') {
    createUniqueListByFilter();

    if (document.querySelector('#' + targetIdKey).checked) {
      filterSafeValue = '.isFiwareIhub';
    } else if (!document.querySelector('#' + targetIdKey).checked) {
      filterSafeValue = '';
    }
  } else {
    filterSafeValue = targetValue == '*' ? '' : '.' + targetValue;
  }
  filterObj[targetIdKey] = `${filterSafeValue}`;
  var filterValue = concatValues(filterObj);
  filterSetter(filterValue);
};

var filterSetter = (filterValue) => {
  msnry.arrange({
    filter: filterValue,
  });
};

document.querySelector('.filters-container').addEventListener('change', (e) => {
  if (e.target.id === 'searchInput') {
    return;
  }

  selectors = {
    fType: e.target.id !== 'filterType',
    fDomain: e.target.id !== 'filterDomain',
    fTech: e.target.id !== 'filterTechnology',
    fCompany: e.target.id !== 'filterCompany',
  };

  if (document.getElementById(e.target.id).value === '*') {
    selectors = {
      fType: true,
      fDomain: true,
      fTech: true,
      fCompany: true,
    };
  }
  updateFilterObj(e.target.id, e.target.value);
});

function concatValues(obj) {
  var value = '';
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

// toggle filter menu only on mobile
if (window.innerWidth <= 980) {
  let filtersContainer = document.querySelector('.filters-container');
  document
    .querySelector('#mobileToggleFilters')
    .addEventListener('click', (ev) => {
      ev.target.classList.toggle('activeButton');

      if (!filtersContainer.classList.contains('active')) {
        filtersContainer.classList.add('active');
        document.querySelector('#filter-button-text').innerText =
          'Hide Filters';
        filtersContainer.style.height = 'auto';

        let height = filtersContainer.clientHeight + 'px';

        filtersContainer.style.height = '0px';

        setTimeout(function () {
          filtersContainer.style.height = height;
        }, 0);
      } else {
        filtersContainer.style.height = '0px';
        document.querySelector('#filter-button-text').innerText =
          'Show Filters';

        filtersContainer.addEventListener(
          'transitionend',
          function () {
            filtersContainer.classList.remove('active');
          },
          {
            once: true,
          }
        );
      }
    });
}

function smoothScroll() {
  // Smooth scroll
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $('a').on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate(
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
  });
}

function horizontalScroll() {
  // Horizontal Scroll
  var sliders = document.querySelectorAll('.chips');
  var isDown = false;
  var startX;
  var scrollLeft;
  sliders.forEach(function (slider) {
    slider.addEventListener('mousedown', function (e) {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', function () {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', function () {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk;
      var links = slider.querySelectorAll('.item');

      for (var i = 0; i < links.length; i++) {
        links[i].classList.add('noclick');
      }
    });
  });
}


$(document).ready(function () {
  pageData = shuffle(pageData);
  horizontalScroll();
  smoothScroll();
  initDropdowns();
  cardCreation();
  initCards();

  $('#app')
    .imagesLoaded()
    .always(function (instance) {
      msnry.arrange({ sortBy: 'original-order' });
    });
});

