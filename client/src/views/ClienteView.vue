<template>
    <h1>Cadastro de Cliente</h1>
    <div class="search-header">
        <div class="input-group" style="padding: 10px">
            <span class="input-group-text" id="buscaLabel">Pesquisar</span>
            <input class="form-control" type="search" id="buscaId" aria-label="Busca" 
                    placeholder="Digite as tags de busca" aria-describedby="buscaLabel">
        </div>
        <button type="button" class="btn btn-primary" @click="toggleInserirCliente">Novo Cliente</button>
    </div>
    <Listagem />
    <Modal @close="toggleInserirCliente" v-show="showClienteForm">
        <ClienteForm edit="true"/>
    </Modal>    
</template>

<script>
import ClienteForm from '@/components/ClienteForm.vue' 
import Modal from '@/components/Modal.vue'
import Listagem from '@/components/Listagem.vue'

export default {
    data() {
        return {
            showClienteForm: false,
            cliente: {
                nome: "",
                telefone: "",
                cpf: ""
            },
            endereco: {
                estado: "",
                cidade: "",
                bairro: "",
                rua: "",
                numero: "",
                tipo: "",
                complemento: ""
            }
        }
    }, 
    components: {
        ClienteForm,
        Modal,
        Listagem
    },
    methods: {
        toggleInserirCliente() {
            this.showClienteForm = !this.showClienteForm
        }
    }
}
</script>

<style>
    
</style>