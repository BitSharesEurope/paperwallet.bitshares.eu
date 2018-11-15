<template>
    <div>
        <table class="table">
            <tbody>
                <tr class="headline">
                    <th class="text-center">Public</th>
                    <th class="text-center">{{type | capitalize}} Key</th>
                    <th class="text-center">Private</th>
                </tr>
                <tr>
                    <td>
                     <img v-if="this.qr_pub" v-bind:src="this.qr_pub" />
                    </td>
                    <td>
                        <label class="pkey-label">Public key</label>
                        <p><span class="key">{{pub}}</span></p>
                        <label>Private key</label>
                        <p><span class="pkey">{{wif}}</span></p>
                    </td>
                    <td>
                     <img v-if="this.qr_wif" v-bind:src="this.qr_wif" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
    name: 'PaperWalletKey',
    props: {
        type: String,
        loginKey: Object,
    },
    data() {
        return {
            qr_pub: "",
            qr_wif: "",
        }
    },
    async mounted() {
      try {
        this.qr_pub = await QRCode.toDataURL(this.pub, {errorCorrectionLevel: 'H'})
        this.qr_wif = await QRCode.toDataURL(this.wif, {errorCorrectionLevel: 'H'})
      } catch (err) {
        console.error(err)
      }
    },
    computed: {
        pub() {
            return this.loginKey["pubKeys"][this.type]
        },
        wif() {
            return this.loginKey["privKeys"][this.type].toWif()
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style>
.pkey-label {
    padding-top: 40px;
}
.key {
    font-family: monospace;
    font-size: 9pt;
    border: 1px solid #999;
    background: #eee;
    padding:.2em;
}
.pkey {
    font-family: monospace;
    font-size: 9pt;
    border: 1px solid #999;
    background: #eee;
    padding:.2em;
}
</style>
