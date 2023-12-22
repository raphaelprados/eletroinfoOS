<template>
    <form class="container-fluid cliente-form">
        <div class="d-flex flex-row">
            <div class="flex-column">
                <div class="d-flex" style="margin-bottom: 10px">
                    <div class="flex-column">
                        <label for="criacao">Data</label>
                        <input type="text" class="form-control me-2 date-field" aria-labelledby="criacaoLabel" 
                                v-model="cliente.date" disabled style="background-color: white" id="criacao">
                    </div>
                    <div class="flex-column" style="margin-left: 10px; margin-right: 20px;">
                        <label for="cpf">CPF</label>
                        <input type="text" class="form-control me-2" v-maska data-maska="###.###.###-##" id="cpf" 
                                v-model="cliente.cpf" placeholder="000.000.000-00" :disabled="!edit">
                    </div>
                    <div class="flex-column">
                        <label for="telefone1">Telefone</label>
                        <input type="text" class="form-control me-2" v-maska data-maska="(##) #####-####" id="telefone1"
                            v-model="cliente.telefone" placeholder="(00) 00000-0000" :disabled="!edit">
                    </div>
                </div>
                <div class="flex-row">
                    <div class="flex-column">
                        <label for="nome">Nome</label>
                        <input type="text" class="form-control me-2" placeholder="Nome Completo" aria-label="Nome" 
                                v-model="cliente.nome" required :disabled="!edit" id="nome">
                    </div>
                </div>
            </div>
            <div class="flex-column" style="margin-left: 20px;">
                <div class="flex-column">
                    <label for="criacao">Observações</label>
                    <textarea class="form-control" aria-label="Observações" v-model="cliente.obs"
                                aria-describedby="ObservacoesLabel"></textarea>
                </div>
            </div>
        </div>
        <EnderecoForm :edit="edit" />      
    </form>
</template>

<script>
import { vMaska } from "maska"
import EnderecoForm from "./EnderecoForm.vue";

export default {
    name: 'ClienteForm',
    directives: { maska: vMaska },
    components: {
        EnderecoForm
    },
    data: () => ({
        cliente: {
            date: new Date().toLocaleDateString(),
            nome: "",
            cpf: "",
            telefone: "",
            obs: ""
        },
    }),
    props: {
        edit: Boolean
    }
}
</script>

<style>
    .cliente-form {
        margin-top: 20px;   
    }
    .fields-display {
        display: flex;
        width: 100%;
        border: 1px solid black;
        padding: 10px;
    }
    [placeholder]:focus::-webkit-input-placeholder {
        transition: opacity 0.5s 0.5s ease; 
        opacity: 0;
    }
</style>