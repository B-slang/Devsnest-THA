//yaha se value


const getvalues = () => {
  num1 = document.getElementById("num1");
  num2 = document.getElementById("num2");
  resultObject = {
    "num1": num1,
    "num2": num2,
  };
  return resultObject;
};
//yaha se pta nai hora ki nai

const sResult = (result) => {
  ans = document.getElementById("result");
  ans.innerText = result;
};

const addB = document.getElementById("additionB");
const plusWala = () => {
  numValues = getvalues();
  // console.log(num1, num2);
  sum = parseInt(numValues.num1.value) + parseInt(numValues.num2.value);

  sResult(sum);
};
const additon = addB.addEventListener("click", plusWala);
// console.log(additionB);

//substraction
const minus = document.getElementById("subtractB");

const ghatao = () => {
  numValues = getvalues();
  diff = parseInt(numValues.num1.value) - parseInt(numValues.num2.value);
  sResult(diff);
};
const minu = minus.addEventListener("click", ghatao);

//multiply

const multip = document.getElementById("multiB");

const badhao = () => {
  numValues = getvalues();
  multi = parseInt(numValues.num1.value) * parseInt(numValues.num2.value);
  sResult(multi);
};
const mul = multip.addEventListener("click", badhao);

//divide

const divied = document.getElementById("divideB");

const chaato = () => {
  numValues = getvalues();
  divide = parseInt(numValues.num1.value) / parseInt(numValues.num2.value);
  sResult(divide);
};
const div = divied.addEventListener("click", chaato);
