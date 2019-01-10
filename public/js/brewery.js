var breweryLocation = [];
var map;
var labels;

// AJAX CALL TO google maps api + TOKEN
$.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json?",
    type: "GET",
    data: {
        "$limit": 5000,
        "$$app_token": "K7i1lV0vqt5nRSZfFySmhy84t"
    }
}).done(function (data) {
    breweryLocation = data;
    console.log(data);

});

//lat: 41.8781, lng: -87.6298 }
//chicago's coordinates: 41.8781° N, 87.6298° W lat: 41.850, lng: -87.650
//INITIALIZE MAP FUNCTION USING THE GOOGLE API + KEY
function initMap() {
    // SET MAP FOCUS - CHICAGO
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8.5,
        center: { lat: 41.8781, lng: -87.6298 },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_RIGHT
        },
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });
    setMarkers(map);
}
// 41.8278° N, 87.6597° W
var breweries = [
    ["Hopewell", 41.9313, -87.7113, 1],
    ["Revolution", 41.9421, -87.7081, 2],
    ["Whiner", 41.8107, -87.6607, 3],
    ["Off-color", 41.9187, -87.7252, 4],
    ["Goose Island Brewpub", 41.91332, -87.65432, 5],
    ["Goose Island Brewpub", 41.8871, -87.6721, 6],
    // ["Goose Island Barrel House", 41.91332, -87.65432, 5],
    ["Lagunitas", 41.8572, -87.6920, 7],
    ["Solemn Oath", 41.7765, -88.1883, 8],
    ["Marz", 41.8278, -87.6597, 9],
];
var image = {
    url: "assets/images/bb.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // // The origin for this image is (0, 0).
    // origin: new google.maps.Point(0, 0),
    // // The anchor for this image is the base of the flagpole at (0, 32).
    // anchor: new google.maps.Point(0, 32)
};

function setMarkers(map) {
    for (var i = 0; i < breweries.length; i++) {
        var brewery = breweries[i];
        var marker = new google.maps.Marker({
            position: { lat: brewery[1], lng: brewery[2] },
            map: map,
            title: brewery[0],
            icon: image
        });
    }
}

