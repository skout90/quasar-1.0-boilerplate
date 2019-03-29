<template>
  <div class="q-pa-lg">
    <q-btn to="/"
           color="secondary"
           style="width:200px;">Home</q-btn>

    <LaboratoryResultContainer />
    <LaboratoryNewsContainer />
  </div>
</template>

<script>
import LaboratoryNewsContainer from 'src/containers/laboratory/LaboratoryNewsContainer'
import LaboratoryResultContainer from 'src/containers/laboratory/LaboratoryResultContainer'

export default {
  name: 'Laboratory',
  components: {
    LaboratoryNewsContainer,
    LaboratoryResultContainer
  }
}
</script>

<style scoped>

</style>
