<template>
    <div class="container">
        <h1 class="titulo">Escolha uma opção</h1>

        <div class="row">
            <div class="col-lg-4 mb-2">
                <a href="transferir" class="link">
                    <div class="quadro bg-primary rounded">
                        <img src="img/transferencia.png" alt="" srcset=""> 
                        <span>Fazer Transferência</span>                
                    </div>
                </a>
            </div>

            <div class="col-lg-4 mb-2">
                <a href="deposito" class="link">
                    <div class="quadro bg-warning rounded">
                        <img src="img/deposito.png" alt="" srcset=""> 
                        <span>Fazer um Depósito</span>
                    </div>
                </a>
            </div>

            <div class="col-lg-4 mb-2">
                <a href="extrato" class="link">
                    <div class="quadro bg-success rounded">
                        <img src="img/extrato-bancario.png" alt="" srcset=""> 
                        <span>Extrato</span>
                    </div>
                </a>
            </div>

            <p>
                <button  @click="getSaldo" class="btn btn-primary">Ver saldo</button>
            </p>

            <p v-if="this.responseMessage !== ''">
                <span>Saldo atual: R${{ this.responseMessage }}</span>
            </p>
            <p v-if="this.error !== ''">
                <span > {{this.error}} </span>
            </p>
        </div>
    </div>
</template>

<style scoped>
    body
    {
        margin: 0;
        padding: 0;
    }

    .titulo
    {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .quadro
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .quadro img
    {
        margin-bottom: 25px;
        width: 74px;
        height: 74px;
    }

    .quadro span
    {
        font-size: 26px;
        font-weight: 500;
        color: #262626;
    }

    .link
    {
        color: black;
        text-decoration: none;
    }

    .link:link
    {
        text-decoration: none;
        color: black;
    }
</style>

<script>
 import axios from 'axios';

 export default {
    data() {
        return {
            responseMessage: '',
            error: '',
       }
    },
    created() {
       // this.getSaldo();
    },
    methods: {
        async getSaldo() {
            try {
                const response = await axios.get('http://localhost/sistema-bancario-laravel/public/api/saldo');
                this.responseMessage = response.data.message;
            } catch (error) {
                this.error = error.message;
            }
        }
    }
 }
</script>
