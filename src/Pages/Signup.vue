<template>
<div>
    <b-row>
        <h6>Name </h6> <input type="text" v-model="name"/>
    </b-row>
    <b-row>
        <h6>Email </h6> <input type="text" v-model="email"/>
    </b-row>
    <b-row>
        <h6>Password </h6> <input type="password" v-model="password"/>
    </b-row>
    <b-row>
        <button @click="signUp">Signup</button>
    </b-row>
    
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Signup',

    data(){
        return{
            name: '',
            email:'',
            password: '',

        }
    },

    methods:{
        signUp(){
            let newUser = {
                name : this.name,
                email : this.email,
                password : this.password,
            }
            
            axios.post("http://localhost:5000/signup", newUser)
            
        }

    },

}
</script>

<style>

</style>