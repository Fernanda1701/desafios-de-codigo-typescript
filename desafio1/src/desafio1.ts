/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */

//Solução 1:

const employee: {code: number, name: string} = {
    code: 10,
    name: "John"
}


//Solução 2:
interface Employee {
    code: number,
    name: string
};

const john: Employee = {
    code: 10,
    name: "John"
}
