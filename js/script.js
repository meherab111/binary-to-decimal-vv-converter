let binaryBtn = document.getElementById("binary-btn");

let decimalBtn = document.getElementById("decimal-btn");

let resetBtn = document.getElementById("reset-btn");

let conInput = document.getElementById("conv-input");

let conOutput = document.getElementById("conv-output");

let inputValue;

// Decimal To Binary Converting Functionality

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

// Binary Button Click

binaryBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  decToBinFunc();
});

// Binary To Decimal Converting Functionality

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

// Decimal Button Click

decimalBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  binToDecFunc();
});

// Reset Everything Functionality

const resetFunc = () => {
  conInput.value = "";

  conOutput.value = 0;

  decimalBtn.style.backgroundColor = "";

  binaryBtn.style.backgroundColor = "";
};

// Reset Button Click

resetBtn.addEventListener("click", () => {
  resetFunc();
});
