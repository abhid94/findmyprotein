//<![CDATA[
        $(window).resize(function () {
          var h = $(window).height(),
            offsetTop = 105; // Calculate the top offset
        
          $('#map_canvas').css('height', (h - offsetTop));
        }).resize();
        
        $(function() {
          var myMap = new MapsLib({
            fusionTableId:      "1VdFkq7tPu10KHVz31Zg6o-dwuVhmylE9hp7YINev",
            googleApiKey:       "AIzaSyBlUgopyh9llhLjsv2PVwu961vVlew3XUo",
            locationColumn:     "geometry",
            map_center:         [-33.8735300, 151.2069400],
            //locationScope:      "Sydney"
          });


          var options = {
          types: ['(cities)'],
          componentRestrictions: {country: "aus"}
          };



          //var autocomplete = new google.maps.places.Autocomplete(document.getElementById('search_address'));\

          var input = document.getElementById('search_address');
          var autocomplete = new google.maps.places.Autocomplete(input, options);

      
          
          $('#search_radius').change(function(){
            myMap.doSearch();
          });
          
          $('#category').change(function(){
            myMap.category();
          });

          $('#search').click(function(){
            myMap.doSearch();
          });
          
          $('#find_me').click(function(){
            myMap.findMe(); 
            return false;
          });
          
          $('#reset').click(function(){
            myMap.reset(); 
            return false;
          });
          
          $(":text").keydown(function(e){
              var key =  e.keyCode ? e.keyCode : e.which;
              if(key === 13) {
                  $('#search').click();
                  return false;
              }
          });
        });
      //]]>