import * as callPath from '../ultis/http';

const search = async (info) => {
    try {
        const res = await callPath.get('api/search', { info });
        return res.data;
    } catch (error) {
        console.error('Error searching:', error);
        throw error;
    }
};
export default search;
