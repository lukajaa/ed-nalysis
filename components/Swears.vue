<template>
  <div class="mt-10 text-center">
    <p class="text-3xl">Most Swear Words</p>
    <p class="indent-8">
      Below is a graph showing all the swear words in Ed Sheeran's lyrics. What a potty mouth!
    </p>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>
  
<script setup lang="ts">
import swears_json from "~/assets/data/swears.json"

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const swears : { [ key:string ] : number } = swears_json 

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: Object.keys(swears),
  datasets: [{ 
    label: 'Occurrences',
    data: Object.values(swears),
    backgroundColor: [
      "rgba(255, 99, 132, 0.8)",
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