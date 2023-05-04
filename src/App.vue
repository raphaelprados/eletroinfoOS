<template>
    <nav class="nav">
            <a class="nav-link">
                <router-link to="/">Home</router-link>
            </a>
            <a class="nav-link">
                <router-link to="/ordemservico">Ordens de Servico</router-link>
            </a>
            <a class="nav-link">
                <router-link to="/cliente">Cliente</router-link>
            </a>
            <a class="nav-link">
                <router-link to="/aparelho">Aparelho</router-link>
            </a>
    </nav>
    <router-view/>
</template>

<script>
export default {
    setup() {
        
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    background-color: rgb(241, 241, 241);
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
