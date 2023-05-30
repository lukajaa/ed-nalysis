<template>
  <div class="mt-10 text-center">
    <p class="text-3xl">Most Common Colors</p>
    <p class="indent-8">
      Below is a graph showing all the color mentions in Ed Sheeran's lyrics. 
    </p>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
    <p class="text-base">Color names and codes from <a href="https://simple.wikipedia.org/wiki/List_of_colors" target="_blank" class="text-blue-600 hover:text-blue-800">Wikipedia</a></p>
  </div>
</template>

<script setup lang="ts">
import colors_json from "~/assets/data/colors.json"

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const colors : { [ key:string ] : number } = colors_json 

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: Object.keys(colors),
  datasets: [{ 
    label: 'Occurrences',
    data: Object.values(colors),
    backgroundColor: [
      'rgb(255, 0, 0)',
      'rgb(0, 0, 255)',
      'rgb(240, 240, 240)',
      'rgb(0, 0, 0)',
      'rgb(0, 255, 0)',
      'rgb(255, 215, 0)',
      'rgb(255, 0, 127)',
      'rgb(153, 51, 0)',
      'rgb(255, 255, 0)',
      'rgb(247, 231, 206)',
      'rgb(111, 78, 55)',
      'rgb(190, 190, 190)',
      'rgb(255, 247, 0)',
      'rgb(192, 192, 192)',
      'rgb(220, 20, 60)',
      'rgb(146, 0, 10)',
      'rgb(210, 180, 140)',
      'rgb(222, 93, 131)',
      'rgb(123, 63, 0)',
      'rgb(191, 255, 0)',
      'rgb(255, 0, 255)',
      'rgb(255, 102, 0)',
      'rgb(106, 13, 173)',
    ],
  }],
}
// label y axis as occurrences
const chartOptions= {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      text: "Occurrences",
      display: true,
      grid: {
        display: false,
      },
    },
  },

}
</script>