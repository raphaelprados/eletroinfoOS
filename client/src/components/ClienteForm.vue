<template>
    <form class="container-fluid cliente-form">
        <div class="d-flex flex-column">
            <div class="d-flex flex-row" style="margin-bottom: 10px">
                <div class="flex-column">
                    <label for="criacao">Data</label>
                    <input type="text" class="form-control me-2" aria-labelledby="criacaoLabel" 
                            v-model="cliente.date" disabled style="background-color: white" id="criacao">
                </div>
                <div class="flex-column">
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
                <div class="d-flex flex-column">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control me-2" placeholder="Nome Completo" aria-label="Nome" 
                            v-model="cliente.nome" required :disabled="!edit" id="nome">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { vMaska } from "maska"

export default {
    name: 'ClienteForm',
    directives: { maska: vMaska },
    data: () => ({
        cliente: {
            date: new Date().toLocaleDateString(),
            nome: "",
            cpf: "",
            telefone: ""
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
    [placeholder]:focus::-webkit-input-placeholder {
        transition: opacity 0.5s 0.5s ease; 
        opacity: 0;
    }
</style>