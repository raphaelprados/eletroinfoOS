<template>
    <!-- <table class="table">
        <thead>
            <tr v-for="campo in campos" :key="campo">
                <th scope="col">{{ campo }}</th>
            </tr>
            <tbody v-for="dado in dados" :key="dado.id">
                <tr></tr>
            </tbody>
        </thead>
    </table> -->
    <div class="tabela-clientes">
        <ul class="list-group">
            <li class="list-group-item">
                <div class="d-flex flex-row">
                    <div class="flex-column">
                        <span class="dot"></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        campos: Array,
        dados: Array
    }
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
    .tabela-clientes {
        padding: 10px
    }

    .linha-cliente {
        border: 1px solid gray;
    }
</style>