enum BookGenre {
    FICTION,
    NON_FICTION,
    MYSTERY,
    SCIENCE_FICTION,
    BIOGRAPHY,
    FANTASY
}

enum MemberRole {
    ORGANIZER,
    MODERATOR,
    MEMBER,
    GUEST
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

function countBooksByGenre(books: Book[]): Record<BookGenre, number> {
    const genreCounts: Record<BookGenre, number> = {
        [BookGenre.FICTION]: 0,
        [BookGenre.NON_FICTION]: 0,
        [BookGenre.MYSTERY]: 0,
        [BookGenre.SCIENCE_FICTION]: 0,
        [BookGenre.BIOGRAPHY]: 0,
        [BookGenre.FANTASY]: 0,
    };

    books.forEach(book => genreCounts[book.genre]++);

    return genreCounts;
}

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
