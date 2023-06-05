<template>
    <form class="container-fluid cliente-form">
        <div class="d-flex flex-column">
            <div class="flex-row">
                <div class="d-flex justify-content-between">
                    <div class="flex-column">
                        <label for="selectEstado">Estado</label>
                        <select class="form-select select-estado" aria-label="Selecionar Estado" id="selectEstado">
                            <option selected value="">Escolha um estado</option>
                            <option value="MS">MS</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                        </select>
                    </div>
                    <div class="flex-column">
                        <label for="selectCidade">Cidade</label>
                        <select class="form-select select-estado" aria-label="Selecionar Estado" id="selectEstado">
                            <option selected value="">Escolha uma cidade</option>
                            <option value="MS">MS</option>
                            <option value="SP">SP</option>
                            <option value="TO">TO</option>
                        </select>
                    </div>
                    <div class="flex-column">
                        <label for="nome">CEP</label>
                        <input type="text" class="form-control me-2" placeholder="00000-000" aria-label="Nome" 
                                v-model="endereco.cep" required :disabled="!edit" id="nome"
                                v-maska data-maska="00000-000">
                    </div>
                    <div class="flex-column">
                        <label for="selectTpMoradia">Tipo de Residência</label>
                        <select class="form-select select-estado" aria-label="Selecionar Estado" id="selectEstado">
                            <option selected value="">Escolha um tipo</option>
                            <option value="Casa">Casa</option>
                            <option value="Apartamento">Apartamento</option>
                            <option value="Comercio">Comércio</option>
                        </select>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="flex-column">
                        <label for="bairro">Bairro</label>
                        <input type="text" class="form-control me-2" placeholder="Bairro" aria-label="bairro" 
                                v-model="endereco.bairro" required :disabled="!edit" id="bairro">
                    </div>
                    <div class="flex-column">
                        <label for="rua">Rua</label>
                        <input type="text" class="form-control me-2" placeholder="Rua" aria-label="rua" 
                                v-model="endereco.rua" required :disabled="!edit" id="rua">
                    </div>
                    <div class="flex-column">
                        <label for="numero">Numero</label>
                        <input type="number" class="form-control me-2" placeholder="00000" aria-label="numero" 
                                v-model="endereco.numero" required :disabled="!edit" id="numero">
                    </div>
                </div>
                <div class="flex-column">
                    <label for="obs">Observações</label>
                    <input type="text" class="form-control me-2" aria-label="observacao" 
                            v-model="endereco.obs" required :disabled="!edit" id="observacao">
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
        endereco: {
            estado: "",
            cidade: "",
            bairro: "",
            rua: "",
            numero: "",
            tpMoradia: "",
            cmplmt: "",
            cep: "",
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
    .select-estado {
        max-width: 200px;
    }
</style>