import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 3Om1To_7M63wSVaJ2Tl4WkMRUcsL5BIrDW_vxT7HjDc',
	},
});
