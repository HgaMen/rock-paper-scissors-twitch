import { ref } from 'vue';
import { getRandomIntInclusive } from '@/helpers/randomjs.js'; // La @ nos dirige a src no importa donde estemos.
import JSConfetti from 'js-confetti';
const jsConfetti = new JSConfetti();

const userOption = ref('');
const botOption = ref('');
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
    botOption.value = options[getRandomIntInclusive(0, 2)];

    // Opción 1
    const res = caseopcion[opcion][botOption.value];

    switch (res) {
      case 'won':
        totalwon.value++;
        jsConfetti.addConfetti();
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

  const resetGame = () => {
    userOption.value = '';
    botOption.value = '';
    result.value = '';
  };

  return {
    userOption,
    botOption,
    result,
    totalwon,
    totalost,
    totaltied,
    startGame,
    resetGame,
  };
};
