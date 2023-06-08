import { guardarGastos, mostrarTotal } from './metodos.js';
import inquirer from 'inquirer';
import { promptGastos } from './promptSpent.js';

const run = async () => {
  const gasto = await promptGastos();

  const nuevoGasto = [...(await mostrarTotal('./gastos.json')), gasto];

  const promptCorriendo = true;

  while (promptCorriendo) {
    const opciones = await inquirer.prompt([
      {
        type: 'list',
        name: 'opciones',
        message: 'Elige una opcion',
        choices: ['Agregar gasto', 'Ver gastos', 'Salir'],
      },
    ]);

    switch (opciones.opciones) {
      case 'Agregar gasto':
        await guardarGastos('./gastos.json', nuevoGasto);
        break;
      case 'Ver gastos':
        await mostrarTotal('./gastos.json');
        break;
      case 'Salir':
        process.exit();
      default:
        break;
    }
  }
};

run();
