import axios from 'axios';
import { SERVER } from './config';

export async function search_room_available() {
	try {
		const res = await axios.get(`${SERVER}/api/room/search/available`);
		if (res.data.success) {
			return res.data.rooms;
		} else {
			return [];
		}
	} catch (e) {
		return [];
	}
}
