<template>
<div>
    <v-btn fab large depressed color="#059FDE" class="btnMenu" @click="toggleHide()">  
        <img src="https://img.icons8.com/material-outlined/30/ffffff/menu.png">
    </v-btn>

   <v-btn  v-if="drawer.hide" fab small depressed color="#212121" @click="toggleMiniDrawer()" :style=" drawer.mini ? 'left: 42px !important;' : 'left: 200px !important; transform: rotate(180deg);'">  
            <img src="https://img.icons8.com/ios/15/ffffff/forward-filled.png">
    </v-btn>
    <v-navigation-drawer v-if="drawer.hide" :clipped="drawer.clipped" :permanent="drawer.permanent" :mini-variant="drawer.mini" v-model="drawer.open"    dark app :style=" drawer.mini ? 'width: 60px;  background:#059FDE; ' : 'width: 220px; background:#059FDE; '">
        
    <v-list-tile   >
            <v-list-tile-action v-scroll-to="'#home'" ><img class="iso"  src="../assets/img/iso2.png"></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title v-scroll-to="'#home'" ><img class="letras"  src="../assets/img/letra2.png"></v-list-tile-title>
            </v-list-tile-content>
    </v-list-tile> 
    <v-list style="cursor: pointer !important;">
        <v-list-tile v-if="vista == '/admin'" >
            <v-list-tile-action  v-scroll-to="'#Panel '" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="20" height="20"
                                        viewBox="0 0 192 192"
                                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M49.92,26.88c-2.115,0 -3.84,1.725 -3.84,3.84c0,2.115 1.725,3.84 3.84,3.84h25.2l-66.36,66.36c-1.5,1.5 -1.5,4.02 0,5.52c0.75,0.75 1.77,1.08 2.76,1.08c0.99,0 2.01,-0.33 2.76,-1.08l66.36,-66.36v25.2c0,2.115 1.725,3.84 3.84,3.84c2.115,0 3.84,-1.725 3.84,-3.84v-38.4zM130.56,42.24v149.76h53.76v-149.76zM69.12,92.16v99.84h53.76v-99.84zM7.68,134.4v57.6h53.76v-57.6z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
            <v-list-tile-title v-scroll-to="'#Panel'" >Resumen</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="vista == '/admin'"></v-divider>
         <v-list-tile v-if="vista == '/admin'" v-scroll-to="'#solicitudes'" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="20" height="20"
                                viewBox="0 0 192 192"
                                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M3.84,0c-2.115,0 -3.84,1.725 -3.84,3.84v46.08c0,2.115 1.725,3.84 3.84,3.84h46.08c2.115,0 3.84,-1.725 3.84,-3.84v-46.08c0,-2.115 -1.725,-3.84 -3.84,-3.84zM39.36,12.84l5.76,5.04l-19.8,22.08l-16.32,-14.04l5.04,-5.76l10.56,9zM76.8,23.04v7.68h115.2v-7.68zM3.84,69.12c-2.115,0 -3.84,1.725 -3.84,3.84v46.08c0,2.13 1.725,3.84 3.84,3.84h46.08c2.115,0 3.84,-1.71 3.84,-3.84v-46.08c0,-2.115 -1.725,-3.84 -3.84,-3.84zM39.36,81.96l5.76,5.04l-19.8,22.08l-16.32,-14.04l5.04,-5.76l10.56,9zM76.8,92.16v7.68h115.2v-7.68zM3.84,138.24c-2.115,0 -3.84,1.71 -3.84,3.84v46.08c0,2.13 1.725,3.84 3.84,3.84h46.08c2.115,0 3.84,-1.71 3.84,-3.84v-46.08c0,-2.13 -1.725,-3.84 -3.84,-3.84zM76.8,161.28v7.68h115.2v-7.68z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Ver solicitudes</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="vista != '/usuario' && vista != '/admin'" @click="despegableH()">
            <v-list-tile-action  v-scroll-to="'#home'" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="20" height="20"
                    viewBox="0 0 192 192"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><path d="M96,4.035c-0.8352,0 -1.6671,0.2649 -2.3775,0.8025l-88.32,68.9325c-1.6512,1.3056 -1.9581,3.7179 -0.6525,5.4075c1.3056,1.6512 3.7179,1.9581 5.4075,0.6525l5.3025,-4.14v100.95c0,2.112 1.728,3.84 3.84,3.84h53.76v-69.12h46.08v69.12h53.76c2.112,0 3.84,-1.728 3.84,-3.84v-100.95l5.3025,4.14c0.7296,0.5376 1.5327,0.81 2.3775,0.81c1.152,0 2.262,-0.5025 3.03,-1.4625c1.3056,-1.6896 0.9987,-4.1019 -0.6525,-5.4075l-88.32,-68.9325c-0.7104,-0.5376 -1.5423,-0.8025 -2.3775,-0.8025zM134.4,19.2v4.035l23.04,17.97v-22.005z"></path></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title v-scroll-to="'#home'" >Home <img  src="https://img.icons8.com/ios/12/ffffff/forward-filled.png"  :style="despliegue.despegableh ? 'transform: rotate(270deg); margin-left:8px !important' : ' transform: rotate(90deg); margin-left:8px !important'"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
            <div data-aos="fade-right" data-aos-duration="1500" v-if=" despliegue.despegableh == true " :style=" drawer.mini ? 'padding-left: 0px !important;' : 'padding-left: 35px !important;'" >
             
        <v-list-tile v-if="vista != '/usuario' && vista != '/admin'"  v-scroll-to="'#solicitud'" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="20" height="20"
                        viewBox="0 0 192 192"
                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M10.8,0c-5.925,0 -10.8,4.875 -10.8,10.8v16.08h168.96v-16.08c0,-5.925 -4.875,-10.8 -10.8,-10.8zM0,34.56v119.04c0,2.13 1.725,3.84 3.84,3.84h104.4l-4.92,4.92c-0.465,0.465 -0.9,1.05 -1.08,1.68l-6.48,23.04c-0.375,1.335 -0.015,2.73 0.96,3.72c0.735,0.75 1.74,1.2 2.76,1.2c0.33,0 0.63,-0.03 0.96,-0.12l23.04,-6.12c0.645,-0.18 1.2,-0.6 1.68,-1.08l60.72,-60.24c0.39,-0.375 0.645,-0.855 0.84,-1.32l0.72,-0.6c6.15,-6.15 6.15,-16.17 0,-22.32c-4.995,-4.995 -12.54,-5.88 -18.48,-2.76v-62.88zM26.88,57.6h15.36v7.68h-15.36zM53.76,57.6h88.32v7.68h-88.32zM26.88,76.8h15.36v7.68h-15.36zM53.76,76.8h88.32v7.68h-88.32zM26.88,96h15.36v7.68h-15.36zM53.76,96h88.32v7.68h-88.32zM168,108.48l11.52,11.52l-59.04,58.56l-11.16,-10.92l0.12,-0.48zM26.88,115.2h15.36v7.68h-15.36zM53.76,115.2h72.96v7.68h-72.96z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Crear solicitud</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="vista != '/usuario' && vista != '/admin'" v-scroll-to="'#calculadora'" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="20" height="20"
                                    viewBox="0 0 192 192"
                                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M49.92,15.36c-2.115,0 -3.84,1.725 -3.84,3.84v72.96h-23.04c-2.115,0 -3.84,1.725 -3.84,3.84v76.8c0,2.115 1.725,3.84 3.84,3.84h61.44c2.115,0 3.84,-1.725 3.84,-3.84v-7.68h76.8c2.115,0 3.84,-1.725 3.84,-3.84v-142.08c0,-2.115 -1.725,-3.84 -3.84,-3.84zM69.12,46.08h57.6v7.68h-57.6zM134.4,46.08h11.52v7.68h-11.52zM69.12,61.44h49.92v7.68h-49.92zM134.4,61.44h11.52v7.68h-11.52zM69.12,76.8h57.6v7.68h-57.6zM134.4,76.8h11.52v7.68h-11.52zM96,92.16h30.72v7.68h-30.72zM134.4,92.16h11.52v7.68h-11.52zM26.88,99.84h53.76v69.12h-53.76zM34.56,107.52v7.68h38.4v-7.68zM96,107.52h23.04v7.68h-23.04zM134.4,107.52h11.52v7.68h-11.52zM34.56,122.88v7.68h7.68v-7.68zM49.92,122.88v7.68h7.68v-7.68zM65.28,122.88v7.68h7.68v-7.68zM96,122.88h30.72v7.68h-30.72zM134.4,122.88h11.52v7.68h-11.52zM34.56,138.24v7.68h7.68v-7.68zM49.92,138.24v7.68h7.68v-7.68zM65.28,138.24v7.68h7.68v-7.68zM34.56,153.6v7.68h7.68v-7.68zM49.92,153.6v7.68h7.68v-7.68zM65.28,153.6v7.68h7.68v-7.68z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Carculadora</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </div>
        <v-divider v-if="vista != '/usuario' && vista != '/admin'" ></v-divider>

        <v-list-tile v-if="vista != '/usuario' && vista != '/admin'"  @click="despegableN()" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 192 192"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><path d="M157.44,15.36h-122.88c-10.5984,0 -19.2,8.6016 -19.2,19.2v122.88c0,10.5984 8.6016,19.2 19.2,19.2h122.88c10.5984,0 19.2,-8.6016 19.2,-19.2v-122.88c0,-10.5984 -8.6016,-19.2 -19.2,-19.2zM149.76,149.76h-49.92c-2.11968,0 -3.84,-1.72032 -3.84,-3.84v-11.52c-0.0768,0 -0.1152,0 -0.1152,0h-26.7648c-2.11968,0 -3.84,-1.72032 -3.84,-3.84v-3.4176c0,0 0,-4.0704 0,-8.1024h-23.04c-2.11968,0 -3.84,-1.72032 -3.84,-3.84v-24.96c0,-7.4112 6.8736,-13.44 15.36,-13.44c8.256,0 15.0144,5.7216 15.36,12.864c3.7632,-5.4528 10.0992,-9.024 17.28,-9.024c5.376,0 10.2528,1.9968 13.9776,5.2992c2.6496,2.304 4.6848,5.2992 5.9136,8.6784c4.992,-3.9168 11.4432,-6.2976 18.5088,-6.2976c15.8976,0 28.8,12.0192 28.8,26.88v30.72c0,2.11968 -1.72032,3.84 -3.84,3.84zM46.08,51.84c0,-5.2992 4.3008,-9.6 9.6,-9.6c5.2992,0 9.6,4.3008 9.6,9.6c0,5.2992 -4.3008,9.6 -9.6,9.6c-5.2992,0 -9.6,-4.3008 -9.6,-9.6zM76.8,53.76c0,-6.3744 5.1456,-11.52 11.52,-11.52c6.3744,0 11.52,5.1456 11.52,11.52c0,6.3744 -5.1456,11.52 -11.52,11.52c-6.3744,0 -11.52,-5.1456 -11.52,-11.52zM111.36,57.6c0,-8.4864 6.8736,-15.36 15.36,-15.36c8.4864,0 15.36,6.8736 15.36,15.36c0,8.4864 -6.8736,15.36 -15.36,15.36c-8.4864,0 -15.36,-6.8736 -15.36,-15.36z"></path></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Nosotros <img  src="https://img.icons8.com/ios/12/ffffff/forward-filled.png"  :style=" despliegue.despegablen ? 'transform: rotate(270deg); margin-left:8px !important' : ' transform: rotate(90deg); margin-left:8px !important'"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
         <div data-aos="fade-right" data-aos-duration="1500" v-if=" despliegue.despegablen == true " :style=" drawer.mini ? 'padding-left: 0px !important;' : 'padding-left: 35px !important;'" >
            <v-list-tile  v-if="vista != '/usuario' && vista != '/admin'"     v-scroll-to="'#mision'" >
                <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="20" height="20"
                    viewBox="0 0 192 192"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M96,0c-21.18,0 -38.4,17.22 -38.4,38.4c0,4.11 0.72,8.01 1.92,11.76c16.29,2.955 28.125,6.975 35.4,9.84l1.08,0.36l1.08,-0.36c7.275,-2.865 19.14,-6.765 35.4,-9.72c1.215,-3.78 1.92,-7.815 1.92,-11.88c0,-21.18 -17.22,-38.4 -38.4,-38.4zM11.52,53.76c-2.115,0 -3.84,1.725 -3.84,3.84v23.04h3.84c10.77,0 19.2,8.43 19.2,19.2v7.68c0,10.77 -8.43,19.2 -19.2,19.2h-3.84v38.4c0,2.13 1.725,3.84 3.84,3.84c45.48,0 73.965,16.845 80.64,21.24v-123.12c-11.19,-4.41 -39,-13.32 -80.64,-13.32zM180.48,53.76c-41.64,0 -69.45,8.91 -80.64,13.32v123.12c6.675,-4.395 35.175,-21.24 80.64,-21.24c2.13,0 3.84,-1.71 3.84,-3.84v-38.4h-3.84c-10.77,0 -19.2,-8.43 -19.2,-19.2v-7.68c0,-10.77 8.43,-19.2 19.2,-19.2h3.84v-23.04c0,-2.115 -1.71,-3.84 -3.84,-3.84zM7.68,88.32c-4.23,0 -7.68,3.45 -7.68,7.68v15.36c0,4.23 3.45,7.68 7.68,7.68h3.84c6.525,0 11.52,-4.995 11.52,-11.52v-7.68c0,-6.525 -4.995,-11.52 -11.52,-11.52zM180.48,88.32c-0.81,0 -1.635,0.09 -2.4,0.24c-5.325,1.05 -9.12,5.565 -9.12,11.28v7.68c0,6.525 4.995,11.52 11.52,11.52h3.84c4.23,0 7.68,-3.45 7.68,-7.68v-15.36c0,-4.23 -3.45,-7.68 -7.68,-7.68z"></path></g></g></g></svg></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Mision</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
             <v-list-tile  v-if="vista != '/usuario' && vista != '/admin'"  v-scroll-to="'#vision'"  >
                <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 192 192"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M72.72,49.32c-38.46,10.38 -66.525,42.54 -67.92,44.16c-1.23,1.44 -1.23,3.6 0,5.04c1.665,1.935 41.235,47.4 91.2,47.4c49.965,0 89.535,-45.465 91.2,-47.4c1.23,-1.44 1.23,-3.6 0,-5.04c-1.395,-1.62 -29.46,-33.765 -67.92,-44.16c11.385,7.56 18.96,20.46 18.96,35.16c-0.015,23.325 -18.915,42.24 -42.24,42.24c-23.325,0 -42.225,-18.915 -42.24,-42.24c0,-14.7 7.575,-27.6 18.96,-35.16zM96,65.28c-10.605,0 -19.2,8.595 -19.2,19.2c0,10.605 8.595,19.2 19.2,19.2c10.605,0 19.2,-8.595 19.2,-19.2c0,-10.605 -8.595,-19.2 -19.2,-19.2z"></path></g></g></g></svg></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Vision</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
             <v-list-tile v-if="vista != '/usuario' && vista != '/admin'"   v-scroll-to="'#compromiso'"  >
                <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 192 192"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M131.4,15.84c-3.915,0.225 -7.77,1.185 -11.4,3l-21.12,10.32h-60.12l-34.2,-8.04c-1.155,-0.39 -2.205,-0.045 -3.36,0.72c-0.765,0.39 -1.2,1.605 -1.2,2.76v83.64c0,1.92 1.59,3.45 3.12,3.84l12.72,2.16c-1.185,4.755 0.015,9.975 3.72,13.68c2.97,2.97 6.915,4.365 10.8,4.2c-0.165,3.885 1.23,7.83 4.2,10.8c2.97,2.97 6.915,4.365 10.8,4.2c-0.12,3.855 1.26,7.74 4.2,10.68c2.865,2.865 6.66,4.26 10.44,4.2c-0.09,3.795 1.26,7.62 4.08,10.44l0.12,0.12c4.32,4.215 10.725,5.175 15.96,2.88l6.24,6.24c3.075,3.075 7.29,4.92 11.52,4.92c4.23,0 8.445,-1.47 11.52,-4.92c3.075,-3.075 4.65,-6.93 5.04,-11.16c5.37,1.155 11.49,-0.36 15.72,-4.2c3.075,-3.075 4.53,-6.93 4.92,-11.16c5.37,1.155 11.61,-0.36 15.84,-4.2c3.45,-3.45 4.95,-8.475 4.56,-13.08c4.995,0.39 9.63,-1.23 13.08,-4.68c4.185,-4.185 5.64,-10.515 4.2,-16.08l1.8,-1.8l14.16,-2.04c2.115,-0.33 3.57,-2.325 3.24,-4.44c-0.33,-2.115 -2.325,-3.57 -4.44,-3.24l-15.36,2.4l-1.2,0.12l-5.04,5.04l-46.56,-46.68c1.32,-1.275 1.545,-3.3 0.555,-4.845c-0.99,-1.545 -2.925,-2.175 -4.635,-1.515l-24.96,9.6c-13.125,5.19 -27.9,1.815 -37.2,-8.52l-0.12,-0.12c-0.495,-0.495 -0.525,-0.84 0.12,-1.08h0.24l0.12,-0.12l69.84,-34.2h0.12c7.08,-3.54 15.345,-2.82 21.84,1.56l1.44,1.68l0.36,0.48l0.48,0.24c6.975,4.8 15.375,6.075 23.28,3.96v0.12l0.24,-0.12l17.88,-3.72c2.085,-0.465 3.405,-2.535 2.94,-4.62c-0.465,-2.085 -2.535,-3.405 -4.62,-2.94l-18,3.84l-0.12,0.12h-0.12c-5.73,1.59 -11.64,0.54 -16.8,-2.88l-1.44,-1.68l-0.36,-0.36l-0.48,-0.36c-4.41,-3.09 -9.45,-4.77 -14.64,-5.16c-1.305,-0.09 -2.655,-0.075 -3.96,0zM33.6,106.92c1.68,0 3.39,0.75 4.8,2.16c2.82,2.82 2.82,6.78 0,9.6l-3,2.88l-0.36,0.36l-0.48,0.6c-2.82,2.82 -6.78,2.82 -9.6,0c-2.82,-2.82 -2.82,-6.78 0,-9.6l3.36,-3.24l0.48,-0.6c1.41,-1.41 3.12,-2.16 4.8,-2.16zM48.6,121.92c1.68,0 3.39,0.75 4.8,2.16c2.82,2.82 2.82,6.66 0,9.48l-3.84,3.84c-2.82,2.82 -6.78,2.82 -9.6,0c-2.82,-2.82 -2.82,-6.66 0,-9.48l3.84,-3.84c1.41,-1.41 3.12,-2.16 4.8,-2.16zM63.6,136.92c1.68,0 3.27,0.75 4.68,2.16c2.325,2.325 2.715,5.355 1.2,7.92c-0.525,0.39 -1.08,0.72 -1.56,1.2l-3.84,3.84v0.12h-0.12c-0.42,0.465 -0.735,0.945 -1.08,1.44c-2.565,1.515 -5.595,1.125 -7.92,-1.2c-2.82,-2.82 -2.82,-6.66 0,-9.48l2.88,-3l0.72,-0.6l0.24,-0.24c1.41,-1.41 3.12,-2.16 4.8,-2.16zM78.12,151.56c1.68,0 3.39,0.63 4.8,2.04c2.82,2.82 2.82,6.78 0,9.6l-3.84,3.84c-2.82,2.82 -6.78,2.82 -9.6,0c-1.815,-1.815 -2.235,-5.445 -0.96,-8.16c0.48,-0.375 1.005,-0.645 1.44,-1.08l3.84,-3.84c0.51,-0.51 0.9,-1.11 1.32,-1.68c0.96,-0.48 1.995,-0.72 3,-0.72z"></path></g></g></g></svg></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Compromiso</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile v-if="vista != '/usuario' && vista != '/admin'"   @click="despegablePre()"  >
                    <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="20" height="20"
                                    viewBox="0 0 192 192"
                                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M131.4,8.16l-2.16,3.12l-34.2,49.56l-29.64,8.76c-3.93,1.185 -7.26,3.75 -9.48,7.2l-24.6,38.04l15.6,52.92l28.44,-6.24c0.72,-0.15 1.44,-0.405 2.16,-0.6c6.96,-2.34 13.05,-6.555 17.64,-12.36l3.6,-5.16l16.32,11.4l3.12,2.16l2.28,-3.24l69.36,-100.56l2.28,-3.12l-3.24,-2.16l-54.24,-37.56zM133.44,18.84l48,33.24l-27,39.12c3.285,-11.115 -1.965,-24.555 -13.56,-32.52c-6.645,-4.56 -14.37,-6.69 -21.84,-6c-4.41,0.405 -8.385,1.77 -11.76,3.96zM149.4,41.76c-2.055,-0.015 -4.035,0.93 -5.28,2.76c-1.995,2.91 -1.245,6.99 1.68,9c2.925,2.01 6.885,1.23 8.88,-1.68c1.995,-2.91 1.245,-6.87 -1.68,-8.88c-1.095,-0.75 -2.37,-1.185 -3.6,-1.2zM97.44,70.92c-1.125,5.34 -0.405,11.205 2.04,16.68l3,-2.64c3.495,-2.85 7.965,-4.32 12.48,-4.32c5.085,0 9.885,1.875 13.56,5.4c6,5.745 7.605,14.4 4.56,21.72c5.055,-0.435 9.6,-2.205 13.32,-5.04l-30.12,43.56l-13.08,-9l21.12,-29.64c3.81,-4.845 3.36,-11.82 -1.08,-16.08c-4.365,-4.185 -11.16,-4.425 -15.84,-0.6l-21.72,18.12l-9,-5.4zM23.4,115.32l-23.4,7.2l19.32,65.4l23.52,-7.2z"></path></g></g></g></svg></v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Prestamos <img  src="https://img.icons8.com/ios/12/ffffff/forward-filled.png"  :style=" despliegue.despegablep ? 'transform: rotate(270deg); margin-left:8px !important' : ' transform: rotate(90deg); margin-left:8px !important'"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <div data-aos="fade-right" data-aos-duration="1500" v-if=" despliegue.despegablep == true " :style=" drawer.mini ? 'padding-left: 0px !important;' : 'padding-left: 25px !important;'" >
              
                <v-list-tile  v-if="vista != '/usuario' && vista != '/admin'"  v-scroll-to="'#PrePersonales'" >
                    <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 192 192"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M94.92,7.68c-2.415,0 -4.785,0.06 -7.08,0.24c-0.285,0.015 -0.555,0.09 -0.84,0.12c-2.01,0.18 -3.975,0.42 -5.88,0.72c-2.04,0.33 -4.08,0.72 -6,1.2c-0.09,0.015 -0.165,0.105 -0.24,0.12c-4.05,1.035 -7.8,2.4 -11.28,4.08c-3.51,1.695 -6.69,3.78 -9.6,6.12c-1.44,1.17 -2.79,2.4 -4.08,3.72c-5.1,5.22 -8.955,11.55 -11.52,19.08c-0.615,1.815 -1.215,3.69 -1.68,5.64c-0.42,1.74 -0.78,3.57 -1.08,5.4c-0.195,1.185 -0.345,2.385 -0.48,3.6c-0.105,0.975 -0.285,1.875 -0.36,2.88c-0.18,2.265 -0.24,4.59 -0.24,6.96c0,1.95 0.345,4.425 0.72,7.08c0.405,2.865 0.99,5.97 1.68,9.12c0.615,2.82 1.215,5.55 1.92,8.16c0.075,0.3 0.165,0.66 0.24,0.96c0.48,1.725 0.975,3.465 1.44,4.92c-1.125,0.96 -2.265,1.575 -3.36,3.24c-1.845,2.82 -3.195,6.765 -2.64,11.52c1.62,13.725 10.23,18.63 13.08,20.04c1.095,6.42 4.41,14.34 9.84,22.44c5.82,8.685 13.86,17.025 23.64,21.72c0.18,0.09 0.3,0.27 0.48,0.36c3.525,4.215 8.505,7.2 14.4,7.2c5.895,0 10.875,-2.985 14.4,-7.2c0.18,-0.09 0.3,-0.27 0.48,-0.36c9.75,-4.71 17.625,-13.035 23.4,-21.72c5.37,-8.085 8.625,-16.05 9.72,-22.44c2.82,-1.335 11.685,-6.105 13.32,-19.92c0.555,-4.77 -0.9,-8.805 -2.76,-11.64c-1.11,-1.68 -2.235,-2.265 -3.36,-3.24c0.63,-1.995 1.38,-4.245 2.04,-6.72c0.045,-0.15 0.075,-0.33 0.12,-0.48c0.075,-0.255 0.165,-0.57 0.24,-0.84c0.69,-2.7 1.17,-5.31 1.68,-7.92c0.585,-3.015 1.11,-5.985 1.44,-8.88c0.105,-0.84 0.165,-1.695 0.24,-2.52c0.15,-1.515 0.285,-3 0.36,-4.56c0.075,-1.5 0.12,-2.97 0.12,-4.44c0,-1.035 -0.045,-2.22 -0.12,-3.36c-0.015,-0.165 0.015,-0.315 0,-0.48c-0.075,-0.945 -0.24,-1.875 -0.36,-2.88c-0.075,-0.555 -0.15,-1.125 -0.24,-1.68c-0.09,-0.555 -0.135,-1.11 -0.24,-1.68c-0.09,-0.45 -0.135,-0.87 -0.24,-1.32c-0.135,-0.63 -0.315,-1.29 -0.48,-1.92c-0.105,-0.405 -0.24,-0.81 -0.36,-1.2c-0.195,-0.675 -0.375,-1.365 -0.6,-2.04c-0.12,-0.375 -0.225,-0.72 -0.36,-1.08c-0.24,-0.645 -0.57,-1.275 -0.84,-1.92c-0.435,-1.02 -0.915,-2.01 -1.44,-3c-0.21,-0.405 -0.375,-0.81 -0.6,-1.2c-0.3,-0.54 -0.735,-1.035 -1.08,-1.56c-0.255,-0.39 -0.45,-0.825 -0.72,-1.2c-0.36,-0.495 -0.69,-0.975 -1.08,-1.44c-0.3,-0.375 -0.645,-0.72 -0.96,-1.08c-0.39,-0.435 -0.78,-0.915 -1.2,-1.32c-0.39,-0.39 -0.795,-0.705 -1.2,-1.08c-0.825,-0.75 -1.725,-1.395 -2.64,-2.04c-3.825,-2.685 -8.385,-4.44 -13.8,-4.8c-1.05,-1.545 -2.7,-3.51 -4.92,-5.52c-0.87,-0.795 -1.8,-1.62 -2.88,-2.4c-0.12,-0.09 -0.24,-0.15 -0.36,-0.24c-0.12,-0.075 -0.24,-0.165 -0.36,-0.24c-1.065,-0.72 -2.22,-1.38 -3.48,-2.04c-3.87,-2.04 -8.61,-3.795 -14.64,-4.56c-0.27,-0.03 -0.555,-0.09 -0.84,-0.12c-0.225,-0.03 -0.495,0.03 -0.72,0c-1.815,-0.18 -3.735,-0.36 -5.76,-0.36zM124.8,55.2c3.735,5.955 9.6,17.235 9.6,29.28c0.075,6.405 2.55,17.07 11.16,18.12c0.765,0.57 1.785,1.455 2.64,2.76c1.065,1.635 1.785,3.6 1.44,6.48c-1.47,12.375 -10.08,14.76 -10.08,14.76c-1.44,0.465 -2.475,1.74 -2.64,3.24c-0.45,4.245 -3.66,12.855 -9,20.88c-5.34,8.025 -12.675,15.675 -20.76,19.44c-0.63,0.285 -1.17,0.75 -1.56,1.32c-2.07,3.09 -5.58,5.16 -9.6,5.16c-4.02,0 -7.53,-2.07 -9.6,-5.16c-0.39,-0.57 -0.93,-1.035 -1.56,-1.32c-8.115,-3.765 -15.495,-11.415 -20.88,-19.44c-5.385,-8.025 -8.685,-16.65 -9.12,-20.88c-0.18,-1.425 -1.155,-2.64 -2.52,-3.12c0,0 -8.625,-2.595 -10.08,-15c-0.345,-2.895 0.39,-4.89 1.44,-6.48c0.435,-0.66 0.96,-1.2 1.44,-1.68c0.3,0.075 0.645,0.12 0.96,0.12c7.575,0 10.2,-12.615 11.52,-19.2c2.4,-11.985 15.6,-15.36 34.56,-15.36c17.865,0 27.9,-8.295 32.64,-13.92zM74.88,103.68c-3.18,0 -5.76,2.58 -5.76,5.76c0,3.18 2.58,5.76 5.76,5.76c3.18,0 5.76,-2.58 5.76,-5.76c0,-3.18 -2.58,-5.76 -5.76,-5.76zM117.12,103.68c-3.18,0 -5.76,2.58 -5.76,5.76c0,3.18 2.58,5.76 5.76,5.76c3.18,0 5.76,-2.58 5.76,-5.76c0,-3.18 -2.58,-5.76 -5.76,-5.76z"></path></g></g></g></svg></v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Personales</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile> 
                <v-list-tile  v-if="vista != '/usuario' && vista != '/admin'"  v-scroll-to="'#PreHipotecario'" >
                    <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="20" height="20"
                                        viewBox="0 0 192 192"
                                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><path d="M11.52,15.36v76.8h55.485l28.995,-45.54l28.995,45.54h55.485v-76.8zM96,60.9l-24.765,38.94h-48.195v76.8h57.6v-42.24c0,-8.4864 6.8736,-15.36 15.36,-15.36c8.4864,0 15.36,6.8736 15.36,15.36v42.24h57.6v-76.8h-48.195zM42.24,119.04h23.04v26.88h-23.04zM126.72,119.04h23.04v26.88h-23.04z"></path></g></g></svg></v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Hipotecarios</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile> 
                <v-list-tile  v-if="vista != '/usuario' && vista != '/admin'" v-scroll-to="'#PreVeiculo'" >
                    <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="20" height="20"
                                    viewBox="0 0 192 192"
                                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M11.52,42.24c-6.345,0 -11.52,5.175 -11.52,11.52v53.76h11.52v7.68h-11.52v15.36c0,6.345 5.175,11.52 11.52,11.52h8.04c1.83,10.86 11.31,19.2 22.68,19.2c11.37,0 20.85,-8.34 22.68,-19.2h66c1.83,10.86 11.31,19.2 22.68,19.2c11.37,0 20.85,-8.34 22.68,-19.2h15.72v-26.88h-15.36v-7.68h15.36v-2.4c0,-9.39 -6.72,-17.355 -15.96,-18.93l-30.525,-5.205l-17.58,-27.96c-4.245,-6.765 -11.535,-10.785 -19.515,-10.785zM15.36,57.6h42.24v26.88h-42.24zM72.96,57.6h36.27c1.32,0 2.565,0.675 3.27,1.8l15.615,25.08h-55.155zM42.24,122.88c8.535,0 15.36,6.825 15.36,15.36c0,8.535 -6.825,15.36 -15.36,15.36c-8.535,0 -15.36,-6.825 -15.36,-15.36c0,-8.535 6.825,-15.36 15.36,-15.36zM153.6,122.88c8.535,0 15.36,6.825 15.36,15.36c0,8.535 -6.825,15.36 -15.36,15.36c-8.535,0 -15.36,-6.825 -15.36,-15.36c0,-8.535 6.825,-15.36 15.36,-15.36zM42.24,134.4c-2.115,0 -3.84,1.725 -3.84,3.84c0,2.115 1.725,3.84 3.84,3.84c2.115,0 3.84,-1.725 3.84,-3.84c0,-2.115 -1.725,-3.84 -3.84,-3.84zM153.6,134.4c-2.115,0 -3.84,1.725 -3.84,3.84c0,2.115 1.725,3.84 3.84,3.84c2.115,0 3.84,-1.725 3.84,-3.84c0,-2.115 -1.725,-3.84 -3.84,-3.84z"></path></g></g></g></svg></v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Vehiculos</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile> 
            </div>
        
        </div>

        <v-list-tile v-if="vista == '/usuario' || vista == '/admin'" v-scroll-to="'#calculadora'" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="20" height="20"
                                    viewBox="0 0 192 192"
                                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M49.92,15.36c-2.115,0 -3.84,1.725 -3.84,3.84v72.96h-23.04c-2.115,0 -3.84,1.725 -3.84,3.84v76.8c0,2.115 1.725,3.84 3.84,3.84h61.44c2.115,0 3.84,-1.725 3.84,-3.84v-7.68h76.8c2.115,0 3.84,-1.725 3.84,-3.84v-142.08c0,-2.115 -1.725,-3.84 -3.84,-3.84zM69.12,46.08h57.6v7.68h-57.6zM134.4,46.08h11.52v7.68h-11.52zM69.12,61.44h49.92v7.68h-49.92zM134.4,61.44h11.52v7.68h-11.52zM69.12,76.8h57.6v7.68h-57.6zM134.4,76.8h11.52v7.68h-11.52zM96,92.16h30.72v7.68h-30.72zM134.4,92.16h11.52v7.68h-11.52zM26.88,99.84h53.76v69.12h-53.76zM34.56,107.52v7.68h38.4v-7.68zM96,107.52h23.04v7.68h-23.04zM134.4,107.52h11.52v7.68h-11.52zM34.56,122.88v7.68h7.68v-7.68zM49.92,122.88v7.68h7.68v-7.68zM65.28,122.88v7.68h7.68v-7.68zM96,122.88h30.72v7.68h-30.72zM134.4,122.88h11.52v7.68h-11.52zM34.56,138.24v7.68h7.68v-7.68zM49.92,138.24v7.68h7.68v-7.68zM65.28,138.24v7.68h7.68v-7.68zM34.56,153.6v7.68h7.68v-7.68zM49.92,153.6v7.68h7.68v-7.68zM65.28,153.6v7.68h7.68v-7.68z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Carculadora</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
        <v-list-tile  v-if="vista == '/usuario' || vista == '/admin'" v-scroll-to="'#solicitud'" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="20" height="20"
                        viewBox="0 0 192 192"
                        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M10.8,0c-5.925,0 -10.8,4.875 -10.8,10.8v16.08h168.96v-16.08c0,-5.925 -4.875,-10.8 -10.8,-10.8zM0,34.56v119.04c0,2.13 1.725,3.84 3.84,3.84h104.4l-4.92,4.92c-0.465,0.465 -0.9,1.05 -1.08,1.68l-6.48,23.04c-0.375,1.335 -0.015,2.73 0.96,3.72c0.735,0.75 1.74,1.2 2.76,1.2c0.33,0 0.63,-0.03 0.96,-0.12l23.04,-6.12c0.645,-0.18 1.2,-0.6 1.68,-1.08l60.72,-60.24c0.39,-0.375 0.645,-0.855 0.84,-1.32l0.72,-0.6c6.15,-6.15 6.15,-16.17 0,-22.32c-4.995,-4.995 -12.54,-5.88 -18.48,-2.76v-62.88zM26.88,57.6h15.36v7.68h-15.36zM53.76,57.6h88.32v7.68h-88.32zM26.88,76.8h15.36v7.68h-15.36zM53.76,76.8h88.32v7.68h-88.32zM26.88,96h15.36v7.68h-15.36zM53.76,96h88.32v7.68h-88.32zM168,108.48l11.52,11.52l-59.04,58.56l-11.16,-10.92l0.12,-0.48zM26.88,115.2h15.36v7.68h-15.36zM53.76,115.2h72.96v7.68h-72.96z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Crear solicitud</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile  >
        <v-divider v-if="vista == '/usuario'"></v-divider>
         <v-list-tile v-if="vista == '/usuario'" v-scroll-to="'#Prestamos'" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="20" height="20"
                                viewBox="0 0 192 192"
                                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M188.16,15.36h-184.32c-2.115,0 -3.84,1.725 -3.84,3.84v153.6c0,2.13 1.725,3.84 3.84,3.84h184.32c2.13,0 3.84,-1.71 3.84,-3.84v-153.6c0,-2.115 -1.71,-3.84 -3.84,-3.84zM111.36,138.24h-76.8v-7.68h76.8zM111.36,99.84h-76.8v-7.68h76.8zM111.36,61.44h-76.8v-7.68h76.8zM160.965,129.69l-10.755,15.36c-0.585,0.855 -1.515,1.44 -2.565,1.59c-0.18,0.03 -0.375,0.045 -0.57,0.045c-0.84,0 -1.665,-0.27 -2.34,-0.795l-9.99,-7.68c-1.68,-1.29 -1.995,-3.705 -0.705,-5.385c1.29,-1.68 3.705,-1.995 5.385,-0.705l6.795,5.235l8.46,-12.075c1.215,-1.74 3.6,-2.16 5.34,-0.945c1.74,1.215 2.16,3.615 0.945,5.355zM160.965,91.29l-10.755,15.36c-0.585,0.855 -1.515,1.44 -2.565,1.59c-0.18,0.03 -0.375,0.045 -0.57,0.045c-0.84,0 -1.665,-0.27 -2.34,-0.795l-9.99,-7.68c-1.68,-1.29 -1.995,-3.705 -0.705,-5.385c1.29,-1.68 3.705,-1.995 5.385,-0.705l6.795,5.235l8.46,-12.06c1.215,-1.74 3.6,-2.175 5.34,-0.945c1.74,1.215 2.16,3.6 0.945,5.34zM160.965,52.89l-10.755,15.36c-0.585,0.855 -1.515,1.44 -2.565,1.59c-0.18,0.03 -0.375,0.045 -0.57,0.045c-0.84,0 -1.665,-0.27 -2.34,-0.795l-9.99,-7.68c-1.68,-1.29 -1.995,-3.705 -0.705,-5.385c1.29,-1.68 3.705,-1.995 5.385,-0.705l6.795,5.235l8.46,-12.075c1.215,-1.74 3.6,-2.16 5.34,-0.945c1.74,1.23 2.16,3.615 0.945,5.355z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Ver Prestamos</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        

        <v-divider v-if="vista == '/admin'"></v-divider>
         <v-list-tile v-if="vista == '/admin'" v-scroll-to="'#ajustes'" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="20" height="20"
                                viewBox="0 0 192 192"
                                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M77.64,0c-1.875,0 -3.54,1.38 -3.84,3.24l-3.72,22.44c-4.62,1.335 -9.045,3.12 -13.2,5.4l-18.48,-13.2c-1.53,-1.095 -3.585,-0.96 -4.92,0.36l-15,15c-1.32,1.32 -1.425,3.39 -0.36,4.92l12.96,18.6c-2.325,4.215 -4.17,8.7 -5.52,13.32l-22.32,3.72c-1.845,0.315 -3.24,1.965 -3.24,3.84v21.12c0,1.86 1.29,3.39 3.12,3.72l22.44,3.96c1.335,4.62 3.195,9.105 5.52,13.32l-13.2,18.48c-1.095,1.53 -0.96,3.585 0.36,4.92l15,15c1.32,1.32 3.39,1.425 4.92,0.36l18.72,-13.08c4.2,2.31 8.61,4.185 13.2,5.52l3.72,22.44c0.3,1.845 1.965,3.24 3.84,3.24h21.12c0.12,0 0.525,-0.015 1.08,0v11.52c0,2.13 1.71,3.84 3.84,3.84h84.48c2.13,0 3.84,-1.71 3.84,-3.84v-65.88c0,-6.03 -4.89,-10.92 -10.92,-10.92h-32.16c0.615,-1.65 1.32,-3.42 1.8,-4.92l22.68,-3.96c1.845,-0.33 3.24,-1.86 3.24,-3.72v-21.12c0,-1.875 -1.38,-3.54 -3.24,-3.84l-22.68,-3.72c-1.335,-4.56 -3.12,-8.94 -5.4,-13.08l13.2,-18.84c1.065,-1.53 0.96,-3.6 -0.36,-4.92l-15,-15c-1.335,-1.335 -3.39,-1.455 -4.92,-0.36l-18.6,13.44c-4.185,-2.31 -8.625,-4.185 -13.2,-5.52l-3.96,-22.68c-0.33,-1.83 -1.86,-3.12 -3.72,-3.12zM88.32,60.12c15.555,0 28.2,12.645 28.2,28.2c0,15.555 -12.645,28.2 -28.2,28.2c-15.555,0 -28.2,-12.645 -28.2,-28.2c0,-15.555 12.645,-28.2 28.2,-28.2zM110.76,119.04h70.32c1.785,0 3.24,1.44 3.24,3.24v0.6h-76.8v-0.6c0,-1.8 1.44,-3.24 3.24,-3.24zM107.52,130.56h76.8v53.76h-76.8zM142.08,132.84l-2.76,2.64l-12.84,12.84l-4.92,-4.2l-2.88,-2.52l-5.04,5.88l2.88,2.4l7.68,6.6l2.76,2.4l17.88,-17.88l2.64,-2.76zM142.08,152.04l-2.76,2.64l-12.84,12.84l-4.92,-4.2l-2.88,-2.52l-5.04,5.88l2.88,2.4l7.68,6.6l2.76,2.4l17.88,-17.88l2.64,-2.76z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Ajustes</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      
          <!-- <v-list-tile v-if="usuario == null" >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="20" height="20"
                    viewBox="0 0 192 192"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M100.89,17.07c-0.48,0.045 -0.945,0.12 -1.425,0.21c-3.84,0.765 -8.07,3.84 -11.91,7.68l18.42,11.52c2.31,-7.68 3.855,-15.36 -1.14,-18.435c-1.155,-0.87 -2.52,-1.08 -3.945,-0.975zM82.185,30.72c-4.62,5.76 -14.985,19.2 -25.74,36.105c-3.45,5.37 -6.915,11.52 -10.365,17.28c0,3.45 -0.375,6.525 -0.765,9.6c-1.155,7.29 -3.075,13.425 -4.23,15.735c-1.53,4.23 -3.84,7.29 -6.135,9.6l14.595,9.225c2.295,-3.075 6.135,-8.46 10.74,-14.61l-2.31,-1.53c-8.82,-4.605 -13.05,-14.97 -9.6,-24.57c2.7,-7.68 10.38,-12.675 18.45,-12.675c1.53,0 3.06,0.375 4.98,0.765l11.91,3.075c9.21,-15.36 16.125,-29.19 19.2,-35.715zM64.905,41.475l-26.505,3.84c-2.685,0.39 -4.605,1.92 -5.76,4.23l-21.51,48.375c-0.765,1.92 -1.53,4.605 -1.14,6.915c0.375,4.23 2.295,8.055 5.37,10.74c4.23,2.7 9.21,1.935 11.52,0.78c5.37,-2.31 7.29,-9.6 7.68,-11.52c1.155,-4.23 4.995,-15.75 3.45,-26.88l3.465,-0.39c2.685,-4.995 5.76,-9.6 8.445,-14.205c5.37,-8.445 10.365,-15.735 14.985,-21.885zM109.44,48.375c-2.685,5.76 -9.21,18.825 -18.045,33.42l9.99,2.685l7.68,2.295l-4.23,6.15l-34.95,-9.21c-5.76,-1.53 -11.895,1.53 -14.205,7.29c-2.31,5.76 0.39,12.285 5.76,14.97l43.785,24.585c6.525,3.45 13.815,4.605 21.12,3.465c0.765,0 30.72,-6.93 30.72,-6.93l-8.07,-54.51l-38.4,-23.82c-0.39,-0.39 -0.765,-0.39 -1.155,-0.39zM173.955,66.825l-17.67,2.67l10.38,67.59l17.655,-2.685zM26.49,123.255c-4.215,11.91 -4.215,19.59 -4.215,22.665l-2.685,3.84c-0.78,1.155 -0.39,2.685 0.765,3.465c0.765,0.375 1.155,0.375 1.92,0.375c0.765,-0.39 1.155,-0.765 1.92,-1.155l2.295,-3.84c2.7,-1.155 9.6,-4.605 18.435,-13.83z"></path></g></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                 <Registrate>
                    <v-list-tile-title>Registrate</v-list-tile-title>
                 </Registrate>
            </v-list-tile-content>
        </v-list-tile>
          <v-divider ></v-divider> -->
         <v-list-tile v-if="usuario == null && vista != '/admin'"   :style="drawer.mini ?  ' position: absolute; top: 91%': 'overflow: hidden !important; position: absolute; top: 87%;'   " >
            <v-list-tile-action><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="20" height="20"
                viewBox="0 0 192 192"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><path d="M49.92,0c-6.35136,0 -11.52,5.16864 -11.52,11.52v80.64h78.8325l-35.2575,-35.265c-1.50144,-1.50144 -1.50144,-3.92856 0,-5.43c1.50144,-1.50144 3.92856,-1.50144 5.43,0l44.5275,44.535l-44.535,44.535c-0.7488,0.7488 -1.73196,1.125 -2.715,1.125c-0.98304,0 -1.9662,-0.3762 -2.715,-1.125c-1.50144,-1.50144 -1.50144,-3.92856 0,-5.43l35.265,-35.265h-78.8325v80.64c0,6.35136 5.16864,11.52 11.52,11.52h130.56c6.35136,0 11.52,-5.16864 11.52,-11.52v-168.96c0,-6.35136 -5.16864,-11.52 -11.52,-11.52zM38.4,99.84v-7.68h-34.56c-2.11968,0 -3.84,1.72032 -3.84,3.84c0,2.11968 1.72032,3.84 3.84,3.84z"></path></g></g></svg></v-list-tile-action>
            <v-list-tile-content>
                 
                 <v-list-tile-title>
                     <span v-if="usuario" style="color: #fff !impotant; margin-right: 15px; font-size: 18px !important;">{{ usuario.nombres }}</span>
                    <svg v-if="usuario"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 192 192"
                    style=" fill:#000000; color: #fff !impotant; margin-right: 15px; cursor: pointer;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#ffffff"><path d="M184,24.1875l-64,7.9375v23.875h16v-9.73438l32,-3.98438v107.4375l-32,-3.98438v-9.73438h-16v23.875l64,7.9375zM82,32c-7.73199,0 -14,6.26801 -14,14c0,7.73199 6.26801,14 14,14c7.73199,0 14,-6.26801 14,-14c0,-7.73199 -6.26801,-14 -14,-14zM39.71875,56c-3.18664,0.012 -6.37275,0.66972 -9.35938,1.95312l-0.10938,0.03125l-14.60938,6.75l6.71875,14.53125l14.3125,-6.625h0.03125c0.98879,-0.42038 2.03492,-0.63669 3.07812,-0.64062c1.06537,-0.004 2.1235,0.20437 3.125,0.625l3.75,1.6875l-13.04687,24.04688c-1.072,2.2 -1.62538,4.64612 -1.60938,7.07813c0.024,4.23999 1.6875,8.21874 4.6875,11.21874l19.29688,15.73438l-9.375,27.60938h16.89062l7.625,-22.4375c0.664,-1.90399 0.955,-3.88337 0.875,-5.85937c-0.168,-4.264 -1.97925,-8.212 -5.53125,-11.5l-9.59375,-9.45313l11.90625,-21.95313l2.78125,4.28126c4.42259,6.80767 12.01476,10.92187 20.125,10.92187h12.3125v-16h-12.3125c-2.72177,0 -5.23734,-1.3603 -6.71875,-3.64062l-5.70313,-8.76563v-0.01563c-2.51186,-3.85154 -6.07064,-6.92213 -10.29687,-8.8125l-19.78125,-8.85938l-0.09375,-0.03125c-2.9985,-1.25937 -6.18437,-1.887 -9.375,-1.875zM136,72v16h-16v16h16v16l24,-24zM30.21875,121.3125l-3.40625,4.04688c-1.512,1.68 -3.6655,2.64062 -5.9375,2.64062h-12.875v16h12.875c6.8,0 13.296,-2.89262 18,-8.14062l3.5625,-4.21875l-11.40625,-9.32813c-0.304,-0.304 -0.5245,-0.67999 -0.8125,-1z"></path></g></g></svg></v-list-tile-title>
                 
    
                <div   class="text-xs-center">
                    <Login>
                       <v-list-tile-title>Iniciar seccion</v-list-tile-title>
                    </Login>
                </div>
                
            </v-list-tile-content>
        </v-list-tile>
        <v-divider ></v-divider>
    </v-list>
    
    
    <div :style="drawer.mini ? ' display:none !important; height: 15px !important; overflow: hidden !important;  left: 0px !important; position: absolute; top: 51%; color: #fff !important; ' :' height: 16px !important; overflow: hidden !important; left: 42px !important; position: absolute; top: 95%; color: #fff !important; border-top: 1px solid #feb029; font-family: Rubik, sans-serif;  '">&copy; {{ new Date().getFullYear() }} RaiseTech </div>

     <div :style="drawer.mini ? ' display:none !important; height: 15px !important; overflow: hidden !important;  left: 0px !important; position: absolute; top: 51%; color: #fff !important; ' :' height: 1px !important; overflow: hidden !important; left: 42px !important; position: absolute; top: 9%; color: #fff !important; border-top: 1px solid #feb029'  ">________________</div>
