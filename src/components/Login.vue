<template>
    <div class="container">
        <div class="login">
            <div class="login_body">
                <div  class="heading_login">
                    <div class="logo">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="title">
                        <h1><span>NORTHBES</span> Project Tracking Software</h1>
                    </div>
                </div>
                <div class="login_form">
                    <h3>Login Now</h3>
                    <p>LOGIN YOUR SELF</p>
                    <div class="mb-3">
                        <label for="input1" class="form-label">Username</label>
                        <input type="text" v-model="username" class="form-control form-control-lg" id="input1" placeholder="Enter your Username...">
                    </div>
                    <div class="mb-3">
                        <label for="input2" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control form-control-lg" id="input2" placeholder="Enter your Password...">
                    </div>
                    <div class="pt-3 text-center">
                        <button class="btn" @click="login()">Login Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Login',
        data() {
            return {
                username : "",
                password : "",
                alertOpen : true,
            }
        },
        methods : {
            auth(){
               const token = localStorage.getItem("token");
               if(token !=null){
                    this.$router.push('/project-detail')
               }
            },

            login(){   
                if(this.username == "" || this.password == ""){
                    alert("Please enter all fields properly.");
                }else{
                    if(this.username.toUpperCase() == "SSBT11" && this.password.toUpperCase() == "SSBT11"){
                        localStorage.setItem("token",this.username.concat(this.password));
                        alert("Just to let you know, your login has been successful !")
                        this.auth();
                    }else{
                        alert("Please enter the correct credentials.");
                    }
                }  
            },
        },
        mounted(){
            this.auth();
        }
    }

</script>