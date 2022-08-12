import './bootstrap';
import '../css/app.css';

import { createApp } from "vue"
import App from "./App.vue"

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusSquare, faTrash)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
