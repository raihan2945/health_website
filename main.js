
alert("hi");
let submit_button = document.getElementById("submit_button");
let input_init = document.getElementById("input_id");

console.log("submit button",input_init)

const myInit = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(input_init.value),
};

submit_button.addEventListener("click", function () {
  alert("done")
  fetch("https://jsonplaceholder.typicode.com/posts/1", myInit)
    .then((response) => response.json(
      // alert("done")
    ))
    .then((data) => console.log(data));
});
