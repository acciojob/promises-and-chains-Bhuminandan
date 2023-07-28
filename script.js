let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");


let submitBtn = document.getElementById("btn");
let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
})

let bodyElement = document.getElementsByTagName("body")[0];
submitBtn.addEventListener("click",() => {
    if (ageInput.value == "" || nameInput.value == "") {
        alert("Please enter valid details");
        return;
    }
  const prom = new Promise((resolve, reject) => {
    let age = Number(ageInput.value);
    if (age > 18) {
       resolve();
    } else {
      reject();
    }
  })

  prom.then(() => {
    let innertext = `Welcome, ${nameInput.value}, You can vote.`
    alert(innertext);
  }).catch(() => {
    let innerText = `Oh sorry ${nameInput.value}. You aren't old enough.`;
    alert(innerText);
  })
})