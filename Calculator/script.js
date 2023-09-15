// Get the input area element
var inputArea = document.getElementById('inputArea');

// Add event listeners to all buttons
var buttons = document.querySelectorAll('.button, .operator, .equal');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var value = this.value;

    // Clear the display
    if (value === 'AC') {
      inputArea.value = '';
    }
    // Delete the last character
    else if (value === 'DE') {
      inputArea.value = inputArea.value.slice(0, -1);
    }
    else if (value === 'sin') {
        inputArea.value = Math.sin(inputArea.value);
      }
      else if (value === 'cos') {
        inputArea.value = Math.cos(inputArea.value);
      }
      else if (value === 'tan') {
        inputArea.value = Math.tan(inputArea.value);
      }
      else if (value === 'log') {
        inputArea.value = Math.log10(inputArea.value);
      }
      else if (value === 'ln') {
        inputArea.value = Math.log(inputArea.value);
      }
      else if (value === 'π') {
        inputArea.value = (3.14159265359);
      }
      else if (value === '√') {
        inputArea.value = Math.sqrt(inputArea.value);
      }

      else if (value === 'x^2') {
        inputArea.value = Math.pow(inputArea.value,2);
      }
      else if(value==='x!')
    {
          var i, num, f;
          f=1
          num=inputArea.value;
          for(i=1; i<=num; i++)
          {
              f=f*i;
          }
  
          i=i-1;
  
          inputArea.value=f;
      }
  
    // Calculate the result
    else if (value === '=') {
      try {
        
        var result = eval(inputArea.value);

        inputArea.value = Number.isInteger(result) ? result : result.toFixed(4);
      } catch (error) {
        inputArea.value = 'Error';
      }
    }
    // Append the clicked button value to the input
    else {
      inputArea.value += value;
    }
  });
});
function pow()
{
    screen.value=Math.pow(screen.value,2);
}


