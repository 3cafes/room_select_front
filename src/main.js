import { createApp } from 'vue';
import App from './App.vue';

//ui lib
import {
	Button,
	DatePicker,
	TimePicker,
	Form,
	Checkbox,
	InputNumber,
	Alert,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

//pages
import { createRouter, createWebHistory } from 'vue-router';
import Search from '@/pages/search';

const app = createApp(App);
app.config.productionTip = false;

const routes = [{ path: '/', component: Search }];
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

app.use(router);

app
	.use(Button)
	.use(DatePicker)
	.use(TimePicker)
	.use(Form)
	.use(Checkbox)
	.use(InputNumber)
	.use(Alert);

app.mount('#app');
