enum BookGenre {
    FICTION = "Fiction",
    NON_FICTION = "Non-Fiction",
    MYSTERY = "Mystery",
    SCIENCE_FICTION = "Science Fiction",
    BIOGRAPHY = "Biography",
    FANTASY = "Fantasy"
}

enum MemberRole {
    ORGANIZER = "Organizer",
    MODERATOR = "Moderator",
    MEMBER = "Member",
    GUEST = "Guest"
}

type Book = {
    title: string;
    author: string;
    genre: BookGenre;
};

type Member = {
    name: string;
    role: MemberRole;
};

function getBooksByGenre(books: Book[], genre: BookGenre): Book[] {
    return books.filter(book => book.genre === genre);
}

function getMembersByRole(members: Member[], role: MemberRole): Member[] {
    return members.filter(member => member.role === role);
}

// type Data = {
//     BookGenre: string,
//     number: number
// }

// type Partial = {
//     Record: Data
// }

function countBooksByGenre(books: Book[]): Partial<Record<BookGenre, number>> {
    // const genreCounts: { [key in BookGenre]?: number } = {};

    // for (const book of books) {
    //     genreCounts[book.genre] = (genreCounts[book.genre] ?? 0) + 1;
    // }

    // return genreCounts;
    const genreCounts: Partial<Record<BookGenre, number>> = {};

    books.forEach(book => genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1);

    return genreCounts;
}

// function countBooksByGenre(books: Book[]): Record<string, number> {
//     return books.reduce((acc, book) => {
//         acc[book.genre] = (acc[book.genre] || 0) + 1;
//         return acc;
//     }, {} as Record<string, number>);
// }

const books: Book[] = [
    { title: "A", author: "AA", genre: BookGenre.FICTION },
    { title: "B", author: "BB", genre: BookGenre.SCIENCE_FICTION },
    { title: "C", author: "CC", genre: BookGenre.MYSTERY },
    { title: "D", author: "DD", genre: BookGenre.BIOGRAPHY },
    { title: "E", author: "EE", genre: BookGenre.MYSTERY },
];

const members: Member[] = [
    { name: "Aviral", role: MemberRole.ORGANIZER },
    { name: "Archit", role: MemberRole.MEMBER },
    { name: "Aditya", role: MemberRole.MODERATOR },
    { name: "Abhay", role: MemberRole.GUEST },
    { name: "Ashish", role: MemberRole.MEMBER },
];

console.log(getBooksByGenre(books, BookGenre.MYSTERY));
console.log(getMembersByRole(members, MemberRole.MEMBER));
console.log(countBooksByGenre(books));

export {};