</v-navigation-drawer>

</div>

</template>

<script>
import Login from '../views/Login.vue';
import Registrate from '../views/Registrate.vue';
import {mapActions, mapMutations , mapState} from 'vuex';

export default {
    data() {
        return {
            drawer: {
                open: false,
                clipped: false,
                permanent: true,
                mini: false,
                hide: true,
                hideBtnMenu: false,
            },
            // vista: this.$route.fullPath
        }
    },
    methods: {
        toggleMiniDrawer() {
            this.drawer.mini = !this.drawer.mini;
            this.$emit('onContenedor');
            this.drawer.despegable = false;
        },
        toggleHide() {
            this.drawer.hide = !this.drawer.hide;     
        },
        ...mapMutations([]),
        ...mapActions(['despegableHome','despegableNo','despegablePre']),
        despegableH(){
            this.despegableHome();
            this.$router.push({name: 'home'}); 
        },
         despegableN(){
            this.despegableNo();
            this.$router.push({name: 'nosotros'}); 
        },
      
    },

    computed: {
        vista(){
            return this.$route.fullPath
        },
        ...mapState(['despliegue']),
        ...mapState('login',['usuario'])
    },
    created(){
       if(this.vista === '/login'){
            this.$emit('fullcontenedor')
           this.drawer.hide = false;
       }
    },
    components: {
       Login,
       Registrate
    },
}
</script>

<style>
.btnMenu{
  
  position: fixed !important;
  z-index:100 !important;
  left: 5px !important;
  top: 5px !important;
}
.v-list__tile {
    padding: 2px !important;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
}
.v-btn--floating.v-btn--large {
     width: 40px !important;
    height: 40px!important;
    z-index: 100 !important;
    padding: 5px !important;
    margin: 5px !important;
    position: fixed;
}

.v-btn--floating.v-btn--small {
    width: 38px !important;
    z-index: 200 !important;
    padding: 5px !important;
    margin: 5px !important;
    position: fixed;
    top: 50vh !important;
    
    
    
}
.v-navigation-drawer:first-child{
height:150px !important;
}
.v-list__tile__title{
    height: auto !important;
}
.v-list__tile__action{
    width:20px !important;
    /* height:20px !important; */
    min-width: 20px !important;
    margin: 0px 18px !important;
}
.v-navigation-drawer{
    /* border-right: 1px solid rgb(100, 149, 237) !important; */
    box-shadow: 0px 1px 5px #212121 !important;
}
.iso{
    margin-top: 3px !important;
}
.letras{
    margin-left: 5px !important;
}

@media (min-width: 1024px) {
  .btnMenu{
    display: none !important;
   
    }
} 
</style>
