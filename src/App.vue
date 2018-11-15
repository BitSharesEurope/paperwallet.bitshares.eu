<template>
    <div class="container-fluid">
        <PaperWallet />
    </div>
</template>

<script>
import PaperWallet from './components/PaperWallet.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    PaperWallet
  }
}
</script>

<style>
</style>
