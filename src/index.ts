// let sales = 1234567;
// let course = 'TypeScript';
// let is_published = true;
// let level;

// level = 123;
// level = 'abishek';

// // If function parameter type is not mentioned it takes any as type and shows error either make changes in the tsconfig file set type to document: any
// function render(document) {
//     console.log(document);
// }

// ARRAY type

// // Type number
// let numbers: [] = [1, 2, 3];
// // Intelisense
// numbers.forEach(n => n.)

// TUPLES type

// // Arrays with types for each element and with length pre-defined
// let user: [number, string] = [1, 'Abishek'];

// // But one of the flaw is we can use .push method so it will be altered
// user.push(1);
// console.log(user);

// ENUM type

// const small = 1;
// const medium = 2;
// const large =3;

// // PasalCase for Enum
// const enum Size {
// 	Small = 1,
// 	Medium,
// 	Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// FUNCTION type

// // We can set the types for the function parameter and for the return value has it is best practice
// function calculateTax(income: number, taxYear: number = 2022): number {
// 	// we can set the tsconfig to throw error when a prameter is used inside the function
// 	if (taxYear < 2022) {
// 		return income * 1.2;
// 	}
// 	return income * 1.3; // we can have the noImplicitReturns in tsconfig
// }

// console.log(calculateTax(40000, 2021));

// OBJECT type

// let employee: {
// 	readonly id: number;
// 	// name?: string
// 	name: string;
// 	retire: (date: Date) => void;
// } = {
// 	id: 1,
// 	name: 'Abishek',
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };

// // employee.name= 'Abishek'
// // employee.id= 0

// Type ALIASES

// // PasalCase for Aliases type
// type Employee = {
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// }

// let employee: Employee  = {
// 	id: 1,
// 	name: 'Abishek',
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };

// Union Types

// function kgToLbs(weight: number | string): number {
// 	// Narrowing
// 	if (typeof weight === 'number') return weight * 2.2;
// 	else return Number(weight) * 2.2;
// }

// console.log(kgToLbs('11').toFixed(2), kgToLbs(11));

// Intersection Types

// type Draggable = {
// 	drag: () => void;
// };

// type Resizable = {
// 	resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
// 	drag: () => {},
// 	resize: () => {},
// };

// Literal types

// // Literal (exact & specific)
// type Quantity = 50 | 100;
// let quantity: 50 | 100 = 100;

// type Metric = 'cm' | 'inch';

// Null type

// function greet(name: string | null | undefined) {
// 	if(name)
// 	console.log(name.toUpperCase());
// 	else
// 	console.log();
// }

// greet(undefined);

// Optional Chaining
type Customer = {
	birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined) console.log(customer.birthday);
