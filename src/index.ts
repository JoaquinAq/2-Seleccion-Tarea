import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>2-Selección</h1>
<div>
<br> Ejercicios propuestos del apartado "2-Selección"
<br> A- Par/Impar A
<br> B- Aumento de sueldo
</div>`;

//---Funciones---

function parImpar(): void {
  console.clear();

  let num1: number | null = Number(prompt(`Ingrese un número`));

  if (num1 === 0) {
    console.log(`Ingresó el número 0 (cero)`);
  } else if (num1 % 2 === 0) {
    console.log(`El número ${num1} es par`);
  } else {
    console.log(`El número ${num1} es impar`);
  }
  console.log("---End of algorithm---");
}

function aumentoDeSueldo(): void {
  console.clear();

  let salario: number | null = Number(prompt(`Ingrese su salario actual`));

  switch (true) {
    case salario <= 15000:
      let aumento: number = salario * 0.2;
      let salarioFinal: number = salario + aumento;
      let msj1: string = `Salario base: $${salario} \n Aumento (20%): $${aumento} \n Salario final: $${salarioFinal}`;
      console.log(msj1);
      break;

    case salario > 15000 && salario <= 20000:
      let aumento: number = salario * 0.1;
      let salarioFinal = salario + aumento;
      let msj: string = `Salario base: $${salario} \n Aumento (10%): $${aumento} \n Salario final: $${salarioFinal}`;
      console.log(msj);
      break;

    case salario > 20000 && salario <= 25000:
      let aumento: number = salario * 0.05;
      let salarioFinal = salario + aumento;
      let msj: string = `Salario base: $${salario} \n Aumento (5%): $${aumento} \n Salario final: $${salarioFinal}`;
      console.log(msj);
      break;

    case salario > 25000:
      let msj: string = `A los salarios base mayores a $25.000 no le corresponde aumento`;
      console.log(msj);
      break;
    default:
      console.log("Ingrese salario mayor a 0 (cero)");
  }
}

//---Ejecución---

let MSJ: string = `Elija opción \n A-Par/Impar \n B-Aumento de sueldo`;
let option: string | null = String(prompt(MSJ));

switch (option.toUpperCase()) {
  case `A`:
    parImpar();
    break;

  case `B`:
    aumentoDeSueldo();
    break;
}
