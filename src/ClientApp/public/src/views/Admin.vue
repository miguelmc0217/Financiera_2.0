<template>
<div>
    <Panel id="Panel" />
    <Carculadora id="calculadora" style="height: 100vh"  />
    <Solicitud id="solicitud"   />
    <ListaSolicitudes id="solicitudes"   />
    <Ajustes id="ajustes" style="height: 100vh"   />
    <Footer />
</div>
</template>

<script>


import Solicitud from '../components/Solicitud'
import Carculadora from '../components/Carculadora'
import Panel from '../components/Panel'
import ListaSolicitudes from '../components/ListaSolicitudes'
import Ajustes from '../components/Ajustes'
import Footer from '../components/Footer'

export default {
    components: {
        Panel,
        Solicitud,
        Carculadora,
        ListaSolicitudes,
        Ajustes,
        Footer
    },
    data() {
        return {
          
        }
    }
}
</script>

<style>

</style>
