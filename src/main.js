import { createApp } from 'vue';
import App from './App.vue';

import { Button, DatePicker, TimePicker, Form, Checkbox } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.config.productionTip = false;

app
	.use(Button)
	.use(DatePicker)
	.use(TimePicker)
	.use(Form)
	.use(Checkbox);

app.mount('#app');
