import { books } from '@/lib/gbooks'; 
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(books);
}

export async function POST(request) {
    const newBook = await request.json(); 
    newBook.id = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);;
    books.push(newBook); 
    return NextResponse.json(newBook, { status: 201 }); 
    
}

 





