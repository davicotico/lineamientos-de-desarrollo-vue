# Errores comunes y cómo evitarlos

## Utilizar el index del array como key del v-for

**Esto esta mal:**

```vue
<li v-for="(item, index) in items" :key="index">
  ...
</li>
```

Utilizar el index como key es causa de bugs cuando por ejemplo el array cambia de orden.

**Esto esta bien:**

```vue
<li v-for="(item, index) in items" :key="item.id">
  ...
</li>
```

## Usar variables no reactivas como dependencia de un computed

Si una variable no reactiva cambia de valor, el computed no se dispara.

```js
const cookiesAccepted = commputed(() => {
    return localStorage.getItem('cookiesAccepted');
});
```

### Intentar cambiar el valor de una propiedad

Las propiedades que se reciben son de solo lectura.

```vue
<script setup lang="ts">
  defineProps<{
    algunaPropiedad: string;
  }>();
</script>
<template>
  <input type+"text" v-model="algunaPropiedad">
</template>
```

**Solución**

* Crear una variable local para hacer los cambios
* Muy posible que sea mejor usar defineModel(), es decir, two-way data binded.
