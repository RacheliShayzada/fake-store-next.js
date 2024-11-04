import React from 'react';
import ProductList from '../../components/ProductList'

const BooksPage = () => {
    return (
        <div>
            <h1>Books Collection</h1>
            <ProductList category="books" />
        </div>
    );
};

export default BooksPage;
