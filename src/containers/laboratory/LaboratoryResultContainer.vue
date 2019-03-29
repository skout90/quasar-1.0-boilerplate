<template>
  <div>
    <div class="row items-center">
      <div class="col-4">
        <q-badge color="black">TEXT</q-badge>
      </div>
      <div class="col-8">
        <q-input v-model="textInput" filled/>
      </div>
      <div class="col-6">
        <q-badge color="red">{{textInput}}</q-badge>
      </div>
      <div class="col-6">
        <q-badge color="red">{{computedTextResult}}</q-badge>
      </div>
    </div>

    <div class="row q-mt-xl">
      <div class="col-4">
        <q-badge color="black">NUMBER</q-badge>
      </div>
      <div class="col-8">
        <q-input type="number" v-model="numberInput"/>
      </div>
      <div class="col-6">
        <q-badge color="red">{{numberInput}}</q-badge>
      </div>
      <div class="col-6">
        <q-badge color="red">{{computedNumberResult}}</q-badge>
      </div>
    </div>
  </div>
</template>

<script>
// watch, computed의 차이는 아래 포스팅 참조
// https://skout90.github.io/2018/01/24/Vue/1.1.Computed-VS-Watch/
export default {
  name: 'LaboratoryResultContainer',
  created () {
    setTimeout(() => { this.textInput = 'life is beautiful.' }, 3000)
    setTimeout(() => { this.numberInput = 2 }, 4000)
  },
  data () {
    return {
      textInput: '',
      numberInput: 0
    }
  },
  computed: {
    computedTextResult () {
      console.log('computed... textInput')
      return this.textInput + ' :)'
    },
    computedNumberResult () {
      console.log('computed... numberInput')
      return this.numberInput * 2
    }
  },
  watch: {
    textInput () {
      console.log('watch... textInput')
      return this.textInput
    },
    numberInput () {
      console.log('watch... numberInput')
      return this.numberInput
    }
  }
}
</script>

<style scoped>

</style>
