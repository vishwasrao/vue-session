<template>
  <div >
    <h1>{{ msg }}</h1>
    <form>
        <div class="form-group">
            <label >Message: </label>
            <input type="text" class="form-control" v-model="message">
        </div>
    </form>
    <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      msg: 'This is Computed property page',
      message: 'Hello'
    }
  },

  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>
