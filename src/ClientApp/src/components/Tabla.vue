<template>
<div class="contenedor">
    <table cellspacing="0">
      <tr>
        <th v-for="(cabe, key) in cabecera" :key="key">{{ cabe }}</th>
      </tr>
      <tr v-for="(prestamo, key) in data" :key="key">
            <td >{{ prestamo.nombre  }}</td>
            <td >{{ formatPrice(prestamo.monto)  }}</td>
            <td >{{ prestamo.CantidadCuotas }}</td>
            <td >{{ prestamo.CuotasPagas }}</td>
            <td >{{ prestamo.CuotasRestantes }}</td>
            <td >{{ prestamo.Estado }}</td>
            <td >{{ prestamo.DiaPago }}</td>
            <td >{{ prestamo.Termina }}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    props:['cabecera', 'data'],
    data() {
        return {
          
        }
    },
    methods: {
       formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    },

}
</script>

<style>
.contenedor {
    width: 100%;
    height: 400px !important;
    overflow-y: scroll;
    

}
.contenedor::-webkit-scrollbar {
    width: 8px;
    background-color: #212121;
}

.contenedor::-webkit-scrollbar-track {
    background-color: #cecece;
}

.contenedor::-webkit-scrollbar-thumb {
    background-color: #474545;
}
table {
    border: 1px solid #d3d3d3;
    background: #059FDE;
    width: 99%;
    height: 400px !important;
    margin: 0px 10px;
    border-radius:5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    color: #fff;
}
th, td {
    padding:18px 28px 18px; 
 }
th {
    padding-top:22px; 
   
    background:#212121;
    color: #fff;
    }
td {
    border-top:1px solid #d3d3d3;
     border-right:1px solid #d3d3d3;
}
tr.odd-row td {
    background:#f6f6f6;
    }
td.first, th.first {
    text-align:left
    }
td.last {
    border-right:none;
    }

/* td {
    background: -moz-linear-gradient(100% 25% 90deg, #fefefe, #f9f9f9);
    background: -webkit-gradient(linear, 0% 0%, 0% 25%, from(#f9f9f9), to(#fefefe));
}
tr.odd-row td {
    background: -moz-linear-gradient(100% 25% 90deg, #f6f6f6, #f1f1f1);
    background: -webkit-gradient(linear, 0% 0%, 0% 25%, from(#f1f1f1), to(#f6f6f6));
}
th {
    background: -moz-linear-gradient(100% 20% 90deg, #212121, #212121);
    background: -webkit-gradient(linear, 0% 0%, 0% 20%, from(#ededed), to(#e8eaeb));
} */
tr:first-child th.first {
    -moz-border-radius-topleft:5px;
    -webkit-border-top-left-radius:5px; /* Saf3-4 */
}
tr:first-child th.last {
    -moz-border-radius-topright:5px;
    -webkit-border-top-right-radius:5px; /* Saf3-4 */
}
tr:last-child td.first {
    -moz-border-radius-bottomleft:5px;
    -webkit-border-bottom-left-radius:5px; /* Saf3-4 */
}
tr:last-child td.last {
    -moz-border-radius-bottomright:5px;
    -webkit-border-bottom-right-radius:5px; /* Saf3-4 */
}

</style>
