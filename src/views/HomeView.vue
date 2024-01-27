<template>
  <div class="container">  
    <div class="classeForm" id="app">
        <h1 class="mt-4">Cadastrar Veiculos</h1> <br>

        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="modelo">Modelo</label>
                <input class="form-control" type="text" id="modelo">
            </div>

            <div class="form-group">
                <label for="cor">Cor</label>
                <input class="form-control" type="text" id="cor" >
            </div>

            <div class="form-group">
                <label for="ano">Ano</label>
                <input class="form-control" type="text" id="ano" >
            </div>

            <div class="form-group">
                <label for="">Placa</label>
                <input class="form-control" type="text" id="placa" v-model="formData.placa">
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
