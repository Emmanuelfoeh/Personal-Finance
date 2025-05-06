<script setup lang="ts">
import { ref } from 'vue';
// import BudgetCategoryList from './BudgetCategoryList.vue';
import { BudgetCategory } from '../types/budget';
import BudgetChart from './BudgetChart.vue';

const totalAmount = ref(338);
const limit = ref(975);
const categories = ref<BudgetCategory[]>([
  { 
    name: 'Entertainment', 
    amount: 50, 
    color: '#2A9D8F'
  },
  { 
    name: 'Bills', 
    amount: 750, 
    color: '#264653'
  },
  { 
    name: 'Dining Out', 
    amount: 75, 
    color: '#E9C46A'
  },
  { 
    name: 'Personal Care', 
    amount: 100, 
    color: '#F4A261'
  }
]);
</script>

<template>
  <div>
    <div>
      <BudgetChart
        :totalAmount="totalAmount" 
        :limit="limit" 
        :categories="categories" 
      />
      <!-- <BudgetCategoryList :categories="categories" /> -->
    </div>
  </div>
</template>

<style scoped>
.budget-dashboard {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.budget-dashboard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.budget-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

@media (max-width: 480px) {
  .budget-dashboard {
    max-width: 100%;
  }
  
  .budget-content {
    padding: 15px;
  }
}
</style>