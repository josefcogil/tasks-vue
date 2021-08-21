<template>
  <div>
    <b-container class="p-5">
      <b-card>
        <b-card-text>
          <b-form inline class="p-5" @submit="addTask">
            <h2 class="mb-4">Create Task</h2>
            <b-form-input
              id="task-title"
              v-model="task_title"
              type="text"
              placeholder="Task title..."
            ></b-form-input>
            <b-button type="submit" variant="success" class="mt-3"
              >Add</b-button
            >
          </b-form>
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "Form",
  data() {
    return {
      task_title: "",
    };
  },
  methods: {
    addTask() {
      this.$store.commit("ADD_TASK", {
        title: this.task_title,
        completed: false,
      });
      swal({
        title: "Done!",
        text: "Task added",
        icon: "success",
      });
      this.task_title = "";
    },
  },
};
</script>
