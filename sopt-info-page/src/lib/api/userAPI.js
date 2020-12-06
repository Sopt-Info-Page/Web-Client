import axios from 'axios';

const url = 'http://3.34.74.249:3000/users';

const getUsers = async () => {
    try {
        const { data } = await axios.get(`${url}`);
        console.log('[SUCCESS] GET USERS', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET USERS', e);
        return e;
    }
}
export default getUsers;