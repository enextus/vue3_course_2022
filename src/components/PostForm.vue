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

    <!-- :value="body"
         @input="post.body = $event.target.value"-->
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Description">

    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPostChild">
      Create post
    </my-button>

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
    createPostChild() {
      let timer = 2;
      this.post.id = Date.now();
      /*        const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
              }*/

      if (this.post.title && this.post.body || this.post.title) {
        // create is the name of the event and this.post are data for parent component App
        this.$emit('create', this.post, 'parameter011', 'parameter012', 'parameter013')
        this.post = {
          title: 'Published!',
          body: 'Published!'
        }

        let interval = setInterval(() => {
          if (timer === 0) {
            this.post.title = '';
            this.post.body = '';
            clearInterval(interval)
          } else {
            timer--
            // console.log(timer)
          }
        }, 100)
      } else {
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 5px;
}
</style>
