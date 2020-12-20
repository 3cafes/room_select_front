import axios from 'axios';
import { SERVER } from './config';

export async function get_equipments() {
	try {
		const res = await axios.get(`${SERVER}/api/equipment/all`);
		if (res.data.success) {
			return res.data.equipments;
		}
		return [];
	} catch (e) {
		console.log(`can't retrieve equipments: ${e.toString()}`);
		return [];
	}
}
