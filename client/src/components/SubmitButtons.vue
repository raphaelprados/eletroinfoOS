<template>
    <div class="submit">
        <button class="btn btn-light" @click="cancelar">Cancelar</button>
        <button class="btn btn-primary" @click="salvar">Salvar</button>
    </div>
    
</template>

<script>
export default {
    methods: {
        salvar() {
            this.$emit('save')
        },
        cancelar() {
            console.log("ok");
            this.$emit('cancel')
        }
    }
}
</script>

<style>
    .submit {
        display: flex;
        align-items: center;
        justify-content: right;
        padding: 10px;
    }
</style>