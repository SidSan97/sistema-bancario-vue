<template>
    <div class="container login-container">
        <div class="row">
            <div class="col-md-6 login-form-2">
                <h3>Login</h3>
                <form @submit.stop.prevent="submit">
                    <div class="form-group">
                        <input type="text" class="form-control mb-2" placeholder="Seu E-mail *" v-model="email" />
                    </div>

                    <div class="form-group mb-4">
                        <input type="password" class="form-control mb-2" placeholder="Sua Senha *" v-model="password" />
                    </div>

                    <div class="form-group mb-2">
                        <input type="submit" class="btnSubmit" value="Login" />
                    </div>

                    <div class="form-group">
                        <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
                    </div>
                </form>

                <div class="form-group">
                        <span class="text-light">Não tem uma conta?</span> <a href="cadastro" class="CreateAccount" value="Login">Cadastre-se agora</a>
                </div>

                <div v-if="this.messageError != ''" class="alert alert-danger" role="alert">
                    {{ this.messageError }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-container{
margin-top: 5%;
margin-bottom: 5%;
}

.login-form-2{
    padding: 5%;
    background: #0062cc;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
    text-align: center;
    color: #fff;
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}

.login-form-2 .btnSubmit{
    font-weight: 600;
    color: #0062cc;
    background-color: #fff;
}
.login-form-2 .ForgetPwd, .CreateAccount{
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}

</style>

<script>
import Cookie from 'js-cookie'

export default {
    data() {
       return {
            email: '',
            password: '',
            messageError: '',
       }
    },

    created() {
        Cookie.remove('_myapp_token')
    },

    methods: {
        submit() {

            const payload = {
                email: this.email,
                password: this.password,
            };

            fetch('http://localhost/sistema-bancario-laravel/public/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access': 'application/json',
                },
                body: JSON.stringify(payload)

            }).then(response => response.json())
              .then(res => {
                Cookie.set('_myapp_token', res.access_token)
                console.log(res.error)

                if(res.error != '') {
                    this.messageError = res.error
                } else {
                    this.$router.push({ name: 'home' });
                }
            })
        },
    },
}
</script>
