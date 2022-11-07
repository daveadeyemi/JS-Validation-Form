        function myFunction()  {
            let david = document.getElementById("number").value;

            //Get the value of the input field with id="number"//

            let text;
            if (isNaN(david) || david<1 || david>20) {
                text = "That input is invalid, Bro!";
            }

            else {
                text = "Input OK!";
            }
            document.getElementById("demo").innerHTML = text;
        }