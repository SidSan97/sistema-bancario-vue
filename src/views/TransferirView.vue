<template>
    <div class="container">  
      <div class="classeForm" id="app">
            <h1 class="mt-4">Faça aqui sua transferência</h1> <br>

            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="num_conta_destinatario">Número da conta destinatária</label>
                    <input class="form-control" type="text" id="num_conta_destinatario" v-model="formData.num_conta_destinatario">
                </div>
    
                <div class="form-group">
                    <label for="valor_transferencia">Valor da transferência</label>
                    <input class="form-control" type="text" id="valor_transferencia" v-model="formData.valor_transferencia">
                </div>
    
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

            <button class="btn btn-warning"><a href="index.html" class="text-dark">Voltar</a></button>

            <!--div v-if="submitted">
                <p>Formulário enviado com sucesso!</p>
            </div-->
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
    };
  },
  methods: {
    async submitForm() {
      try {
        // Substitua a URL abaixo pela URL real da sua API
        const response = await axios.post('http://localhost/sistema-bancario-laravel/public/api/transferencia', this.formData);

        // Exibe a resposta do servidor no console (pode ser removido em produção)
        console.log('Resposta do servidor:', response.data);

        // Define responseMessage com a mensagem de sucesso
        this.responseMessage = 'Formulário enviado com sucesso!';
      } catch (error) {
        console.error('Erro ao enviar o formulário:', error);

        // Define responseMessage com a mensagem de erro
        this.responseMessage = 'Erro ao enviar o formulário. Por favor, tente novamente.';
      }
    },
  },
};
</script>