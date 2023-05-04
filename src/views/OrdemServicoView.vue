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
    <ordem-servico-form v-if="showOSForm"/>
</template>

<script>
import OrdemServicoForm from '@/components/OrdemServicoForm.vue'

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
    },
    components: {
        OrdemServicoForm
    }
}
</script>

<style>

</style>