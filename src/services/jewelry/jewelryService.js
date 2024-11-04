import http from './http';

export const fetchJewelry = async () => {
    try {
        const response = await http.get('/products/category/jewelery'); // הנתיב ל-API של התכשיטים
        return response.data;
    } catch (error) {
        alert('Error fetching jewelry:', error);

    }
};

export const addJewelry = async (newJewelry) => {
    try {
        const response = await http.post('/products/category/jewelery', newJewelry);
        return response.data;
    } catch (error) {
        alert('Error adding jewelry:', error);

    }
};

export const updateJewelryFildes = async (id, updatedJewelryFildes) => {
    try {
        const response = await http.patch(`/products/category/jewelery/${id}`, updatedJewelryFildes);
        return response.data;
    } catch (error) {
        alert('Error updating jewelry:', error);

    }
};

export const deleteJewelry = async (id) => {
    try {
        const response = await http.delete(`/products/category/jewelery/${id}`);
        return response.data;
    } catch (error) {
        alert('Error deleting jewelry:', error);

    }
};
