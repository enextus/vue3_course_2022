<template>
  <div class="post">
    <div>
      <div><strong>Post name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
        style="align-self: flex-end"
        @click="$emit('remove', post)">
        Delete post
      </my-button>
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
  },
  methods: {
    deletePostChild() {
      console.log();
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
