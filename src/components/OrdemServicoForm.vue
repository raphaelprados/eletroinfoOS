<template>
    <div class="container-fluid">
        <h1>Dados Básicos</h1>
        <div class="d-flex flex-column" style="padding: 10px">
            <div class="d-flex flex-row">
                <div class="input-group">
                    <span class="input-group-text" id="DataEntradaLabel">Entrada</span>
                    <input type="date" class="form-control" id="IdDataEntrada" 
                            v-bind="ordemServico.dataEntrada"
                            style="margin-right: 10px" aria-label="DataEntrada" aria-describedby="DataEntradaLabel">
                </div>            
                <div class="input-group">
                    <span class="input-group-text" id="CpfLabel">CPF</span>
                    <input type="text" class="form-control" id="IdCpf"
                            v-bind="cliente.cpf"
                            style="margin-right: 10px" aria-label="CPF" aria-describedby="CpfLabel">
                </div>
                <div class="input-group">
                    <span class="input-group-text" id="TelefoneLabel">Telefone/ZAP</span>
                    <input type="text" class="form-control" id="IdTelefone"
                            v-bind="cliente.telefone"
                            aria-label="Telefone" aria-labelledby="TelefoneLabel">
                </div>
            </div>
        </div>

        <h1>Dados do Cliente</h1>
        <cliente-form/>

        <h1>Dados do Aparelho</h1>
        <div class="input-group">
            <div class="d-flex flex-row">
                <div class="d-flex flex-column">
                    <aparelho-form :showNumeroSerie="true"/>
                    <div style="margin-left: 20px; margin-right: 20px">
                        <div class="input-group" style="margin-bottom: 10px">
                            <span class="input-group-text" id="ReclamacaoLabel">Reclamacao</span>
                            <input type="text" class="form-control" id="IdReclamacao"
                                    v-bind="ordemServico.reclamacao"
                                    aria-label="Reclamacao" aria-describedby="ReclamacaoLabel">
                        </div>
                        <div class="input-group" style="margin-bottom: 10px" >
                            <span class="input-group-text" id="TelefoneLabel">Observações</span>
                            <input type="text" class="form-control" id="IdTelefone"
                                    v-bind="ordemServico.observacoes"
                                    aria-label="Telefone" aria-labelledby="TelefoneLabel">
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
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="PrometidoLabel">Prometido</span>
                        <input type="date" class="form-control" id="idPrometido"
                                v-bind="ordemServico.dataPrometido"
                                aria-label="Prometido" aria-labelledby="PrometidoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="OrcamentoLabel">Orcamento</span>
                        <input type="date" class="form-control" id="idOrcamento"
                                v-bind="ordemServico.dataOrcamento"
                                aria-label="Orcamento" aria-labelledby="OrcamentoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="AutorizadoLabel">Autorizado</span>
                        <input type="date" class="form-control" id="idAutorizado"
                                v-bind="ordemServico.dataAutorizado"
                                aria-label="Autorizado" aria-labelledby="AutorizadoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="ProntoLabel">Pronto</span>
                        <input type="date" class="form-control" id="idPronto"
                                v-bind="ordemServico.dataPronto"
                                aria-label="Pronto" aria-labelledby="ProntoLabel">
                    </div>
                    <div class="input-group" style="margin-bottom: 10px">
                        <span class="input-group-text" id="SaidaLabel">Saída</span>
                        <input type="date" class="form-control" id="idSaida"
                                v-bind="ordemServico.dataSaida"
                                aria-label="Saida" aria-labelledby="SaidaLabel">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AparelhoForm from './AparelhoForm.vue'
import ClienteForm from './ClienteForm.vue'

export default {
    name: 'OrdemServicoForm',
    data() {
        return {
            cliente: {
                nome: "",
                cpf: "",
                telefone: "",
                estado: "",
                cidade: "",
                rua: "",
                numero: null,
                tipo_moradia: 0
            },
            aparelho: {
                marca: "",
                modelo: ""
            },
            ordemServico: {
                numero: "",
                idPersonalizado: "",
                serialNumber: "",
                dataEntrada: "",
                dataPrometido: "",
                dataOrcamento: "",
                dataAutorizado: "",
                dataPronto: "",
                dataSaida: "",
                reclamacao: "",
                diagnostico: "",
                servico: "",
                acessorios: "",
                observacoes: ""
            }
        }
    }, 
    components: {
        ClienteForm,
        AparelhoForm
    }
}
</script>

<style>
    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
</style>