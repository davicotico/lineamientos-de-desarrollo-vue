# Componentes

## El nombre de los componentes

* Siguiendo los lineamientos de Vue.js, el nombre de los archivos es CamelCase con más de una palabra.
* Usar los componentes sin tag de cierre (<algun-componente />) si el componente no tiene slots.
* Usar los componentes con tag de cierre (<algun-componente></algun-componente>) si el componente tiene slots, incluso si no se está usando slot alguno.

## Crear *wrappers* de componentes comunes

**El problema**

Componentes no estandarizados en la aplicación, en algunos formularios el componente input está todo en mayusculas, en otros no. El componente calendario en algunos lugares de la aplicación está perfectamente configurado, en otros no y por ahí va.

**La solución**

Crear componentes comunes unicos que sean usados en toda la aplicacion y no crearlos individualmente en los modulos o páginas.

Crear una biblioteca de componentes.

Cada componente tiene que tener las caracteristicas estandares para toda la aplicacion. 

components/AppInput.vue

```vue
<script setup>
const model = defineModel();
</script>
<template>
  <input type="text" class="form-control" v-model="model" />
</template>
```

Forma de uso:

```vue
<script setup lang="ts">
const form = reactive<Persona>({nombre: '', ...});
</script>

<template>
  <app-input v-model="form.nombre" />
</template>
```
