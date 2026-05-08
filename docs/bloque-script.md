# El bloque script

* El bloque script debe ser ubicado como primer bloque del archivo .vue
* Utilizar Composition API con setup
* Luego de aplicar el formateado del código, no debe exceder las 300 líneas. Si sobrepasa se debe considerar la creación de funciones y el uso de estas mediante import.

El orden del código es el siguiente:

1. Imports
2. Definición de Constantes
3. Definición de propiedades defineProps
4. Definición de eventos defineEmits
5. Definición de exposed defineExposed
6. Definición de models defineModel
7. Composables (useRouter, etc.)
8. Variables reactivas (ref/reactive)
9. Hooks (onMounted, onUnmounted, etc.)
10. Funciones locales
