<template>
  <div>
    <div>
      <div class="row mb-1">
        <div class="col-md-9">
          <b-list-group-item variant="light">{{
            task.title
          }}</b-list-group-item>
        </div>
        <div class="col-md-2">
          <b-button @click="recover(task)" variant="success">Recover</b-button>
        </div>
        <div class="col-md-1">
          <b-button @click="remove(task)" variant="danger">Delete</b-button>
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
    recover(task) {
      this.$store.commit("RECOVER_TASK", task);

      swal({
        title: "Done!",
        text: "Task recovered",
        icon: "success",
      });
    },
    remove(task) {
      swal({
        title: "!Warning!",
        text: "Are you sure?",
        icon: "warning",
        dangerMode: true,
        buttons: true,
      }).then((remove) => {
        if (remove) {
          this.$store.commit("DELETE_TASK", task);

          swal({
            title: "Done!",
            text: "Task deleted",
            icon: "success",
          });
        }

        return;
      });
    },
  },
};
</script>