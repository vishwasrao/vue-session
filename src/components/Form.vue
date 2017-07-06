<template>
  <div class="form">
    <h1>{{ msg }}</h1>
        <form>
        <div class="form-group">
            <label >Name: </label>
            <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
            <label >Email: </label>
            <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
            <label >Mobile:</label>
            <input type="number" class="form-control" v-model="mobile">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        </form> 
  </div>
</template>

<script>
import { required, email, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'form',
  data () {
    return {
      msg: 'This is Form Page',
      name: '',
      email: '',
      mobile: ''
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
