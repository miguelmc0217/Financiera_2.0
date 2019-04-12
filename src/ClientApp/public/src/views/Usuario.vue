<template>
<div>
    <BannerPage id="home" style="height: 100vh" />
    <Carculadora id="calculadora"   />
    <Solicitud id="solicitud"   />
    <EstadoPersonal id="Prestamos"   />
    
</div>
</template>

<script>
import BannerPage from '../components/BannerPage'
import EstadoPersonal from '../components/EstadoPersonal'
import Solicitud from '../components/Solicitud'
import Carculadora from '../components/Carculadora'
import Perfil from '../components/Perfil'
import Footer from '../components/Footer'

export default {
    components: {
        BannerPage,
        EstadoPersonal,
        Solicitud,
        Carculadora
    },
    data() {
        return {
          
        }
    }
}
</script>

<style>

</style>
