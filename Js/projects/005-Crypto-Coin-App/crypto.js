const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
//.class1.class2 vs. .class1 .class2 
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");

//localStorage
localStorage.setItem("apiKey", EncryptStringAES("coinranking5b4c0f18ae0f58d83f03c66a48b651dcc031efa69c9b9ea8"));
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getCoinDataFromApi();
    //form.reset == e.target.reset
    e.target.reset();
});

const getCoinDataFromApi = () =>{
    //alert("Get Coin Data!!");
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    //console.log(apiKey);
    const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
    const options = {
        headers: {
          'x-access-token': apiKey,
        },
    };
      //fetch vs. axios


}