<template>
    <div class="btn-group" role="group" aria-label="Novo Registro">
        <button class="btn btn-primary top-btn"
            @click="toggleCreateOS">Novo Registro</button>  
    </div>
    <div class="input-group" style="padding: 10px;">
        <span class="input-group-text" id="buscaLabel">Pesquisar</span>
        <input class="form-control" type="search" id="buscaId" aria-label="Busca" 
                placeholder="Digite as tags de busca" aria-describedby="buscaLabel"
                :disabled="showOSForm" v-model="tag" @keyup="onComma">
    </div>
    <div v-for="tags in tagsPesquisa" :key="tags">
        <!-- <div class="search-tag"></div> -->
        <div>
            <span class="search-tag">
                {{ tags }}
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true" @click="remover(tags)">&times;</span>
                </button>
            </span>
        </div>
    </div>
    <!-- <ordem-servico-form v-if="showOSForm"/> -->
    <Modal @close="toggleModal" v-if="showOSForm"/>
</template>

<script>
import OrdemServicoForm from '@/components/OrdemServicoForm.vue'
import Modal from '@/components/Modal.vue'

export default {
    data() {
        return {
            tagsPesquisa: [],
            tag: "",
            showOSForm: false,
            ordemServicoList: []
        }
    },
    components: {
        OrdemServicoForm,
        Modal 
    },
    methods: {
        toggleModal() {
            this.showOSForm = !this.showOSForm
        },
        onComma(e) {
            if(e.key == ",") {
                this.tag = this.tag.replace(",", '')
                this.tagsPesquisa.push(this.tag)
                this.tag = ""
            }
        },
        remover(tag) {
            this.tagsPesquisa.splice(this.tagsPesquisa.indexOf(tag), 1)
        }
    }
}
</script>

<style>
    .top-btn {
        margin-left: 10px;
        margin-top: 10px;
    }
    .search-tag {
        background-color: rgb(238, 238, 238);
        padding: 5px;
        border-radius: 5px;
        display: inline-block;
    }
</style>