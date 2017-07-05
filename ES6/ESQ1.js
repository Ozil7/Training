    var input = document.getElementById("submitButton")
	input.addEventListener("click", function(event){
    event.preventDefault()
    });
    input.addEventListener("click", takeInput);

    function calculateSum(n)
    {
    	var number = n;
    	var numberOfDigits = number.length
    	// debugger;
    	var i = 0
    	var sum = 0
    	var subNumber
    	var subLength
    	while(i < numberOfDigits)
    	{
    		subNumber = ""
    		subLength = Number(number[i])
    		var j=i+1
    		while(j <= (i+subLength) && j < numberOfDigits)
    		{
    			subNumber = subNumber + number[j]
    			j += 1
    		}
    		sum = sum + Number(subNumber)
    		if(j >= numberOfDigits)
    			break;
    		i = j

    	}
    	document.getElementById("display").innerHTML = sum    	
    }

    function takeInput()
    {
    	var number = document.getElementById("inputNumber").value
    	if (number.length == 1 || number == "")
    		alert("Please enter a valid number");
    	else
    		calculateSum(number)
    }