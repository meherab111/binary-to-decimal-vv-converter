let binaryBtn = document.getElementById("binary_btn");

let decimalBtn = document.getElementById("decimal_btn");

let resetBtn = document.getElementById("reset_btn");

let conInput = document.getElementById("conv_input");

let conOutput = document.getElementById("conv_output");

let inputValue;

const decToBinFunc = () => {
  
  inputValue = Math.floor(Math.abs(conInput.value));

  if (inputValue == "") {
    alert("Please Enter A Code !!");
  }

  decimalBtn.style.backgroundColor = "";

  binaryBtn.style.backgroundColor = "#4325d2";

  let modulus;

  let binaryValue = [];

  let binaryResult = "";

  if (inputValue == 0) {
    binaryValue.push(inputValue);
  }

  while (inputValue >= 1) {
    modulus = inputValue;

    modulus = modulus % 2;

    binaryValue.push(modulus);

    inputValue = Math.floor(inputValue / 2);
  }

  const reversedArr = binaryValue.toReversed();

  reversedArr.map((curElem) => {
    binaryResult = binaryResult + curElem;

    return binaryResult;
  });

  conOutput.value = binaryResult;

};


// click event 1

binaryBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  decToBinFunc();
});

const binToDecFunc = () => {
  inputValue = Math.floor(conInput.value);

  if (inputValue == "") {
    alert("Please Enter A Code !!");
  }

  binaryBtn.style.backgroundColor = "";

  decimalBtn.style.backgroundColor = "#4325d2";

  const arrBitCode = [];

  let store = 1;

  for (let i = 0; i < 20; i++) {
    arrBitCode[0] = 1;

    store = store * 2;

    arrBitCode[i + 1] = store;
  }

  const newArrBin = inputValue.toString().split("");

  const newArrBinMapped = newArrBin.map((curElem) => {
    return Number(curElem);
  });

  const reversedArrBin = newArrBinMapped.toReversed();

  let decimalResult = 0;

  for (let i = 0; i < arrBitCode.length; i++) {
    if (reversedArrBin[i] == 1) {
      decimalResult = decimalResult + arrBitCode[i];
    }
  }

  conOutput.value = decimalResult;
};

// click event 2

decimalBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  binToDecFunc();
});



const resetFunc = () => {
  conInput.value = "";

  conOutput.value = 0;

  decimalBtn.style.backgroundColor = "";

  binaryBtn.style.backgroundColor = "";
};

// click event 3

resetBtn.addEventListener("click", () => {
  resetFunc();
});
