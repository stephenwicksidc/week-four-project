// 1. First select and store the elements you'll be working with
let audioPlayer = document.querySelector(".music-player");
let form = document.querySelector(".search-form");
let results = document.querySelector(".results");

// 2. Create your `onSubmit` event for getting the user's search term
form.onsubmit = function onSubmit() {
  console.log(form.search.value);
  event.preventDefault();
  //searchSoundCloud(form.search.value);
  searchSoundCloud(form.search.value);
};

// 3. Create your `fetch` request that is called after a submission
function searchSoundCloud(song){
  fetch("http://api.soundcloud.com/tracks/?client_id=8538a1744a7fdaa59981232897501e04&q= + song")
  
  .then(function(response){
    response.json().then(function(data){
      console.log(data);

      let artistOnePic = data[0].artwork_url;
      document.getElementById("artistOne").innerHTML = ("<img src=" + artistOnePic +"><br>") + data[0].title;

      let artistTwoPic = data[1].artwork_url;
      document.getElementById("artistTwo").innerHTML = ("<img src=" + artistTwoPic +"><br>") + data[1].title;

      let artistThreePic = data[2].artwork_url;
      document.getElementById("artistThree").innerHTML = ("<img src=" + artistThreePic +"><br>") + data[2].title;

      let artistFourPic = data[3].artwork_url;
      document.getElementById("artistFour").innerHTML = ("<img src=" + artistFourPic +"><br>") + data[3].title;

      let artistFivePic = data[4].artwork_url;
      document.getElementById("artistFive").innerHTML = ("<img src=" + artistFivePic +"><br>") + data[4].title;

      let artistSixPic = data[5].artwork_url;
      document.getElementById("artistSix").innerHTML = ("<img src=" + artistSixPic +"><br>") + data[5].title;

      let artistSevenPic = data[6].artwork_url;
      document.getElementById("artistSeven").innerHTML = ("<img src=" + artistSevenPic +"><br>") + data[6].title;
      
      let artistEightPic = data[7].artwork_url;
      document.getElementById("artistEight").innerHTML = ("<img src=" + artistEightPic +"><br>") + data[7].title;

      let artistNinePic = data[8].artwork_url;
      document.getElementById("artistNine").innerHTML = ("<img src=" + artistNinePic +"><br>") + data[8].title;

      let artistTenPic = data[9].artwork_url;
      document.getElementById("artistTen").innerHTML = ("<img src=" + artistTenPic +"><br>") + data[9].title;

})
  })
}

// 4. Create a way to append the fetch results to your page





// 5. Create a way to listen for a click that will play the song in the audio play
