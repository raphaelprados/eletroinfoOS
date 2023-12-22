<template>
    <div class="container-fluid" >
        <h1>Cliente</h1>
        <div class="column">
            <div class="row">
                <div class="input-group">
                    <span class="input-group-text" id="ClienteLabel">Cliente</span>
                    <select class="form-select select-cliente" aria-label="Selecionar cliente" v-model="cliente.id">
                        <option value="null">Selecione o cliente</option>
                        <option value="135">Joaquim dos Santos</option>
                    </select>
                    <button class="btn" :class="(clienteEdit) ? 'btn-warning' : 'btn-primary'" @click="toggleNewCliente">{{ addClienteBtnTxt }}</button>
                </div>
            </div>
            <div class="row"></div>
        </div>
        <ClienteForm :edit="clienteEdit"/>
        <SubmitButtons v-if="clienteEdit" @cancel="toggleNewCliente" @save="postCliente"/>
        <div class="input-group">
            <div class="d-flex flex-row">
                <div class="d-flex flex-column">
                    <AparelhoForm :showNumeroSerie="true"/>
                    <div style="margin-left: 20px; margin-right: 20px">
                        <div class="input-group" style="margin-bottom: 10px">
                            <span class="input-group-text" id="ReclamacaoLabel">Alegação</span>
                            <textarea class="form-control" aria-label="Alegação" v-bind="ordemServico.reclamacao"
                                        aria-describedby="ReclamacaoLabel"></textarea>
                        </div>
                        <div class="input-group" style="margin-bottom: 10px" >
                            <span class="input-group-text" id="ObservacoesLabel">Observações</span>
                            <textarea class="form-control" aria-label="Observações" v-bind="ordemServico.observacoes"
                                        aria-describedby="ObservacoesLabel"></textarea>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text" id="TelefoneLabel">Acessórios</span>
                            <input type="text" class="form-control" id="IdTelefone"
                                    v-bind="ordemServico.acessorios"
                                    aria-label="Telefone" aria-labelledby="TelefoneLabel">
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column" style="margin-left: 10px; margin-top: 20px">
                    <h1>Datas</h1>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="PrometidoLabel">Prometido</span>
                        <input type="date" class="form-control" id="idPrometido"
                                v-bind="ordemServico.dtPromt"
                                aria-label="Prometido" aria-labelledby="PrometidoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="OrcamentoLabel">Orcamento</span>
                        <input type="date" class="form-control" id="idOrcamento"
                                v-bind="ordemServico.dtOrcmt"
                                aria-label="Orcamento" aria-labelledby="OrcamentoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="AutorizadoLabel">Autorizado</span>
                        <input type="date" class="form-control" id="idAutorizado"
                                v-bind="ordemServico.dtAutrz"
                                aria-label="Autorizado" aria-labelledby="AutorizadoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="ProntoLabel">Pronto</span>
                        <input type="date" class="form-control" id="idPronto"
                                v-bind="ordemServico.dtPrnto"
                                aria-label="Pronto" aria-labelledby="ProntoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="SaidaLabel">Saída</span>
                        <input type="date" class="form-control" id="idSaida"
                                v-bind="ordemServico.dtSaida"
                                aria-label="Saida" aria-labelledby="SaidaLabel">
                    </div>
                </div>
            </div>
        </div>
        <div class="submit">
            <button type="button" class="btn btn-primary">Salvar</button>
        </div>
    </div>
</template>

<script>
// Vue imports
import AparelhoForm from './AparelhoForm.vue'
import ClienteForm from './ClienteForm.vue'
import SubmitButtons from './SubmitButtons.vue'
// DB Imports
import AuthenticationService from '@/services/AuthenticationService'

export default {
    name: 'OrdemServicoForm',
    components: {
        ClienteForm,
        AparelhoForm,
        SubmitButtons
    },
    data() {
        return {
            cliente: {
                id: null,
                nome: "",
                cpf: "",
                telA: "",
                telB: "",
                estado: "",
                cidade: "",
                rua: "",
                numero: null,
                tpMoradia: 0,
                string: "" 
            },
            aparelho: {
                tipo_aprlho: "",
                marca: "",
                modelo: ""
            },
            ordemServico: {
                numero: "",
                idCustom: "",
                sn: "",
                dtEntrd: "",
                dtPromt: "",
                dtOrcmt: "",
                dtAutrz: "",
                dtPrnto: "",
                dtSaida: "",
                reclamacao: "",
                diagnostico: "",
                servico: "",
                acessorios: "",
                observacao: ""
            },
            clienteEdit: false,
            clienteUpdate: false,
            addClienteBtnTxt: "+"
        }
    },
    methods: {
        toggleNewCliente() {
            this.clienteEdit = !this.clienteEdit
            this.addClienteBtnTxt = this.addClienteBtnTxt == "+" ? "x" : "+"
        },
        postCliente() {
            AuthenticationService.register({
                nome: this.cliente.nome,
                cpf: this.cliente.cpf,
                telefone: this.cliente.telA
            })    
        }
    }
}
</script>

<style>
    .submit {
        margin-top: 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: right;
    }
</style>