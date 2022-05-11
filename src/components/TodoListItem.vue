<template>
  <div>
    <span>
      {{ todo.title }}
    </span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: {
      type: Object,
    },
  },

  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todo);
      console.log(this);
    },
  },
};
</script>

<style></style>
