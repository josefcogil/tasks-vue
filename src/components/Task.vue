<template>
  <div>
    <div v-if="task.completed">
      <div class="row mb-1">
        <div class="col-md-11" @click="complete(task)">
          <b-list-group-item class="completed" variant="dark">{{
            task.title
          }}</b-list-group-item>
        </div>
        <div class="col-md-1">
          <b-button @click="remove(task)" variant="danger">Remove</b-button>
        </div>
      </div>
    </div>
    <div v-if="!task.completed">
      <div class="row mb-1">
        <div class="col-md-11" @click="complete(task)">
          <b-list-group-item variant="light">{{
            task.title
          }}</b-list-group-item>
        </div>
        <div class="col-md-1">
          <b-button @click="remove(task)" variant="danger">Remove</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  props: ["task"],
  methods: {
    remove(task) {
      swal({
        title: "!Warning!",
        text: "Are you sure?",
        icon: "warning",
        dangerMode: true,
        buttons: true,
      }).then((remove) => {
        if (remove) {
          this.$store.commit("REMOVE_TASK", task);

          swal({
            title: "Done!",
            text: "Task removed",
            icon: "success",
          });
        }

        return;
      });
    },
    complete(task) {
      this.$store.commit("CHANGE_TASK_STATUS", task);
    },
  },
};
</script>

<style lang="css" scoped>
.completed {
  text-decoration: line-through;
}
</style>
