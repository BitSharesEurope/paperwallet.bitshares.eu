<template>
    <div style="margin-top:15px">
        <h2>
            <img src="/logo.png" width="42px" style="padding: 5px; margin-bottom:10px"/>
            PaperWallet/ColdStorage &nbsp;
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
                        v-model.lazy="accountname"
                        v-debounce="500"
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
                            v-debounce="500"
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
                            v-debounce="500"
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
                <div class="form-group" v-if="enable_coupon">
                    <label>
                        <fa 
                            :icon="gift_code_icon"
                            :class="{'fa-spin': (gift_code_icon!='barcode')}"
                         />
                        Claim Coupon Code
                        <span v-if="coupon.allow_register_premium_account" class="badge badge-success">
                            Premium Accounts allowed
                        </span>
                        <span v-if="coupon.amount" class="badge badge-primary">
                            <strong>{{coupon.amount}} {{coupon.symbol}}</strong>
                        </span>
                    </label>
                    <div class="input-group">
                        <input
                            tabindex=5
                            type="text"
                            placeholder="Coupon Code"
                            v-model.lazy="coupon_code"
                            v-debounce="500"
                            @input.prevent="coupon_reload"
                            class="form-control"/>
                    </div>
                </div>
                <div class="form-group" v-if="enable_coupon">
                    <label>
                        <fa icon="at" />
                        Email Address
                    </label>
                    <div class="input-group">
                        <input
                            tabindex=5
                            type="text"
                            placeholder="email@example.com"
                            @input.prevent="form_updated"
                            v-model="email"
                            class="form-control"/>
                    </div>
                </div>
                <div class="alert alert-danger" role="alert" v-if="errors.length">
                    <h5 class="alert-heading">Woops, something is wrong!</h5>
                    <small>
                        <b>Please correct the following error(s):</b>
                        <hr>
                        <ul>
                            <li :key="error" v-for="error in errors">{{ error }}</li>
                        </ul>
                    </small>
                </div>
                <div class="form-check">
                    <input
                        tabindex=4
                        v-model="enable_coupon"
                        class="form-check-input"
                        type="checkbox" />
                    <div class="form-check-label">
                        Use a Coupon Code
                        <fa icon="gift" />
                    </div>
                </div>
            </form>
        </div>
        <div v-if="loginKey">
            <div class="form-group d-print-none">
                <div class="btn-group">
                    <button class="btn btn-warning"
                            @click.prevent="printPassword" type="button">
                        <fa icon="print" /> Print <strong><fa icon="qrcode" /> and <fa icon="key" /></strong></button>
                    <button class="btn btn-primary"
                            @click.prevent="registerAccount"
                            :disabled="loading_register"
                            type="button">
                        <fa :icon="registerIcon" v-bind:class="{'fa-spin': loading_register}" /> Automatic Account!<sup>*</sup></button>

                    <button class="btn btn-secondary"
                            @click.prevent="showRegistrationQuery"
                            type="button">
                        <fa icon="code" />Manual Registration</button>
                    <button class="btn btn-secondary"
                            @click.prevent="print" type="button">
                        <fa icon="print" /> Print <strong>only <fa icon="qrcode" /></strong></button>
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
                    <a class="ui basic primary button" :href="'https://wallet.bitshares.eu/account/'+accountname+'/overview'" target="_blank">Explorer</a>
                    </p>
                    <hr />
                    <div v-if="response.coupon">
                        <div class="alert alert-success" v-if="response.coupon.message">
                            {{response.coupon.message}}
                        </div>
                    </div>
                </b-modal>
                <b-modal ok-only ok-variant="outline-danger" ref="modal_account_failed" title="Account Creation Failed">
                    <p>An error occured while creating your account!</p>
                    <ul>
                        <li :key="error" v-for="error in registerResponseError">{{ error }}</li>
                    </ul>
                </b-modal>
                <b-modal ok-only ok-variant="outline-danger" ref="modal_show_query" title="Registration Query" size="lg">
                    <p>
                    The purpose of this popup is to present the information
                    sent over to the account registration service (a.k.a.
                    faucet). It is particularly useful if you are running this
                    site on a computer that is not internet connected to
                    establish a <strong>cold</strong> paperwallet.</p>
                    <p>
                    Below, you can find the request string that has to be sent
                    to our faucet endpoint</p>
                    <blockquote>
                        <tt>{{faucet_url}}</tt>
                    </blockquote>
                    <div class="form-group">
                        <label><strong>Raw POST query</strong></label>
                        <textarea class="form-control myquery" rows="8" v-model="query_string"></textarea>
                    </div> 
                    <p>
                    Alternatively, copy&paste the CURL command:
                    </p>
                    <div class="form-group">
                        <label><strong>CURL command</strong></label>
                        <textarea class="form-control myquery" rows="5" v-model="query_curl"></textarea>
                    </div> 
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
import debounce from 'v-debounce'


