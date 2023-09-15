let projectDone = false;

function wrapImage(id, width, height, src) {
  var img = '';

  if (width) {
    img =
      img +
      `<span class="et_pb_image">
                <img class="wp-image-100287" loading="lazy" 
                width="${width}" height="${height}" src="${src}"/>
            </span>`;
  } else {
    img =
      img +
      `<span class="et_pb_image">
                <img class="hero-product" src="${src}"/>
            </span>`;
  }

  $(id).empty();
  $(id).append(img);
  $(id + ' span')
    .hide()
    .show(0);
  //}
}

function wrapParagraphs(id, input) {
  if (input === '') {
    $(id).prev().remove();
    $(id).remove();
    return;
  }
  const html = input;
  $(id).empty();
  $(id).append(html);
}

function addChips(id, items) {
  if (items.length === 0) {
    $(id).parent().remove();
    return;
  }

  $(id).empty();
  items.forEach((el) => {
    var resource = '<li class="resource">' + el + '</li>';
    $(id).append(resource);
  });
}



function fillJob(project) {
  if (projectDone){
    return;
  }
  projectDone = true;
  $('h1#name').text(project.name);
  $('h6#name').text(project.name);

  wrapImage('#logo', 500, 300, project.img);
  wrapImage('#main-logo', 500, 300, project.img);

  wrapParagraphs('#description', project.description);

  console.log(project)


  document.title = project.name + ' - ' + project.type;

}

function loadJob() {
  $ = $ || jQuery;
  $.urlParam = function (name) {
    var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
      window.location.href
    );
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };

  $('div#back-button').on('click', function (e) {
    e.preventDefault();
    window.history.back();
  });


  if (
    $.urlParam('id') &&
    projects[$.urlParam('id')]
  ) {
    fillJob(projects[$.urlParam('id')]);
  } else {
    $($('.et_pb_section_1').children()).empty();
     $('#disclaimer').parent().parent().remove();
    
  }

  initialiseStyleBackgroundIntersectionObserver();
  //  });
  //});
}

function initialiseStyleBackgroundIntersectionObserver() {
  const lazyBackgrounds = Array.from(
    document.querySelectorAll('[data-background-image]')
  );

  if (lazyBackgrounds.length === 0) {
    return;
  }

  let lazyBackgroundObserver;

  const loadBackgroundIfElementOnScreen = (entry) => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
      lazyBackgroundObserver.unobserve(entry.target);
    }
  };

  const observeElementVisibility = (lazyBackground) => {
    lazyBackgroundObserver.observe(lazyBackground);
  };

  const setBackground = (element) => {
    element.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
  };

  if (typeof window.IntersectionObserver === 'function') {
    lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach(loadBackgroundIfElementOnScreen);
    });
    lazyBackgrounds.forEach(observeElementVisibility);
  } else {
    lazyBackgrounds.forEach(setBackground);
  }
}

document.addEventListener("data-ready", () => {
    loadJob();
});
