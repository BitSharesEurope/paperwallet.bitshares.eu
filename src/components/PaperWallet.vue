<template>
    <div ref="print">
        <h2>PaperWallet/ColdStorage &nbsp;
            <span class="small" v-if="accountname">(<tt>{{accountname}}</tt>)</span>
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
                        <span
                            :class="{'badge': true,
                                     'badge-success': !premium_account,
                                     'badge-danger': premium_account
                                     }">{{premium_account_text}}</span>
                    </label>
                    <input 
                        tabindex=1
                        autofocus
                        v-model="accountname"
                        @input.prevent="form_updated"
                        class="form-control" type=text name="name" />
                </div>
                <div class="form-group">
                    <label>
                        <fa icon="key" />
                        Password
                    </label>
                    <div class="input-group">
                        <input
                            tabindex=2
                            v-model="password"
                            @input.prevent="form_updated"
                            class="form-control"
                            :type="passwordFieldType" />
                        <span class="input-group-btn">
                            <button class="btn btn-link" type="button" @click.prevent="useRandomPassword()">
                                <fa icon="dice" />
                            </button>
                            <button class="btn btn-link" type="button" @click.prevent="toggleVisibility()">
                                <fa :icon="passwordIcon"/>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="form-group">
                    <label>
                        <fa icon="key" />
                        Confirm Password
                    </label>
                    <div class="input-group">
                        <input
                            tabindex=3
                            v-model="password_verify"
                            @input.prevent="form_updated"
                            class="form-control"
                            :type="passwordFieldType" />
                        <span class="input-group-btn">
                            <button class="btn btn-link" type="button" @click.prevent="toggleVisibility()">
                                <fa :icon="passwordIcon"/>
                            </button>
                        </span>
                    </div>
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
            <div class="form-group d-print-none">
                <div class="btn-group">
                    <button class="btn btn-secondary"
                            @click.prevent="print" type="button">
                        <fa icon="print" /> Print <strong>only <fa icon="qrcode" /></strong></button>
                    <button class="btn btn-warning"
                            @click.prevent="printPassword" type="button">
                        <fa icon="print" /> Print <strong><fa icon="qrcode" /> and <fa icon="key" /></strong></button>
                    <button class="btn btn-alert"
                            @click.prevent="registerAccount"
                            :disabled="loading_register"
                            type="button">
                        <fa :icon="registerIcon" v-bind:class="{'fa-spin': loading_register}" /> Register Account!<sup>*</sup></button>
                </div>
                <small id="fileHelp" class="form-text text-muted">
                    <sup>*)</sup>By pressing <i>Register Account!</i>, you agree to the 
                    <a href="https://bitshares.eu/terms" target="_blank">
                        terms&conditions of the BitShares Europe Faucet</a>
                </small>

                <hr />

                <b-modal ok-only ok-variant="outline-danger" ref="modal_account_created" title="Account Created Successfully">
                    <p>Your account has been succesfully created!</p>
                    <p>You can find all the details about your account in the 
                    <a :href="'https://wallet.bitshares.eu/account/'+accountname+'/overview'" target="_blank">Explorer</a>
                    </p>
                </b-modal>
                <b-modal ok-only ok-variant="outline-danger" ref="modal_account_failed" title="Account Creation Failed">
                    <p>An error occured while creating your account!</p>
                    <ul>
                        <li :key="error" v-for="error in registerResponseError">{{ error }}</li>
                    </ul>
                </b-modal>
            </div>

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
import bip39 from "bip39"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default {
    name: 'PaperWallet',
    components: {
        PaperWalletKey
    },
    data () {
        return {
            accountname: null,
            password: null,
            password_verify: null,
            loginKey: null,
            errors: [],
            print_password: false,
            passwordFieldType: "password",
            passwordIcon: "eye",
            loading_register: false,
            account_registered: false,
            registerResponseError: [],
            premium_account_text: "",
            premium_account: null,
        }
    },
    computed: {
        registerIcon() {
            return this.loading_register ? "spinner" : 'arrow-circle-right';
        },
        valid() {
            return (this.errors.length === 0);
        },
        is_premium_name() {
            return true;
        }
    },
    methods: {
        _is_premium_name() {
            if (RegExp("[0-9/.-]").test(this.accountname)) {
                return false;
            } else {
                if (RegExp("[aeiouy]").test(this.accountname)) {
                    return true
                } else {
                    return false;
                }
            }
        },
        is_premium_account() {
            if (this._is_premium_name()) {
                this.premium_account_text = "Premium Account"
                this.premium_account = true
                return true
            } else {
                this.premium_account_text = "Regular Account"
                this.premium_account = false
                return false
            }
        },
        toggleVisibility(e) {
            this.passwordFieldType = (e || this.passwordFieldType === "password") ?  "text": "password";
            this.passwordIcon = (e || this.passwordFieldType === "password") ? "eye-slash" : "eye";
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
        useRandomPassword() {
            this.password = this.generatePassword(16);
            this.password_verify = this.password;
            this.toggleVisibility(true);
            this.form_updated()
        },
        generatePassword (length) {
            return bip39.generateMnemonic();
        },
        validate_form() {
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
            if (this.is_premium_account()) {
                this.errors.push('Only regular accounts are supported here!');
            }
            if (this.errors.length == 0) {
                return true;
            } else {
                return false;
            }
        },
        async form_updated() {
            if (this.validate_form()) {
                this.generateLoginKey();
            } else {
                this.clearLoginKey();
            }
        },
        clearLoginKey() {
            this.loginKey = null;
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
                    owner_key: this.loginKey.pubKeys.owner,
                    memo_key: this.loginKey.pubKeys.memo,
                }
            }
            this.faucetRequest(query)
            .catch(reason => this.errors.push(reason))
            .then(response => {
                if (response &&
                    !response.error &&
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
                    if (response.error) {
                        this.registerResponseError = response.error.base;
                    }
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
