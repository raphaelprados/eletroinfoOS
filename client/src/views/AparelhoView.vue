<template>
    <div class="search-header">
        <div class="input-group" style="padding: 10px">
            <span class="input-group-text" id="buscaLabel">Pesquisar</span>
            <input class="form-control" type="search" id="buscaId" aria-label="Busca" 
                    placeholder="Digite as tags de busca" aria-describedby="buscaLabel">
        </div>
        <button class="btn btn-primary" @click="toggleAparelhoForm">Novo Aparelho</button>  
    </div>
    <!-- <Modal v-if="showAparelhoForm" @close="toggleAparelhoForm">
        <AparelhoForm/>
    </Modal> -->
</template>

<script>
import AparelhoForm from '@/components/AparelhoForm.vue'
import Modal from '@/components/Modal.vue'

export default {
    data() {
        return {
            showAparelhoForm: false
        }
    },
    components: {
        AparelhoForm,
        Modal
    },
    methods: {
        toggleAparelhoForm() {
            this.showAparelhoForm = !this.showAparelhoForm
        }
    }
}
</script>

<style>
    .btn {
        min-width: 160px;
        margin-left: 10px
    }
</style>