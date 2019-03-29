<template>
  <div class="q-pa-lg">
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
    <div class="row q-mt-xl">
      <div v-for="(news, index) in getNews" class="col-12" :key="index">
        <q-badge color="blue">{{news.user}}</q-badge><br />
        {{news.title}}<br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Laboratory',
  created () {
    setTimeout(() => { this.textInput = 'life is beautiful.' }, 3000)

    this.selectNews()
  },
  data () {
    return {
      textInput: '',
      numberInput: 0,
      someNumber: 2
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
    },
    ...mapGetters({
      getNews: 'news/getNews'
    })
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
  },
  methods: {
    ...mapActions({
      selectNews: 'news/selectNews'
    })
  }
}
</script>

<style scoped>

</style>
