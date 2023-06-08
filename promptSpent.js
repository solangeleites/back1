import inquirer from 'inquirer';

const opciones = [
	{
		type: 'list',
		name: 'opciones',
		message: 'Elige una opcion',
		choices: ['Agregar gasto', 'Ver gastos', 'Salir'],
	},
];

const questions = [
	{
		type: 'input',
		name: 'Gasto',
		message: 'Ingresa gasto realizado',
	},
	{
		type: 'input',
		name: 'Monto',
		message: 'Ingresa monto gastado',
	},
];

export const promptGastos = async () => {
	return await inquirer.prompt(opciones).then(async (answers) => {
		if (answers.opciones === 'Agregar gasto') {
			return await inquirer.prompt(questions).then((answers) => {
				return answers;
			});
		} else if (answers.opciones === 'Salir') {
			return process.exit();
		} else {
		}
	});
};