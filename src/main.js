import {createApp} from 'vue'
import App from './App.vue';
import 'bootstrap';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);
library.add(fas);

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
