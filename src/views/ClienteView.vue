<template>
    <button type="button" class="btn btn-primary" @click="toggleInserirCliente" 
            style="margin-top: 10px;"
            >Novo Cliente</button>
    <Modal @close="toggleInserirCliente" v-show="showClienteForm">
        <ClienteForm />
    </Modal>    
    <!-- <div class="tabela-clientes">
        <ul class="list-group">
            <li class="list-group-item">
                <div class="d-flex flex-row">
                    <div class="flex-column">
                        <span class="dot"></span>
                    </div>
                </div>
            </li>
        </ul>
    </div> -->
</template>

<script>
import ClienteForm from '@/components/ClienteForm.vue' 
import Modal from '@/components/Modal.vue'

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
        Modal
    },
    methods: {
        toggleInserirCliente() {
            this.showClienteForm = !this.showClienteForm
        }
    }
}
</script>

<style>
    .dot {
        height: 15px;
        width: 15px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    .tabela-clientes {
        padding: 10px
    }

    .linha-cliente {
        border: 1px solid gray;
    }
</style>