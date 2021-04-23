<template>
    <div>
    <b-row>
        <h6>Email </h6> <input type="text" v-model="email"/>
    </b-row>
    <b-row>
        <h6>Password </h6> <input type="password" v-model="password"/>
    </b-row>
    <b-row>
        <button @click="Login">Login</button>
    </b-row>
    
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',

    data(){
        return{
            email:'',
            password: '',

        }
    },

    methods:{
        Login(){
            let userDetails = {
                email : this.email,
                password : this.password,
            }
            
            axios.post("http://localhost:5000/login", userDetails)
            .then(res => {
                console.log(res);
                
            }, err => {
                console.log(err.response);
                
            })
            
        }

    },


}
</script>

<style>

</style>