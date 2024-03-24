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

            <get-saldo></get-saldo>
           
        </div>
        <button @click="logout" class="btn btn-warning">Sair</button><br>
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
 import GetSaldo from '@/components/GetSaldo.vue';

 export default {
    data() {
        return {
           
       }
    },
    components: {
        GetSaldo,
    },
    computed: {
        logout() {
            this.$router.push({ name: 'login' });
        },
    },
 }
</script>
