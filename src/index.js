function showAnswer(response) {
  let p = document.querySelector("p");
  p.innerHTML = "";
  let joke= response.data.answer;

new Typewriter(p, {
  autoStart: true,
  delay: 10,
  cursor: "",
})
.typeString(joke).start ();
}

function getJoke() {
let apiKey = "bb203f4a92e7t89f33c44201bd2fbfoa";
let context = "You are an AI assistent that has a great sense of humour.";
let prompt =
  "Tell me a funny joke about men.Provide just a joke without any other content"
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log(apiUrl);
axios.get(apiUrl).then(showAnswer);
}

function togglestyle() {
  h1.classList.toggle("highlight");
}

let p = document.querySelector("p");
let h1= document.querySelector("h1")
let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", getJoke);


