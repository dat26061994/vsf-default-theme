<template>
    <div :id="id" :class="'modal fade '+ type" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-aside" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header" />
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    
                    <slot name="body" />

                </div>
                <div class="modal-footer">
                    <slot name="footer" />
                </div>
            </div>
        </div> <!-- modal-bialog .// -->
    </div> <!-- modal.// -->
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'default'
        },
    }
}
</script>