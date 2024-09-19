(() => {

  // Lista de emails de usuarios de Meta-X
  const userEmails: Array<string> = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com",
  ];

  console.log(userEmails);

  // Lista de compras de un carrito
  const shoppingCart: Array<{ product: string }> = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];

  console.log(shoppingCart);

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree = (num: number): number => {
    return num + 3;
  };

  console.log(addThree(2));

  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(word: string): string {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
  };

  console.log(capitalize("capricorn"));

  // Variable que alerta en caso de que ocurra un evento
  let isEventTriggered: boolean = false;

  if (isEventTriggered) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let isUserAuthenticated: boolean = true;

  if (isUserAuthenticated) console.log('welcome');

  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);

  //variable que almacena el valor de P
  const piValue: number = 3.141592654;

  console.log(piValue);

  //variabel que controla si un archivo es modificable 
  let isFileEditable: boolean = false;

  if (isFileEditable) console.log('edit this file?');

  //variable para almacenar el valor de e
  const eulerNumber: number = 2.718281828;

  console.log(eulerNumber);
  
})();
