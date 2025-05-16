<template>
  <div class="flex justify-center">
    <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full" />
  </div>
</template>

<script setup lang="ts">
import Chart from "primevue/chart";
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref(null);

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [540, 325, 702, 453],
        backgroundColor: [
          documentStyle.getPropertyValue("--color-pf-yellow"),
          documentStyle.getPropertyValue("--color-pf-purple"),
          documentStyle.getPropertyValue("--color-pf-cyan")
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--color-yellow-400"),
          documentStyle.getPropertyValue("--color-orange-400"),
          documentStyle.getPropertyValue("--color-gray-400")
        ]
      }
    ]
  };
};

const setChartOptions = () => {
  return {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        display: false
      }
    }
  };
};
</script>
