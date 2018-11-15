<template>
    <div>
        <h2>BitShares Permission Keys &nbsp;
            <small>{{accountname}}</small>
        </h2>
        <div v-if="print_password" class="d-none d-print-block">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3 class="panel-title">Plaintext Password</h3>
                </div>
                <div class="panel-body" v-if="valid">
                    <div class="key">{{password}}</div>
                </div>
            </div>
        </div>
        <div class="d-print-none">
            <form>
                <div class="form-group">
                    <label>
                        <fa icon="user" />
                        Account Name
                    </label>
                    <input 
                               v-model="accountname"
                               @input="form_updated"
                               class="form-control" type=text name="name" />
                </div>
                <div class="form-group">
                    <label>
                        <fa icon="key" />
                        Password
                        <fa :icon="passwordIcon" @click.prevent="toggleVisibility()"/>
                    </label>
                    <input
                        v-model="password"
                        @input="form_updated"
                        class="form-control"
                        :type="passwordFieldType" />
                </div>
                <div class="form-group">
                    <label>
                        <fa icon="key" />
                        Confirm Password
                    </label>
                    <input
                        v-model="password_verify"
                        @input="form_updated"
                        class="form-control"
                        type=password />
                </div>
                <div>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li :key="error" v-for="error in errors">{{ error }}</li>
                    </ul>
                    </p>
                </div>
            </form>
        </div>
        <div v-if="loginKey">
            <div class="btn-group d-print-none">
                <button class="btn btn-secondary"
                        @click.prevent="print" type="button">
                    <fa icon="print" /> Print</button>
                <button class="btn btn-warning"
                        @click.prevent="printPassword" type="button">
                    <fa icon="print" /> Print <strong>with <fa icon="key" /></strong></button>
                <button class="btn btn-alert"
                        @click.prevent="registerAccount" type="button">
                    <fa :icon="registerIcon" v-bind:class="{'fa-spin': loading_register}" /> Register Account!</button>

                    <b-modal ref="modal_account_created" title="Account Created Successfully">
                    <p class="my-4">Hello from modal!</p>
                    </b-modal>
                    <b-modal ref="modal_account_failed" title="Account Creation Failed">
                    <p class="my-4">Hello from modal!</p>
                    </b-modal>
            </div>

            <hr />

            <div>
                <PaperWalletKey type="owner" :loginKey="loginKey"/>
                <PaperWalletKey type="active" :loginKey="loginKey" />
                <PaperWalletKey type="memo" :loginKey="loginKey" />
            </div>
        </div>
    </div>
</template>

<script>
import PaperWalletKey from './PaperWalletKey.vue'
import {Login} from "bitsharesjs"

export default {
    name: 'PaperWallet',
    components: {
        PaperWalletKey
    },
    data () {
        return {
            accountname: "test-faucet-",
            password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            password_verify: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            loginKey: null,
            errors: [],
            print_password: false,
            valid: false,
            passwordFieldType: "password",
            passwordIcon: "eye",
            loading_register: false,
            account_registered: false,
        }
    },
    computed: {
        registerIcon() {
            return this.loading_register ? "spinner" : 'arrow-circle-right';
        }
    },
    methods: {
        toggleVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ?  "text": "password";
            this.passwordIcon = this.passwordFieldType === "password" ? "eye" : "eye-slash"
        },
        printPassword() {
            this.print_password = true
            this.printDialog()
        },
        print() {
            this.print_password = false
            this.printDialog()
        },
        printDialog() {
            window.print();
        },
        validate_form: function(e) {
            this.errors = [];
            if (!this.password || this.password.length < 16) {
                this.errors.push("Password is too short! Need at least 16 characters");
            }
            if (this.password != this.password_verify) {
                this.errors.push("Passwords don't match");
            }
            if (!this.accountname || this.accountname.length < 3) {
                this.errors.push('Account name required! Minimum length: 3');
            }
            e.preventDefault();
            if (this.errors.length == 0) {
                this.valid = true;
                return true;
            } else {
                this.valid = false;
                return false;
            }
        },
        form_updated: function (e) {
            if (this.validate_form(e)) {
                this.generateLoginKey();
            }
        },
        generateLoginKey () {
             this.loginKey = Login.generateKeys(
                 this.accountname,
                 this.password,
                 ["owner", "active", "memo"],
                 "BTS"
             );
        },
        async faucetRequest(query) {
            let url = "https://faucet.bitshares.eu/paperwallet/api/v1/accounts";
            let response = await fetch(
                url, {
                method: "POST",
                headers: {"Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify(query)
            })
            return await response.json()
        },
        async registerAccount() {
            this.loading_register = true
            let query = {
                account: {
                    name: this.accountname,
                    active_key: this.loginKey.pubKeys.active,
                    owner_key: this.loginKey.pubKeys.active,
                    memo_key: this.loginKey.pubKeys.active,
                }
            }
            this.faucetRequest(query)
            .catch(reason => this.errors.push(reason))
            .then(response => {
                if (response &&
                    response.account &&
                    response.account.name == query.account.name &&
                    response.account.active_key == query.account.active_key &&
                    response.account.owner_key == query.account.owner_key &&
                    response.account.memo_key == query.account.memo_key
                ) {
                    this.account_registered = true;
                    this.loading_register = false
                    this.$refs.modal_account_created.show()
                } else {
                    this.account_registered = false;
                    this.loading_register = false
                    this.$refs.modal_account_failed.show()
                }
                    
            });
        }
    }
}
</script>

<style>
.headline {
    background: #eee;
}
tr > td {
    padding-top: 0;
    padding-bottom: 0;
}
</style>
