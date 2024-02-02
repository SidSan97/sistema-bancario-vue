<template>
    <div class="container">
        <div id="app">
            <h1 class="mt-4">Abra a sua conta</h1> <br>

            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="num_conta_destinatario">Número da conta destinatária</label>
                    <input class="form-control" type="text" id="num_conta_destinatario" v-model="formData.num_conta_destinatario" required>
                </div>
    
                <div class="form-group">
                    <label for="valor_transferencia">Valor da transferência</label>
                    <input class="form-control" type="text" id="valor_transferencia" v-model="formData.valor_transferencia" required>
                </div>
    
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

            <button class="btn btn-warning"><a href="/" class="text-dark">Voltar</a></button>
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
        const response = await axios.post('http://localhost/sistema-bancario-laravel/public/api/transferencia', this.formData);

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