        // Javascript for the map
        
        var map;
        var all = [
            { "name": 'David, Blackburn Rovers, Selected 2 times', "lat": 53.7286, "lng": -2.488, "status": 'David' }, //Blackburn
            { "name": 'David, Fulham, Selected 2 times', "lat": 51.474899, "lng": -0.222, "status": 'David' }, //Fulham
            { "name": 'David, Wigan Athletic, Selected 2 times', "lat": 53.547699, "lng": -2.654, "status": 'David' }, //wigan
            { "name": 'David, Leeds, Selected 2 times', "lat": 53.7775, "lng": -1.573, "status": 'David' }, //Leeds
            { "name": 'David, Bournemouth, Selected 2 times', "lat": 50.7352, "lng": -1.838, "status": 'David' }, //Bournemouth

            { "name": 'Al, Celtic, Selected 2 times', "lat": 55.849701, "lng": -4.205, "status": 'Al' }, //Celtic
            { "name": 'Al, Sunderland, Selected 2 times', "lat": 54.9146, "lng": -1.389, "status": 'Al' }, //Sunderland
            { "name": 'Al, Bolton, Selected 3 times', "lat": 53.580502, "lng": -2.535, "status": 'Al' }, //Bolton
            { "name": 'Al, Falkirk, Selected 3 times', "lat": 56.005299, "lng": -3.752, "status": 'Al' }, //Falkirk
            { "name": 'Al, Cove, Selected 2 times', "lat": 51.2999655, "lng": -0.763, "status": 'Al' }, //Cove
            { "name": 'Al, Ipswich, Selected 2 times', "lat": 52.0544, "lng": 1.145, "status": 'Al' }, //Ipswich
            { "name": 'Al, Oxford, Selected 2 times', "lat": 51.7164, "lng": -1.20775, "status": 'Al' }, //Oxford

            { "name": 'Bingham, Cove, Selected 2 times', "lat": 51.2999655, "lng": -0.762, "status": 'Bing' }, //Cove
            { "name": 'Bingham, Fulham, Selected 2 times', "lat": 51.474899, "lng": -0.220, "status": 'Bing' }, //Fulham
            { "name": 'Bingham, Southampton, Selected 2 times', "lat": 50.9058, "lng": -1.391, "status": 'Bing' }, //Southampton
            { "name": 'Bingham, Brighton, Selected 2 times', "lat": 50.8609, "lng": -0.081, "status": 'Bing' }, //Brighton
            { "name": 'Bingham, Wimbledon, Selected 2 times', "lat": 51.4051, "lng": -0.281984, "status": 'Bing' }, //Wimbledon

            { "name": 'Struan, Ross County, Selected 2 times', "lat": 57.595901, "lng": -4.418, "status": 'Struan' }, //Ross County
            { "name": 'Struan, Brighton, Selected 2 times', "lat": 50.860901, "lng": -0.080, "status": 'Struan' }, //Brighton

            { "name": 'Will, Barnsley, Selected 2 times', "lat": 53.552399, "lng": -1.467, "status": 'Will' }, //Barnsley
            { "name": 'Will, Blackburn Rovers, Selected 2 times', "lat": 53.7286, "lng": -2.489, "status": 'Will' }, //Blackburn
            { "name": 'Will, Fulham, Selected 2 times', "lat": 51.474899, "lng": -0.221, "status": 'Will' }, //Fulham
            { "name": 'Will, Everton, Selected 2 times', "lat": 53.438655, "lng": -2.966, "status": 'Will' }, //Everton
            { "name": 'Will, Sunderland, Selected 2 times', "lat": 54.9146, "lng": -1.388, "status": 'Will' }, // Sunderland
            { "name": 'Will, Leeds, Selected 3 times', "lat": 53.7775, "lng": -1.572, "status": 'Will' }, //Leeds
            { "name": 'Will, Sheffield Utd, Selected 2 times', "lat": 53.3703, "lng": -1.471, "status": 'Will' }, //Shefield Utd
            { "name": 'Will, Leicester, Selected 2 times', "lat": 52.6203, "lng": -1.142, "status": 'Will' }, //Leicester
            { "name": 'Will, Bournemouth, Selected 2 times', "lat": 50.7352, "lng": -1.838, "status": 'Will' }, //Bournemouth
            { "name": 'Will, Ipswich, Selected 2 times', "lat": 52.0544, "lng": 1.144, "status": 'Will' }, //Ipswich

            { "name": 'Duffy, Sheffield Utd, Selected 2 times', "lat": 53.3703, "lng": -1.470, "status": 'Duffy' }, //Shefield Utd
            { "name": 'Duffy, Raith Rovers, Selected 2 times', "lat": 56.0999, "lng": -3.169, "status": 'Duffy' }, //Raith
        ];
        var markers = [];

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 54.5, lng: -2.9 },
                zoom: 4.9
            });
        }

        function drop() {
            map.setZoom(5.2);
            clearMarkers();
            for (var j = 0; j < all.length; j++) {
                addMarker(all[j], j * 350);
            }
        }

        function clearMarkers() {
            for (var j = 0; j < markers.length; j++) {
                markers[j].setMap(null);
            }
            markers = [];
        }

        function addMarker(position, timeout) {
            var icon = "";
            var data = position;
            switch (data.status) {
                case "Al":
                    icon = "red";
                    break;
                case "David":
                    icon = "green";
                    break;
                case "Will":
                    icon = "blue";
                    break;
                case "Duffy":
                    icon = "yellow";
                    break;
                case "Struan":
                    icon = "purple";
                    break;
                case "Bing":
                    icon = "orange";
                    break;
            }
            icon = "http://maps.google.com/mapfiles/ms/micons/" + icon + ".png";
            window.setTimeout(function() {
                markers.push(new google.maps.Marker({
                    position: position,
                    map: map,
                    title: data.name,
                    animation: google.maps.Animation.DROP,
                    icon: new google.maps.MarkerImage(icon)
                }));
            }, timeout);
        }

        google.maps.event.addDomListener(window, 'load', initialize);
        