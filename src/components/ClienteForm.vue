<template>
    <form class="container-fluid">
        <div class="d-flex flex-column" style="padding: 10px">
            <div class="d-flex flex-row" style="margin-bottom: 10px">
                <input type="date" class="form-control me-2" v-model="cliente.date">
                <input type="text" class="form-control me-2" v-maska data-maska="###.###.###-##" 
                        v-model="cliente.cpf" placeholder="Digite o CPF">
                <input type="text" class="form-control me-2" v-maska data-maska="(##) #####-####" 
                        v-model="cliente.telefone" placeholder="Digite o telefone">
            </div>
            <div class="d-flex flex-row">
                <input type="text" class="form-control me-2" placeholder="Nome Completo" aria-label="Nome" 
                        v-model="cliente.nome" required>
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
            cpf: "XXXXXXXXX",
            telefone: ""
        },
    })
}
</script>

<style>

</style>