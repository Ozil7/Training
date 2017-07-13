const input = document.getElementById("submitButton")
input.addEventListener("click", function(event) {
  event.preventDefault()
});
input.addEventListener("click", takeInput);

function calculateSum(n)
{
  const number = n;
  const numberOfDigits = number.length
  let i = 0
  let sum = 0
  let subNumber
  let subLength
  while (i < numberOfDigits)
  {
    subNumber = ""
    subLength = Number(number[i])
    let j = i + 1
    while (j <= (i + subLength) && j < numberOfDigits)
    {
      subNumber = subNumber + number[j]
      j += 1
    }
    sum = sum + Number(subNumber)
    if (j >= numberOfDigits)
      break;
    i = j

  }
  if (sum % 2 === 0)
    document.getElementById("display").innerHTML = "Even";
  else
    document.getElementById("display").innerHTML = "Odd"; 	
}

function takeInput()
{
  const number = document.getElementById("inputNumber").value
  if (number.length === 1 || number === "")
    alert("Please enter a valid number");
  else
    calculateSum(number)
}