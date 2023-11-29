let ok = document.getElementById("ok");

ok.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let lName = document.getElementById("Lname").value;
  let Bdate = Number(document.getElementById("Bdate").value);
  let height = Number(document.getElementById("height").value);
  let weight = Number(document.getElementById("weight").value);
  let bmi =(weight / height ** 2) * 10000;

  let result = document.getElementById("result");
  result.classList.add("active");
  var status = document.getElementById("status");

  if (18.5 < bmi && bmi < 24.9) {
    result.style.backgroundColor = "lightblue";
    result.style.border = "1px solid blue";
    status.innerHTML = `${name} ${lName} عزیز شاخص توده بدنی شما "ایده آل" می باشد.`;
  } else if (25 < bmi && bmi < 29.9) {
    result.style.backgroundColor = "lightgreen";
    result.style.border = "1px solid green";
    status.innerHTML = `${name} ${lName} عزیز شاخص توده بدنی شما "اضافه وزن" می باشد.`;
  }
  if (30 < bmi && bmi < 39.9) {
    result.style.backgroundColor = "lightyellow";
    result.style.border = "1px solid yellow";
    status.innerHTML = `${name} ${lName} عزیز شاخص توده بدنی شما "چاقی" می باشد.`;
  }
  if (40 < bmi) {
    result.style.backgroundColor = "lightred";
    result.style.border = "1px solid red";
    status.innerHTML = `${name} ${lName} عزیز شاخص توده بدنی شما "چاقی مفرط" می باشد.`;
  }

  let info = document.getElementById("info");

    info.innerHTML = `<h4>قد = ${height}</h4>
  <h4>وزن = ${weight}</h4>
  <h4>سال تولد = ${Bdate}</h4>`;
});

let closee = document.getElementById("btn");

closee.addEventListener("click", function () {
    result.classList.add("deactive");
    result.classList.remove("active");

})