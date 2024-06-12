<script setup>
import { defineEmits, onMounted, onBeforeUnmount, ref } from 'vue';
import { getCachedCurrentUser, signOut } from '../lib/githubClient.js';
import bus from '../lib/bus.js';
import CustomMinMaxSlider from "./CustomMinMaxSlider.vue";
const emit = defineEmits(['close','search']);

function close() {
  emit('close');
}

function search(minW,maxW, minR, maxR) {
  emit('search', {minWeight:minW, maxWeight:maxW, minRating: minR, maxRating: maxR});
}

const sliderMin = ref(1);
const sliderMax = ref(5);
const sliderMinR = ref(0);
const sliderMaxR = ref(10);


</script>
<template>
  <div>
    <div class='row'>
      <h2>Adv Search</h2>
      <!-- Icon copyright (c) 2013-2017 Cole Bemis: https://github.com/feathericons/feather/blob/master/LICENSE -->
      <a href='#' @click.prevent='close' class='close-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-x-circle">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </a>
    </div>
    <div class="container">
      <!-- <p>
        Each dot is a boardgame. Two dots within the same cluster are
        connected if multiple users frequently gave review to
        both games. The size of the dot indicates the number of review the
        game has received, the shape indicate the complexity and the color indicate the user's ratings
      </p> -->
      <div class="slider-cont">
        <h3>Game complexity: {{ sliderMin }} - {{ sliderMax }}</h3>
        <CustomMinMaxSlider :min="1" :max="5" :step="0.1" v-model:min-value="sliderMin" v-model:max-value="sliderMax" />
      </div>
      <div class="slider-cont">
        <h3>Game rating: {{ sliderMinR }} - {{ sliderMaxR }}</h3>
        <CustomMinMaxSlider :min="0" :max="10" :step="0.1" v-model:min-value="sliderMinR" v-model:max-value="sliderMaxR" />
      </div>
      <div class="actions row">
        <a href="#" @click.prevent="search(sliderMin, sliderMax, sliderMinR, sliderMaxR)">Search</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* basic positioning */
.legend {
  list-style: none;
}

.legend li {
  float: left;
  margin-right: 10px;
}

.legend span {
  border: 1px solid #ccc;
  float: left;
  width: 12px;
  height: 12px;
  margin: 2px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row h2 {
  margin: 8px 8px 0 8px;
  flex: 1;
}

.map-image {
  width: 64px;
  float: left;
}

.close-btn {
  align-self: stretch;
  align-items: center;
  display: flex;
  padding: 0 8px;
}

.container {
  padding: 8px;
  flex: 1;
  overflow-y: auto;
}

h4 {
  margin: 0;
  font-weight: normal;
  text-align: right;
}

.byline {
  margin: 0 8px 8px;
  font-size: 12px;
}

.user-info {
  margin: 8px;
}

p {
  margin: 0 0 8px 0;
  line-height: 1.5em;
}

b {
  font-weight: bold;
}

input[type='text'] {
  height: 9%;
  width: 100%;
  padding-right: 48px;
  padding-left: 10px;
  font-size: 18px;
  border: 0;
  border-radius: 0;
  background: var(--color-background-soft);
  color: var(--color-text);
}
.actions {
  border-top: 1px solid var(--color-border);
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 32px;
  align-items: stretch;
}
.actions a {
  align-items: center;
  display: flex;
  background: var(--color-background-mute);
  padding: 0 8px;
  flex: 1;
  justify-content: center;
}
</style>