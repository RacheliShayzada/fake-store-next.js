"use client";
import React, { useState, useEffect } from 'react';
import { fetchProducts, deleteProduct, addProduct, updateProductFields } from '../services/services.js'; // ייבוא פונקציות
import styles from './products.modules.css';
import './form.modules.css';

function ProductList({ category }) {
    const [products, setProducts] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({ title: '', price: '', description: '', image: '' });

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts(category);
                setProducts(data);
            } catch (error) {
                alert(`Failed to fetch ${category}: ${error.message}`);
            }
        };

        getProducts();
    }, [category]);

    const handleDelete = async (id) => {
        try {
            await deleteProduct(category, id);
            setProducts(products.filter(item => item.id !== id));
        } catch (error) {
            alert(`Failed to delete product: ${error.message}`);
        }
    };

    const handleAddOrUpdate = async (event) => {
        event.preventDefault();
        try {
            if (currentProduct.id) {
                console.log("product list")
                await updateProductFields(category, currentProduct.id, currentProduct); // עדכון מוצר
            } else {
                await addProduct(category, currentProduct); // הוספת מוצר חדש
            }
            setFormVisible(false); // סגירת הטופס
            setCurrentProduct({ title: '', price: '', description: '', image: '' }); // איפוס הטופס
            // רענון המוצרים
            const data = await fetchProducts(category);
            setProducts(data);
        } catch (error) {
            alert(`Failed to save product: ${error.message}`);
        }
    };

    const handleEdit = (item) => {
        setCurrentProduct(item); // הגדרת המוצר לעריכה
        setFormVisible(true); // פתיחת הטופס
    };

    const handleAddNew = () => {
        setCurrentProduct({ title: '', price: '', description: '', image: '' });
        setFormVisible(true);
    };

    return (
        <>
            <button onClick={handleAddNew} className="addButton">+ Add Product</button> {/* כפתור הוספה */}

            <div className="container">
                {products && products.length > 0 ? (
                    <div className="itemsContainer">
                        {products.map((item, index) => (
                            <div className="item" key={index}>
                                <h3><strong>{item.title}</strong></h3>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <p><strong>Price: ${item.price}</strong></p>
                                <div className="descriptionContainer">
                                    <p>{item.description}</p>
                                </div>
                                <div className='buttonsContainer'>
                                    <button className="deleteButton button" onClick={() => handleDelete(item.id)}>🗑️</button>
                                    <button className="editButton button" onClick={() => handleEdit(item)}>✏️</button> {/* כפתור עריכה */}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

                {formVisible && (
                    <form onSubmit={handleAddOrUpdate} className="productForm">
                        <h2>{currentProduct.id ? 'Edit Product' : 'Add Product'}</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={currentProduct.title}
                            onChange={(e) => setCurrentProduct({ ...currentProduct, title: e.target.value })}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={currentProduct.price}
                            onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Description"
                            value={currentProduct.description}
                            onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={currentProduct.image}
                            onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })}
                            required
                        />
                        <button type="submit">{currentProduct.id ? 'Update Product' : 'Add Product'}</button>
                        <button type="button" onClick={() => setFormVisible(false)}>Cancel</button>
                    </form>
                )}
            </div>
        </>
    );
}

export default ProductList;
