<template>
<div>
    <BannerPage id="home" />
    <Carculadora id="calculadora"   />
    <Solicitud id="solicitud"   /> 
</div>
</template>

<script>
import BannerPage from '../components/BannerPage'
import Nosotros from '../components/Nosotros'
import InfoPrestamos from '../components/InfoPrestamos'
import Carculadora from '../components/Carculadora'
import Solicitud from '../components/Solicitud'

export default {
    components: {
        BannerPage,
        Carculadora,
        Solicitud
    },
    data() {
        return {
          
        }
    }
}
</script>

<style>

</style>
