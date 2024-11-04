import { books } from '@/lib/gbooks'; 
import { NextResponse } from 'next/server';

export async function PATCH(request, { params }) {
    const updatedBook = await request.json(); 
    console.log(updatedBook);
    const { id } = params; 
    const index = books.findIndex(book => book.id === id); 

    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook }; 
        return NextResponse.json(books[index]); 
    } else {
        return NextResponse.json({ error: 'Book not found' }, { status: 404 }); 
    }
}

export async function DELETE(request,{ params }) {
    const { id } = params; 
    const index = books.findIndex(book => book.id === id); 

    if (index !== -1) {
        books.splice(index, 1); 
        return NextResponse.json({ message: 'Book deleted' }); 
    } else {
        return NextResponse.json({ error: 'Book not found' }, { status: 404 }); 
    }
}