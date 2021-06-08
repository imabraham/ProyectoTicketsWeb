<template>

    <div class="container">
        
        <table class="table">
            <thead >
                <tr v-for="(titulo,indexA) in titulos" :key="indexA">
                    <th scope="col">{{titulo}}</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) in items" :key="index">
                <tr  v-for="(formato,index) in formatos" :key="index">
                    <td >{{item[formato]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>

export default {
  name: 'TablaComponent',
  props:{
      titulos:Array,
      items: Array,
      formatos: Array
  }
}
</script>