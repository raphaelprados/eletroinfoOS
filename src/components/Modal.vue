<template>
    <div class="backdrop" @click.self="closeModal()">
        <div class="custom-modal">
            <div class="modal-header">
                <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal(e) {
            this.$emit('close')   
        }
    }
}
</script>

<style>
    .custom-modal {
        width: 90%;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal-header {
        display: flex;
        align-items: center;
        justify-content: right;
        padding: 10px;
    }
    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
</style>