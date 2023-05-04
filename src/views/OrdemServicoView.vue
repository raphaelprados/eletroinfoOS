<template>
    <div class="d-inline-flex" style="padding: 10px">
        <div class="input-group" style="padding: 10px">
        <span class="input-group-text" id="buscaLabel">Pesquisar</span>
        <input class="form-control" type="search" id="buscaId" aria-label="Busca" 
                placeholder="Digite as tags de busca" aria-describedby="buscaLabel">
        </div>
        <button class="btn btn-primary" style="margin-left: 10px; heigth: 10px;"
                @click="toggleCreateOS">Nova OS</button>  
    </div>
    <div class="tabela">
        <ul class="list-group">
        <li class="list-group-item"></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
        tagsPesquisa: [],
        showOSForm: false,
        ordemServicoList: []
        }
    },
    methods: {
        toggleCreateOS() {
            this.showOSForm = !this.showOSForm
        }
    }
}
</script>

<style>

</style>