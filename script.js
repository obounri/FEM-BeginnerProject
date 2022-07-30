const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const imgContainer = document.querySelector(".doggo-container");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      imgContainer.removeChild(imgContainer.firstChild);
      imgContainer.appendChild(img);
    });
}

const promise = fetch(DOG_URL);
promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    imgContainer.appendChild(img);
  });

document.querySelector(".new-doggo-img").addEventListener("click", addNewDoggo);
