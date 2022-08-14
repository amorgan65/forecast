/*check for location settings, get lat & lon if available*/

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => 
      {doSomething(position.coords.latitude, position.coords.longitude);
   });
} else {

}

function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Do something with your latitude and longitude
}



//if not, prompt for box input for city and dropdown for state? 

//api request by lat&lon for weather info
//parse json info for temp, maybe more? prob more

//basically, after getting location, should immediately display weather



//EXTRA FEATURES

//maybe add way to save list of locations? to easily access again
//with list of locations. should be able to add to list or remove any from list. array?

//account creation? or what? could array of saved locations. Array of lat,lon pairs? But, save as cookie maybe?
//making accounts requires database and hashing?

//refresh automatically? or by button maybe to just get new call to api for new data

//display in cute way? not sure how yet
//learn illustrator and create own graphics? or just find some online lol
