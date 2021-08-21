<template>
  <div>
    <b-container class="p-5">
      <h2 class="mb-4">Deleted Tasks</h2>

      <b-list-group>
        <deletedTask
          v-for="(task, index) in getDeletedTasks"
          :key="index"
          :task="task"
        ></deletedTask>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import deletedTask from "../components/DeletedTask.vue";

export default {
  components: { deletedTask },
  computed: {
    getDeletedTasks() {
      return this.$store.getters.getDeletedTasks;
    },
  },
};
</script>
