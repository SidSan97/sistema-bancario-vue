<template>
    <div class="container">
      <div id="app">
          <h1 class="mt-4">Abra a sua conta</h1> <br>

          <form @submit.prevent="submitForm">
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="nome" class="form-label">Nome Completo</label>
                <input type="text" class="form-control" id="nome" v-model="formData.nome">
              </div>

              <div class="col-md-6">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" v-model="formData.email">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha" v-model="formData.senha">
              </div>

              <div class="col-md-6">
                <label for="senha2" class="form-label">Repita a senha</label>
                <input type="password" class="form-control" id="senha2" v-model="formData.senha2">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="rg" class="form-label">Insira seu RG</label>
                <input type="number" class="form-control" id="rg" v-model="formData.rg">
              </div>

              <div class="col-md-6">
                <label for="cpf_cnpj" class="form-label">CPF/CNPJ</label>
                <input type="number" class="form-control" id="cpf_cnpj" v-model="formData.cpf_cnpj">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="data_nascimento" class="form-label">Data de Nascimento</label>
                <input type="date" class="form-control" id="data_nascimento" v-model="formData.data_nascimento">
              </div>

              <div class="col-md-6">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="tel" class="form-control" id="telefone" v-model="formData.telefone">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="estado_civil" class="form-label">Estado Civil</label>
                  <select id="estado_civil" class="form-control" v-model="formData.estado_civil">
                    <option value=""></option>
                    <option value="Solteiro">Solteiro(a)</option>
                    <option value="Casado">Casado(a)</option>
                    <option value="Divorciado">Divorciado(a)</option>
                  </select>
              </div>

              <div class="col-md-6">
                <label for="sexo" class="form-label">Sexo</label>
                  <select id="sexo" class="form-control" v-model="formData.sexo">
                    <option value=""></option>
                    <option value="Homem">Homem</option>
                    <option value="Mulher">Mulher</option>
                    <option value="Outro">Outro</option>
                  </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="cep" class="form-label">CEP</label>
                <input type="number" class="form-control" id="cep" v-model="formData.cep">
              </div>

              <div class="col-md-6">
                <label for="estado" class="form-label">Estado</label>
                <input type="text" class="form-control" id="estado" v-model="formData.estado">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="cidade" class="form-label">Cidade</label>
                <input type="text" class="form-control" id="cidade" v-model="formData.cidade">
              </div>

              <div class="col-md-6">
                <label for="bairro" class="form-label">Bairro</label>
                <input type="text" class="form-control" id="bairro" v-model="formData.bairro">
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="rua" class="form-label">Rua</label>
                <input type="text" class="form-control" id="rua" v-model="formData.rua">
              </div>

              <div class="col-md-6">
                <label for="complemento" class="form-label">Complemento</label>
                <input type="text" class="form-control" id="complemento" v-model="formData.complemento">
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>

          <button class="btn btn-warning mt-2 mb-4"><a href="/" class="text-dark">Voltar</a></button>

          <div v-if="this.submitted" class="alert alert-sucess" role="alert">
            {{ this.responseMessage }}
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
        nome: '',
        email: '',
        senha: '',
        rg: '',
        cpf_cnpj: '',
        data_nascimento: '',
        telefone: '',
        estado_civil: '',
        sexo: '',
        cep: '',
        estado: '',
        cidade: '',
        bairro:'',
        rua: '',
        complemento: '',

      },
      responseMessage: '',
      submitted: false,
    };
  },
  methods: {
    async submitForm() {
   console.log(this.formData)
      try {
        const response = await axios.post('http://localhost/sistema-bancario-laravel/public/api/criar-conta', this.formData);

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