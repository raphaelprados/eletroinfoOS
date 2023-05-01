<template>
    <button type="button" class="btn btn-primary">Novo Cliente</button>
    <div class="tabela-clientes">
        <ul class="list-group">
            <div class="d-flex flex-row">
                <div class="flex-column">
                    <span class="dot"></span>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {

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
</style>