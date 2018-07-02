export class MovementBooks {
    id?: number;
    date: Date;
    bookId: number;
    clientId: number;
}

export class BookReading {
    id: number;
    name: string;
    author: string;
    readerFullName: string;
    promiseDateReturn: Date;
}

export class Book {
    id: number;
    name: string;
    author: string;
}

export class Client {
    id: number;
    fullName: string;
}