<template>
    <p>
        <button  @click="getSaldo" class="btn btn-primary">
            {{ this.text }}
        </button>
    </p>

    <div v-if="this.showSaldo">
        <p v-if="this.responseMessage !== ''">
            <span>Saldo atual: R${{ this.responseMessage }}</span>
        </p>
        <p v-if="this.error !== ''">
            <span > {{this.error}} </span>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    import { defineComponent } from 'vue';

    const GetSaldo = defineComponent({
    name: 'GetSaldo', 
    
    data() { 
        return {
            responseMessage: '',
            error: '',
            showSaldo: false,
            text: 'Exibir Saldo',
        };
    },
    methods: { 
        async getSaldo() {
            try {
                const response = await axios.get('http://localhost/sistema-bancario-laravel/public/api/saldo');
                this.responseMessage = response.data.message;
                this.showSaldo = !this.showSaldo;

                if(this.showSaldo){
                    this.text = 'Esconder Saldo';
                }
                else {
                    this.text = 'Exibir Saldo'
                }
            } catch (error) {
                this.error = error.message;
            }
        },
    },
    });

    export default GetSaldo;
</script>

<style>

</style>