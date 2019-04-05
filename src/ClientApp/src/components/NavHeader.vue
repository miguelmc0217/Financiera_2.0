</<template>

<v-toolbar v-if="mostrar" app color="#059FDE" class="Bar" style="padding:0px !important">
    <v-spacer></v-spacer>
    <v-toolbar-title class="headline text-uppercase ">
        <img class="logo mt-1"
          src="../assets/img/comple.png"
        ></img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
</v-toolbar>
</template>

<script>
import Login from '../views/Login.vue';
import Registrate from '../views/Registrate.vue';
import {mapActions, mapMutations , mapState} from 'vuex'
export default {
data() {
    return {
         vista: this.$route.fullPath,
         mostrar: true,
    }
},
methods: {
  
 },
 computed: {
     ...mapState('login',['usuario'])
     
 },

components: {
       Login,
       Registrate
    },
}
</script>

<style>
 .Bar{
        display: none !important;
        z-index: 100 !important;
        box-shadow: none !important;
    }

@media (max-width:1024px) {
    .Bar{
        display:block !important;
        z-index: 100 !important;
        box-shadow: none !important;
    }
}


.v-toolbar__content{
    height: 60px !important;
    z-index: 201 !important;
}
.v-toolbar__content, .v-toolbar__extension {
 z-index: 201 !important;
    padding: 24px 0 24px 60px !important;
}
.v-btn{
     z-index: 201 !important;
    text-transform: capitalize !important;
    font-size: 13px !important;
}
</style>
