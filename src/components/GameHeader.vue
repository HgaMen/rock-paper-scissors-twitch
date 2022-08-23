<script setup>
import { useGame } from '@/composables/useGame.js';

const { userOption, BotOption, result, totalwon, totalost, totaltied } =
  useGame();
</script>

<template>
  <h1 class="text-center mt-6">Rock Paper Scissors</h1>
  <h2>userOption: {{ userOption }}</h2>
  <h2>BotOption: {{ BotOption }}</h2>
  <h2>Result: {{ result }}</h2>
  <h2>Total won: {{ totalwon }}</h2>
  <h2>Total lost: {{ totalost }}</h2>
  <h2>Total tied: {{ totaltied }}</h2>
</template>
