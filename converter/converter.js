const inputEl = document.querySelector("#number");
const btn = document.querySelector("#convert-btn");
const outputEl = document.querySelector("#output");
let result;

btn.addEventListener("click", () => {
  let input = parseInt(inputEl.value);

  if(!input) {
    outputEl.innerHTML = "Please enter a valid number.";
    outputEl.classList.remove("normal");
    outputEl.classList.add("red");
    outputEl.style.display = "block";
  } else if(input < 1) {
    outputEl.innerHTML = "Please enter a number greater than or equal to 1.";
    outputEl.classList.remove("normal");
    outputEl.classList.add("red");
    outputEl.style.display = "block";
  } else if(input >= 4000) {
    outputEl.innerHTML = "Please enter a number less than or equal to 3999.";
    outputEl.classList.remove("normal");
    outputEl.classList.add("red");
    outputEl.style.display = "block";
  } else {
    let output = "";
    convertNumber(input, output);
    outputEl.innerHTML = result;
    outputEl.classList.remove("red");
    outputEl.classList.add("normal");
    outputEl.style.display = "block";
  }
});

inputEl.addEventListener("keydown", (e) => {
  let input = parseInt(inputEl.value);
  switch(e.key) {
    case "Enter":
      if(!input) {
        outputEl.innerHTML = "Please enter a valid number.";
        outputEl.classList.remove("normal");
        outputEl.classList.add("red");
        outputEl.style.display = "block";
      } else if(input < 1) {
        outputEl.innerHTML = "Please enter a number greater than or equal to 1.";
        outputEl.classList.remove("normal");
        outputEl.classList.add("red");
        outputEl.style.display = "block";
      } else if(input >= 4000) {
        outputEl.innerHTML = "Please enter a number less than or equal to 3999.";
        outputEl.classList.remove("normal");
        outputEl.classList.add("red");
        outputEl.style.display = "block";
      } else {
        let output = "";
        convertNumber(input, output);
        outputEl.innerHTML = result;
        outputEl.classList.remove("red");
        outputEl.classList.add("normal");
        outputEl.style.display = "block";
      }
      break;
  }
});

function convertNumber(decimal, roman) {
  if(decimal / 1000 >= 1) {
    roman += "M";
    decimal -= 1000;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 900 >= 1) {
    roman += "CM";
    decimal -= 900;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 500 >= 1) {
    roman += "D";
    decimal -= 500;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 400 >= 1) {
    roman += "CD";
    decimal -= 400;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 100 >= 1) {
    roman += "C";
    decimal -= 100;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 90 >= 1) {
    roman += "XC";
    decimal -= 90;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 50 >= 1) {
    roman += "L";
    decimal -= 50;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 40 >= 1) {
    roman += "XL";
    decimal -= 40;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 10 >= 1) {
    roman += "X";
    decimal -= 10;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 9 >= 1) {
    roman += "IX";
    decimal -= 9;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 5 >= 1) {
    roman += "V";
    decimal -= 5;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 4 >= 1) {
    roman += "IV";
    decimal -= 4;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  } else if(decimal / 1 >= 1) {
    roman += "I";
    decimal -= 1;
    if(decimal > 0) {
      convertNumber(decimal, roman);
    } else {
      result = roman;
      return;
    }
  }
}