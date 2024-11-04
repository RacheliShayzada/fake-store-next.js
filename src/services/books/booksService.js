import http from './http';

export const fetchBooks = async () => {
    try {
        const response = await http.get('/api/book');
        return response.data;
    } catch (error) {
        alert('Error fetching books:', error);

    }
};

export const addBook = async (newBook) => {
    try {
        const response = await http.post('/api/book', newBook);
        return response.data;
    }
    catch (error) {
        alert('Error adding book:', error);

    }
};

export const updateBookFields = async (id, updatedBookFildes) => {
    try {
        console.log('books service');
        const response = await http.patch(`/api/book/${id}`, updatedBookFildes);
        return response.data;
    } catch (error) {
        alert('Error updating book:', error);

    }
};

export const deleteBook = async (id) => {
    try {
        const response = await http.delete(`/api/book/${id}`);
        return response.data;
    } catch (error) {
        alert('Error deleting book:', error);
    }
};
