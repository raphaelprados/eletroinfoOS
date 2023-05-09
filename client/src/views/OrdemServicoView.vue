<template>
    <div class="search-header">
        <div class="input-group" style="padding: 10px;">
            <span class="input-group-text" id="buscaLabel">Pesquisar</span>
            <input class="form-control" type="search" id="buscaId" aria-label="Busca" 
                    placeholder="Digite as tags de busca" aria-describedby="buscaLabel"
                    :disabled="showOSForm" v-model="tag" @keyup="onComma">
        </div>
        <div class="btn-group" role="group" aria-label="Novo Registro">
            <button class="btn btn-primary top-btn"
                @click="toggleModal" :disabled="showOSForm">Novo Registro</button>  
        </div>
    </div>
    
    <div v-for="tags in tagsPesquisa" :key="tags">
        <div class="tags-container">
            <span class="search-tag">
                {{ tags }}
                <button type="button" class="btn-close btn-xs" aria-label="Close" @click="remover(tags)"></button>
            </span>
        </div>
    </div>
    <Modal @close="toggleModal" v-if="showOSForm">
        <OrdemServicoForm/>
    </Modal>
</template>

<script>
import OrdemServicoForm from '@/components/OrdemServicoForm.vue'
import Modal from '@/components/Modal.vue'
import ClienteForm from '@/components/ClienteForm.vue'

export default {
    data() {
        return {
            tagsPesquisa: [],
            tag: "",
            showOSForm: false,
            clienteForm: false,
            ordemServicoList: []
        }
    },
    components: {
        OrdemServicoForm,
        ClienteForm,
        Modal 
    },
    methods: {
        toggleModal() {
            this.showOSForm = !this.showOSForm
        },
        toggleModalCli() {
            this.clienteForm = !this.clienteForm
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
    },
    setup() {
        
    }
}
</script>

<style>
    .top-btn {
        margin-left: 10px;
    }
    .search-tag {
        background-color: rgb(238, 238, 238);
        padding: 5px;
        border-radius: 5px;
        display: inline-block;
    }
    .tags-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>