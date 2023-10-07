document.getElementById("searchBtn").addEventListener("click", function () {
  const inputFieldValue = document.getElementById("countryInput");
  const inputValue = inputFieldValue.value;
  inputValue.value="";
  let countryName = inputValue;
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].capital[0]);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(data[0].population);
      console.log(Object.keys(data[0].currencies)[0])
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(Object.values(data[0].languages).toString().split(",").join(", "));
      result.innerHTML = `
    <img src="${data[0].flags.svg}" class="flagImg">
    <h2>${data[0].name.common}</h2>
    <div class="text-wrapper">
    <h4>Capital:</h4>
    <span>${data[0].capital[0]}</span>
    </div>
    <div class="text-wrapper">
    <h4>Continent:</h4>
    <span>${data[0].continents[0]}</span>
    </div>
    <div class="text-wrapper">
    <h4>Population:</h4>
    <span>${data[0].population}</span>
    </div>
    <div class="text-wrapper">
    <h4>Currency:</h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}-${Object.keys(data[0].currencies)[0]}</span>
    </div>
    <div class="text-wrapper">
    <h4>Common Languages:</h4>
    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
    </div>
    `;
    }).catch(()=>{
        if(countryName.length==0){
            result.innerHTML=`<h3>The input field can't be empty</h3>`
        }
        else{
            result.innerHTML=`<h3>Please enter a valid country name</h3>`
        }
    })
});