<template>

    <div>
        <label :for="id" class="form-label">{{titulo}}</label>
        <input
            :id="id"
            :value="value"
            :type="tipo"
            :name="nombre"
            :maxlength="maxlength"
            :disabled="disabled"
            :placeholder="placeholder"
            class="form-control"
            @input="$emit('input', $event.target.value)">
    </div>
    
</template>
<script>

export default {
  name: 'InputComponent',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    titulo: String,
    value: [String, Number],
    tipo: {
      type: String,
      default: "text",
    },
    maxlength: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Ingresa la información",
    },
    nombre:{
      type:String
    }
  }
}
</script>