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
        },
        cancelar() {
            this.$emit('cancel')
        }
    }
}
</script>

<style>
    .custom-modal {
        width: 80%;
        height: 90%;
        padding: 20px;
        margin: 20px auto;
        background: white;
        border-radius: 10px;
        overflow: auto;
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
    .modal.fade {
        background: rgba(0, 0, 0, 0.5);
    }
    .modal-backdrop.fade {
        opacity: 0;
    }
    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
    .date-field {
        max-width: 105px;
    }
</style>