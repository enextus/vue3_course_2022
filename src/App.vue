<template>
  <div class="app">
    <post-form
      @create="createPostParent"
    />
    <post-list
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'Description 1'},
        {id: 2, title: 'JavaScript 2', body: 'Description 2'},
        {id: 3, title: 'JavaScript 3', body: 'Description 3'},
        {id: 4, title: 'JavaScript 4', body: 'Description 4'},
      ],

    }
  },
  methods: {
    createPostParent(post, parameter011, parameter012, parameter013) {
      // console.log(post);
      // console.log(parameter011);
      // console.log(parameter012);
      // console.log(parameter013);

      this.posts.push(post);

    },

    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },

    // function or @input="title = $event.target.value"
    inputBody(event) {
      // console.log(event)
      this.body = event.target.value;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;

}
form {
  display: flex;
  flex-direction: column;
}
</style>


// Single File Component
