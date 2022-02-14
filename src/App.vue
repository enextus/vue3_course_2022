<template>
  <div class="app">

    <form @submit.prevent>

      <h4>Create post</h4>

      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Name">

      <input
        v-bind:value="body"
        @input="inputBody"
        class="input"
        type="text"
        placeholder="Description">

      <button
        class="btn"
        @click="createPost"
      >Create post
      </button>

    </form>

    <div class="post" v-for="post in posts">
      <div><strong>Post name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>

  </div>

</template>

<script>
export default {
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
      if (this.title && this.body) {
        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }
        this.posts.push(newPost);
      }

      this.title = '';
      this.body = '';
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

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 5px;

}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;

}


</style>


// Single File Component
