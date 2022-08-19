<script setup>
import { ref } from 'vue';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const userOption = ref('');
const BotOption = ref('');
const options = ['paper', 'rock', 'scissors'];
const result = ref('');
const totalwon = ref(0);
const totalost = ref(0);
const totaltied = ref(0);

// Opción 2
// const objectOptions = {
//   rockscissors: true,
//   paperrock: true,
//   scissorspaper: true,
// };

// Opción 1
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

  // Opción 2
  // const res = objectOptions[userOption.value + BotOption.value];
  // if (res) {
  //   totalwon.value++;
  //   return (result.value = 'winner');
  // }

  // if (userOption.value === BotOption.value) {
  //   totaltied.value++;
  //   return (result.value = 'tie');
  // }

  // totalost.value++;
  // return (result.value = ' You lose');

  // Opción 3
  // if (userOption.value === BotOption.value) {
  //   totaltied.value++;
  //   return (result.value = 'tie');
  // }

  // if (
  //   (userOption.value === 'rock' && BotOption.value === 'scissors') ||
  //   (userOption.value === 'paper' && BotOption.value === 'rock') ||
  //   (userOption.value === 'scissors' && BotOption.value === 'paper')
  // ) {
  //   totalwon.value++;
  //   return (result.value = 'winner');
  // }

  // totalost.value++;
  // return (result.value = ' You lose');

  // opción 4
  // switch (userOption.value + BotOption.value) {
  //   case 'rockscissors':
  //   case 'paperrock':
  //   case 'scissorspaper':
  //     totalwon.value++;
  //     result.value = 'winner';
  //     break;
  //   case 'rockrock':
  //   case 'paperpaper':
  //   case 'scissorsscissors':
  //     totaltied.value++;
  //     result.value = 'tie';
  //     break;
  //   default:
  //     totalost.value++;
  //     result.value = 'You lose';
  // }

  // if (userOption.value === BotOption.value) {
  //   totaltied.value++;
  //   return (result.value = 'tie');
  // }

  // opción 5
  // if (userOption.value === 'rock' && BotOption.value === 'scissors') {
  //   totalwon.value++;
  //   return (result.value = 'winner');
  // }

  // if (userOption.value === 'paper' && BotOption.value === 'rock') {
  //   totalwon.value++;
  //   return (result.value = 'winner');
  // }

  // if (userOption.value === 'scissors' && BotOption.value === 'paper') {
  //   totalwon.value++;
  //   return (result.value = 'winner');
  // }

  // totalost.value++;
  // return (result.value = ' You lose');
};
</script>

<template>
  <main class="text-center">
    <h1 class="text-center mt-6">Rock Paper Scissors</h1>
    <h2>userOption: {{ userOption }}</h2>
    <h2>BotOption: {{ BotOption }}</h2>
    <h2>Result: {{ result }}</h2>
    <h2>Total won: {{ totalwon }}</h2>
    <h2>Total lost: {{ totalost }}</h2>
    <h2>Total tied: {{ totaltied }}</h2>
    <button
      class="bg-blue-800 text-white rounded-lg px-5 py-3 mr-2"
      @click="startGame('rock')"
    >
      Rock
    </button>
    <button
      class="bg-blue-800 text-white rounded-lg px-5 py-3 mr-2"
      @click="startGame('paper')"
    >
      Paper
    </button>
    <button
      class="bg-blue-800 text-white rounded-lg px-5 py-3 mr-2"
      @click="startGame('scissors')"
    >
      Scissors
    </button>
  </main>
</template>
