// Выпадающее меню

const toogleButtonElement = document.querySelector('.main-header__toggle');
const menuElement = document.querySelector('.main-nav');
const nojsElement = document.querySelector('.no-js');
nojsElement.classList.remove('no-js');


toogleButtonElement.addEventListener('click', function () {
  toogleButtonElement.classList.toggle('main-header__toggle--closed');
  menuElement.classList.toggle('main-nav--opened');
})


const mapWrapper = document.querySelector('#map');

if (mapWrapper) {
  ymaps.ready(init);
}

function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.93873, 30.32285],
    zoom: 17
  });

  let imageSource = {
    src: '../img/icons/map-pin.svg',
    size: [67, 100],
    offset: [-40, -100]
  }

  myMap.geoObjects.add(new ymaps.Placemark([59.938631, 30.323037],
    {
      hintContent: '<div class="map__hint">Магазин «Мишка»</div>'
    }, {
      iconLayout: 'default#image',
      iconImageHref: imageSource.src,
      iconImageSize: imageSource.size,
      iconImageOffset: imageSource.offset
    }))
}
