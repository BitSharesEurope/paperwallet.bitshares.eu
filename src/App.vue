<template>
    <div class="container">
        <div class="row" style="margin-top:15px">
            <div class="col-md-12 text-center">
                <img src="/logo.png" width="128px" />
            </div>
            <div class="col-md-12" style="margin-top:15px">
                <PaperWallet />
            </div>
        </div>
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
