"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookGenre;
(function (BookGenre) {
    BookGenre["FICTION"] = "Fiction";
    BookGenre["NON_FICTION"] = "Non-Fiction";
    BookGenre["MYSTERY"] = "Mystery";
    BookGenre["SCIENCE_FICTION"] = "Science Fiction";
    BookGenre["BIOGRAPHY"] = "Biography";
    BookGenre["FANTASY"] = "Fantasy";
})(BookGenre || (BookGenre = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole["ORGANIZER"] = "Organizer";
    MemberRole["MODERATOR"] = "Moderator";
    MemberRole["MEMBER"] = "Member";
    MemberRole["GUEST"] = "Guest";
})(MemberRole || (MemberRole = {}));
function getBooksByGenre(books, genre) {
    return books.filter(function (book) { return book.genre === genre; });
}
function getMembersByRole(members, role) {
    return members.filter(function (member) { return member.role === role; });
}
function countBooksByGenre(books) {
    var genreCounts = {};
    books.forEach(function (book) { return genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1; });
    return genreCounts;
}
// function countBooksByGenre(books: Book[]): Record<string, number> {
//     return books.reduce((acc, book) => {
//         acc[book.genre] = (acc[book.genre] || 0) + 1;
//         return acc;
//     }, {} as Record<string, number>);
// }
var books = [
    { title: "A", author: "AA", genre: BookGenre.FICTION },
    { title: "B", author: "BB", genre: BookGenre.SCIENCE_FICTION },
    { title: "C", author: "CC", genre: BookGenre.MYSTERY },
    { title: "D", author: "DD", genre: BookGenre.BIOGRAPHY },
    { title: "E", author: "EE", genre: BookGenre.MYSTERY },
];
var members = [
    { name: "Aviral", role: MemberRole.ORGANIZER },
    { name: "Archit", role: MemberRole.MEMBER },
    { name: "Aditya", role: MemberRole.MODERATOR },
    { name: "Abhay", role: MemberRole.GUEST },
    { name: "Ashish", role: MemberRole.MEMBER },
];
console.log(getBooksByGenre(books, BookGenre.MYSTERY));
console.log(getMembersByRole(members, MemberRole.MEMBER));
console.log(countBooksByGenre(books));
