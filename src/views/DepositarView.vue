<template>
    <div class="container">  
        <div class="classeForm" id="app">
            <h1 class="mt-4">Faça aqui o seu depósito</h1> <br>

            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="num_conta">Número da conta destinatária</label>
                    <input class="form-control" type="text" id="num_conta" v-model="formData.num_conta" required>
                </div>
    
                <div class="form-group">
                    <label for="valor_deposito">Valor do depósito</label>
                    <input class="form-control" type="text" id="valor_deposito" v-model="formData.valor_deposito" required>
                </div>
    
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

            <button class="btn btn-warning"><a href="/" class="text-dark">Voltar</a></button>

            <div v-if="submitted">
                <p>{{ this.responseMessage }}</p>
            </div>
        </div>
    </div>
</template>

<script>
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
  methods: {
    async submitForm() {
   
      try {
        const response = await axios.post('http://localhost/sistema-bancario-laravel/public/api/depositar', this.formData);

        this.responseMessage = response.data.message;
        this.submitted = true;
      } catch (error) {

        if (error.response && error.response.data && error.response.data.message) {
          this.responseMessage = error.response.data.message;
        } else {
          this.responseMessage = 'Erro ao enviar o formulário. Por favor, tente novamente.';
        }
      }
    },
  },
};
</script>