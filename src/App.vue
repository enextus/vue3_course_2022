<template>
  <div class="app">

    // form
    <post-form/>

    // posts
    <post-list/>

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
        {id: 4, title: 'JavaScript 3', body: 'Description 4'},
      ],

      title: '',
      body: ''

    }
  },
  methods: {
    createPost() {
      let timer = 3;

      if (this.title && this.body) {
        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }
        this.posts.push(newPost);

        this.title = 'published';
        this.body = 'published';

        let interval = setInterval(() => {
          if (timer === 0) {
            this.title = '';
            this.body = '';
            clearInterval(interval)
          } else {
            timer--
            // console.log(timer)
          }
        }, 100)
      } else {
        this.title = '';
        this.body = '';
      }

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
