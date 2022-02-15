<template>
  <form @submit.prevent>

    <h4>Create post</h4>

    <!--    :value="title"-->
    <!--    @input="post.title = $event.target.value"-->
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Name">

    <!--    :value="body"
        @input="post.body = $event.target.value"-->
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Description">

    <button
      class="btn"
      @click="createPost"
    >Create post
    </button>

  </form>
</template>


<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      let timer = 3;

      if (this.title && this.body) {
        this.post.id = Date.now();
/*        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }*/
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
    }
  }
}
</script>

<style>
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
