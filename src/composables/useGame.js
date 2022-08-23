import { ref } from 'vue';
import { getRandomIntInclusive } from '@/helpers/randomjs.js'; // La @ nos dirige a src no importa donde estemos.

const userOption = ref('');
const BotOption = ref('');
const result = ref('');
const totalwon = ref(0);
const totalost = ref(0);
const totaltied = ref(0);

export const useGame = () => {
  // Opción 1
  const options = ['paper', 'rock', 'scissors'];
  const caseopcion = {
    rock: { rock: 'tie', scissors: 'won', paper: 'lose' },
    paper: { paper: 'tie', scissors: 'lose', rock: 'won' },
    scissors: { paper: 'won', scissors: 'tie', rock: 'lose' },
  };

  const startGame = (opcion) => {
    userOption.value = opcion;
    BotOption.value = options[getRandomIntInclusive(0, 2)];

    // Opción 1
    const res = caseopcion[opcion][BotOption.value];

    switch (res) {
      case 'won':
        totalwon.value++;
        break;
      case 'tie':
        totaltied.value++;
        break;
      case 'lose':
        totalost.value++;
        break;
    }
    result.value = res;
  };

  return {
    userOption,
    BotOption,
    result,
    totalwon,
    totalost,
    totaltied,
    startGame,
  };
};
