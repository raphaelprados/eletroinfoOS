<template>
    <div class="nota">
        <div class="d-flex flex-row">
            <div class="nota-header">
                <button type="button" class="btn-close" aria-label="Close" @click="rmvNota"></button>
            </div>
        </div>
        <div class="d-flex flex-row">
            <div class="flex-column" style="margin-right: 30px;">
                <textarea class="form-control" aria-label="Observações" v-bind="texto"
                            style="height: 250px; width: 250px;"></textarea>
            </div>
            <div class="flex-column">
                <div class="flex-row">
                    <button class="sqr_button" ></button>
                </div>
                <div class="flex-row">
                    <button class="sqr_button" ></button>
                </div>
                <div class="flex-row">
                    <button class="sqr_button" ></button>
                </div>
                <div class="flex-row">
                    <button class="sqr_button" ></button>
                </div>
                <div class="flex-row">
                    <button class="sqr_button" ></button>
                </div>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        texto: String,
        color: String   
    },
    methods: {
        rmvNota() {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .nota {
        width: 400px;
        border: 1px solid black;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sqr_button {
        width: 50px;
        height: 50px;
    }
    .nota-header {
        
    }
</style>