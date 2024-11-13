const extractVariables = (text) => {
    // Define the regular expression to match variable patterns within {{ }}
    const variableRegex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;
    const foundVariables = [];
    let match;
   
    // Use the while loop to find each match with the regex
    while ((match = variableRegex.exec(text)) !== null) {
      console.log(match[1]); // Log each variable found
      foundVariables.push(match[1]); // Push the variable name (match[1]) to the array
    }
   
    setVariables(foundVariables); // Assuming setVariables is defined elsewhere to handle the array
  };
   
  // Example usage:
  const text = "This is a {{abhishek}} and this is {{variable2}}.";
  extractVariables(text); // Expected output: ["variable", "variable2"]