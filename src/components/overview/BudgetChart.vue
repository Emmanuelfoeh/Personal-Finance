<template>
  <div class="flex justify-center relative">
    <Doughnut
      v-if="isChartReady"
      :data="chartData"
      :options="chartOptions"
      height="200"
      width="200"
    />
    <div class="chart-center-content">
      <div class="chart-amount">${{ totalAmount }}</div>
      <div class="chart-limit">of ${{ limit }} limit</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { BudgetCategory } from "@/types/budget";

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps<{
  totalAmount: number;
  limit: number;
  categories: BudgetCategory[];
}>();

const chartData = computed(() => {
  return {
    labels: props.categories.map(cat => cat.name),
    datasets: [
      {
        // Outer ring (darker color)
        data: props.categories.map(cat => cat.amount),
        backgroundColor: props.categories.map(cat => cat.color),
        borderColor: props.categories.map(() => "#FFFFFF"),
        borderWidth: 2,
        borderRadius: 5,
        // spacing: 1,
        weight: 1
      },
        {
          // Inner ring (lighter color)
          data: props.categories.map(cat => cat.amount),
        //   backgroundColor: props.categories.map(cat => getLighterColor(cat.color)),
          borderColor: props.categories.map(() => '#FFFFFF'),
          borderWidth: 2,
          borderRadius: 5,
        //   spacing: 1,
          weight: 0.8,
        }
    ]
  };
});

const chartOptions = ref({
  responsive: true,
  cutout: "75%",
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (context: any) {
          if (context.datasetIndex === 1) return null;
          const label = context.label || "";
          const value = context.raw || 0;
          return `${label}: $${value.toFixed(2)}`;
        }
      }
    }
  },
  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 1000,
    easing: "easeOutQuart"
  },
  maintainAspectRatio: false,
  radius: "100%"
});

const isChartReady = ref(false);

onMounted(() => {
  setTimeout(() => {
    isChartReady.value = true;
  }, 300);
});
</script>

<style scoped>
.chart-center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: fadeIn 1s ease-out;
}
.chart-amount {
  font-size: 28px;
  font-weight: 700;
  /* color: var(--text-primary); */
  margin-bottom: 4px;
}

.chart-limit {
  font-size: 14px;
  /* color: var(--text-secondary); */
  font-weight: 400;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
