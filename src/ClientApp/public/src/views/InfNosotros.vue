<template>
<div>
    <BannerPage id="home" />
    <Nosotros id="nosotros"  />
    <InfoPrestamos id="InfoPrestamos"   />
   
    
</div>
</template>

<script>
import BannerPage from '../components/BannerPage'
import Nosotros from '../components/Nosotros'
import InfoPrestamos from '../components/InfoPrestamos'


export default {
    components: {
        BannerPage,
        Nosotros,
        InfoPrestamos
    },
    data() {
        return {
          
        }
    }
}
</script>

<style>

</style>