export default {
    name: 'PaperWallet',
    components: {
        PaperWalletKey
    },
    directives: {debounce},
    data () {
        return {
            faucet_url: "https://faucet.bitshares.eu/paperwallet/api/v1/accounts",
            coupon_url: "https://bitshares.eu/coupon/api/info/",
            //faucet_url: "https://localhost:5001/api/v1/accounts",
            //coupon_url: "http://localhost:5000/coupon/api/info/",
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
            enable_coupon: false,
            coupon_code: "",
            gift_code_icon: "barcode",
            coupon: {},
            coupon_error: null,
            email: "",
            response: {},
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
        },
        query_string() {
            return JSON.stringify(this.query, null, 4)
        },
        query_curl() {
            let query_s = JSON.stringify(this.query)
            return `curl -d '${ query_s }' -H 'Content-Type: application/json' -X POST ${this.faucet_url}`
        },
        query() {
            if (this.loginKey) {
                let basic = {
                    account: {
                        name: this.accountname,
                        active_key: this.loginKey.pubKeys.active,
                        owner_key: this.loginKey.pubKeys.owner,
                        memo_key: this.loginKey.pubKeys.memo,
                    }
                }
                if (this.coupon.code && this.email) {
                    basic.coupon = {
                        code: this.coupon.code,
                        email: this.email,
                    }
                }
                return basic
            } else {
                return {}
            }
        }
    },
    watch: {
        coupon_code () {
            this.load_coupon();
        },
        accountname () {
            this.form_updated()
        },
        enable_coupon() {
            this.form_updated()
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
        coupon_reload() {
            this.gift_code_icon = "spinner";
        },
        async load_coupon() {
            if (this.coupon_code) {
                try {
                    let url = this.coupon_url + this.coupon_code + "/";
                    let response = await fetch(url)
                    if (response.status != 200) {
                        throw new Error(response.status)
                    }
                    this.coupon_error = null;
                    let c = await response.json();
                    if (c.state != "FUNDED")
                        throw new Error(c.state)
                    this.coupon = c;

                } catch (e) {
                    let msg = "";
                    if (e.message == 404)
                        msg = "Code not found";
                    else if (e.message == 302)
                        msg = "Code not found";
                    else if (e.message == 429)
                        msg = "You've been trying too many codes! Please try again later!";
                    else
                        msg = "Error: " + e.message;
                    this.coupon_error = msg;
                    this.coupon = {};
                }
            } else {
                this.coupon_error = null;
                this.coupon = {};
            }
            // Now that we loaded from the API, let's revalidate
            // e.g. to allow premium accounts
            this.form_updated()

            this.gift_code_icon = "barcode";
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
                if (!this.coupon.allow_register_premium_account)
                    this.errors.push('Only regular accounts are supported here!');
            }
            if (this.enable_coupon) {
                if (!this.email)
                    this.errors.push('Email address required for claiming coupon!');
                if (!this.coupon_code)
                    this.errors.push('Coupon code missing!');
            }
            if (this.coupon_error)
                this.errors.push(this.coupon_error);
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
        async faucetRequest() {
            let response = await fetch(
                this.faucet_url, {
                method: "POST",
                headers: {"Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify(this.query)
            })
            return await response.json()
        },
        async registerAccount() {
            this.loading_register = true
            this.faucetRequest()
            .catch(reason => this.errors.push(reason))
            .then(response => {
                let query = this.query;
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
                    this.response = response
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
        },
        showRegistrationQuery() {
            this.$refs.modal_show_query.show()
        }
    }
}
</script>

<style scoped>
.myquery {
    font-family: 'DejaVu Sans Mono', monospace;
    font-size: 8pt;
}
</style>
