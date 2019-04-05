<template>
<div>
    <Panel id="Panel" />
    <Carculadora id="calculadora" style="height: 100vh"  />
    <Solicitud id="solicitud"   />
    <!-- <ListaSolicitudes id="solicitudes"   /> -->
    <Ajustes id="ajustes" style="height: 100vh"   />
  
</div>
</template>

<script>


import Solicitud from '../components/Solicitud'
import Carculadora from '../components/Carculadora'
import Panel from '../components/Panel'

import Ajustes from '../components/Ajustes'


export default {
    components: {
        Panel,
        Solicitud,
        Carculadora,
        Ajustes
    },
    data() {
        return {
          
        }
    }
}
</script>

<style>

</style>
