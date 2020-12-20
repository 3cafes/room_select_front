import axios from 'axios';
import { SERVER } from './config';

export async function search_room_available(
	date,
	from,
	to,
	capacity,
	equipments
) {
	try {
		const res = await axios.post(`${SERVER}/api/room/search/available`, {
			date,
			from,
			to,
			capacity,
			equipments,
		});
		return res.data;
	} catch (e) {
		if (e.response && e.response.data) {
			return e.response.data;
		} else {
			return {
				success: false,
				message: ':(',
				rooms: [],
			};
		}
	}
}

export async function reserve_room(room, date, from, to) {
	try {
		const res = await axios.post(`${SERVER}/api/room/reservation/new`, {
			room,
			date,
			from,
			to,
		});
		return res.data;
	} catch (e) {
		if (e.response && e.response.data) {
			return e.response.data;
		} else {
			return {
				success: false,
				message: ':(',
				rooms: [],
			};
		}
	}
}
