<template>
  <div class="mt-10 text-center">
    <p class="text-3xl">Swear Words</p>
    <p class="indent-8">
      Below is a graph showing all the swear words in Ed Sheeran's lyrics. What a potty mouth!
    </p>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="swearChartData"
    />
    <p class="indent-8 my-4">
      Is there any trend to Ed's usage of swear words? Perhaps he has redeemed himself with a negative trend.
    </p>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="trendChartData"
    />
    <p class="indent-8 mt-4">
      Unfortunately, it seems that Ed's potty mouth is only getting worse. (Note: the sums for the two graphs are not equal due to swear words that are in songs that are not in the albums)
    </p>
  </div>
</template>
  
<script setup lang="ts">
import swears_json from "~/assets/data/swears.json"

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const swears : { [ key:string ] : number } = swears_json 

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const swearChartData = {
  labels: Object.keys(swears),
  datasets: [{ 
    label: 'Occurrences',
    data: Object.values(swears),
    backgroundColor: [
      "rgba(255, 0, 0, 0.6)",
    ],
  }],
}
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

const trendChartData = {
  labels: ['Plus', 'Multiply', 'Divide', 'Equals', 'Subtract'],
  datasets: [{ 
    label: 'Occurrences',
    data: [3, 10, 1, 5, 15],
    backgroundColor: [
      "#d67a3e",
      "#1dcb57", 
      "#65c9e6",
      "#cc2c34",
      "#f4d811"
    ],
  }],
}
</script>