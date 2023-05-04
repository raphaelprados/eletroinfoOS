<template>
    <table class="table">
        <thead>
            <tr v-for="campo in campos" :key="campo">
                <th scope="col">{{ campo }}</th>
            </tr>
            <tbody v-for="dado in dados" :key="dado.id">
                <tr></tr>
            </tbody>
        </thead>
    </table>
</template>

<script>
export default {
    name: Listagem,
    props: {
        campos: Array,
        dados: Object
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>