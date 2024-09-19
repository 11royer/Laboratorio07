(() => {

  /* APLICA DRY */
  //EX - 1
  function calculateOperation(a: number, b: number, c: number): number {
    const sumResult = a + b;
    const multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  const result1 = calculateOperation(2, 3, 4); // Usa valores de ejemplo
  console.log(result1);

  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // EX - 3
  // No es necesario aumentar código en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

})();