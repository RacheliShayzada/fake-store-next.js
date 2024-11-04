import React from 'react';
import Link from 'next/link';
import { imageUrls } from './HomeData';
import './Home.modules.css'; // קובץ ה-CSS שנוסיף בהמשך

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="card">
                <img src={imageUrls.jewelry} alt="תכשיטים" className="card-image" />
                <Link href="/Jewlary" className="card-link">Jewelry</Link>
            </div>
            <div className="card">
                <img src={imageUrls.books} alt="ספרים" className="card-image" />
                <Link href="/Books" className="card-link">Books</Link>
            </div>
        </div>
    );
}

export default HomePage;
