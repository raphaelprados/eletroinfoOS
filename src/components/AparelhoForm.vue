<template>
    <div class="d-flex flex-column" style="padding: 10px;">
        <h1>Dados do Aparelho</h1>
        <div class="d-flex flex-column">
            <div class="d-flex flex-row" style="margin-bottom: 10px">
                <div class="input-group">
                    <span class="input-group-text" id="TipoLabel">Tipo</span>
                    <input type="text" class="form-control" id="IdTipo" 
                            v-bind="tipo"
                            style="margin-right: 10px" aria-label="Tipo" aria-describedby="TipoLabel">
                </div>            
                <div class="input-group">
                    <span class="input-group-text" id="MarcaLabel">Marca</span>
                    <input type="text" class="form-control" id="IdMarca"
                            v-bind="marca"
                            aria-label="Marca" aria-describedby="MarcaLabel">
                </div>
            </div>
            <div class="d-flex flex-row">
                <div class="input-group">
                    <span class="input-group-text" id="ModeloLabel">Modelo</span>
                    <input type="text" class="form-control" id="IdModelo"
                            v-bind="modelo"
                            aria-label="Modelo" aria-labelledby="ModeloLabel">
                </div>
                <div class="input-group" v-if="showNumeroSerie" style="margin-left: 10px">
                    <span class="input-group-text" id="NumSerieLabel">S/N</span>
                    <input type="text" class="form-control" id="IdNumSerie"
                            v-bind="numeroSerie" 
                            aria-label="NumSerie" aria-labelledby="NumSerieLabel">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AparelhoForm',
    data() {
        return {
            marca: "",
            modelo: "",
            tipo: "",
            numeroSerie: ""
        }
    },
    props: {
        showNumeroSerie: false
    }
}
</script>

<style>

</style>