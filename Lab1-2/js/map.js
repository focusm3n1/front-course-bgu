;(function() {
  if (typeof ymaps === 'undefined') {
    return;
  }

  ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [50.595196583583046,36.572905032931054],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'г.Белгород, ул. Победы, 165'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [40, 63.2],
            iconImageOffset: [-50, -38]
        });

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
});


})();