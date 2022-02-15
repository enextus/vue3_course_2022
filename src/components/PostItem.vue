<template>
  <div class="post">
    <div>
      <div><strong>Post name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
</style>
