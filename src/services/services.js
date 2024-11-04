import { fetchBooks, addBook, updateBookFields, deleteBook } from './books/booksService.js'; // ייבוא הפונקציה לספרים
import { fetchJewelry, addJewelry, updateJewelryFildes, deleteJewelry } from './jewelry/jewelryService.js'; // ייבוא הפונקציה לתכשיטים

export const fetchProducts = async (category) => {
    try {
        if (category === 'books') {
            return await fetchBooks();
        } else if (category === 'jewelry') {
            return await fetchJewelry();
        } else {
            throw new Error('Invalid category');
        }
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
    }
};

export const addProduct = async (category, product) => {
    try {
        if (category === 'books') {
            return await addBook(product);
        } else if (category === 'jewelry') {
            return await addJewelry(product);
        } else {
            throw new Error('Invalid category');
        }
    } catch (error) {
        console.error(`Error adding product to category ${category}:`, error);
    }
};

export const updateProductFields = async (category, id, fields) => {
    try {
        if (category === 'books') {
            console.log('services');
            return await updateBookFields(id, fields);
        } else if (category === 'jewelry') {
            return await updateJewelryFildes(id, fields);
        } else {
            throw new Error('Invalid category');
        }
    } catch (error) {
        console.error(`Error updating product fields for category ${category}:`, error);
    }
};

export const deleteProduct = async (category, id) => {
    try {
        if (category === 'books') {
            return await deleteBook(id);
        } else if (category === 'jewelry') {
            return await deleteJewelry(id);
        } else {
            throw new Error('Invalid category');
        }
    } catch (error) {
        console.error(`Error deleting product from category ${category}:`, error);
    }
};

