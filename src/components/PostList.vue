<template>
  <div>
    <h3>User list</h3>
    <post-item
      v-for="post in posts"
      :post="post">
      <!--  <div><strong>Post name:</strong> {{ post.title }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>-->
    </post-item>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
</style>
