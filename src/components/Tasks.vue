<template>
  <div>
    <b-container class="p-5">
      <h2 class="mb-4">Your Tasks</h2>

      <b-list-group>
        <task
          v-for="(task, index) in getTasks"
          :key="index"
          :task="task"
        ></task>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import task from "../components/Task.vue";

export default {
  components: { task },
  computed: {
    getTasks() {
      return this.$store.getters.getAllTasks;
    },
  },
};
</script>
