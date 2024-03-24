<template>
    <div class="container">  
      <div class="classeForm" id="app">
            <h1 class="mt-4">Faça aqui sua transferência</h1> <br>
            <get-saldo></get-saldo>

            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="num_conta_destinatario">Número da conta destinatária</label>
                    <input class="form-control" type="text" id="num_conta_destinatario" v-model="formData.num_conta_destinatario" required>
                </div>
    
                <div class="form-group mb-2">
                    <label for="valor_transferencia">Valor da transferência</label>
                    <input class="form-control" type="text" id="valor_transferencia" v-model="formData.valor_transferencia" required>
                </div>
    
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

            <button class="btn btn-warning mt-2"><a href="/" class="text-dark">Voltar</a></button>

            <div v-if="submitted">
                <p>{{ this.responseMessage }}</p>
            </div>
      </div>
    </div>
</template>

<script>
  import GetSaldo from '@/components/GetSaldo.vue';
  import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        num_conta_destinatario: '',
        valor_transferencia: '',
      },
      responseMessage: '',
      submitted: false,
    };
  },
  components: {
    GetSaldo,
  },
  methods: {
    async submitForm() {
   
      try {
        const response = await axios.post('http://localhost/sistema-bancario-laravel/public/api/transferencia', this.formData);

        this.responseMessage = response.data.message;
        this.submitted = true;
      } catch (error) {

        if (error.response && error.response.data && error.response.data.message) {
          this.responseMessage = error.response.data.message;
        } else {
          this.responseMessage = 'Erro ao efetuar a transferência. Por favor, tente novamente.';
        }
      }
    },
  },
};
</script>