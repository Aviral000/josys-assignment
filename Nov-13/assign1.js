"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["FICTION"] = 0] = "FICTION";
    BookGenre[BookGenre["NON_FICTION"] = 1] = "NON_FICTION";
    BookGenre[BookGenre["MYSTERY"] = 2] = "MYSTERY";
    BookGenre[BookGenre["SCIENCE_FICTION"] = 3] = "SCIENCE_FICTION";
    BookGenre[BookGenre["BIOGRAPHY"] = 4] = "BIOGRAPHY";
    BookGenre[BookGenre["FANTASY"] = 5] = "FANTASY";
})(BookGenre || (BookGenre = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole[MemberRole["ORGANIZER"] = 0] = "ORGANIZER";
    MemberRole[MemberRole["MODERATOR"] = 1] = "MODERATOR";
    MemberRole[MemberRole["MEMBER"] = 2] = "MEMBER";
    MemberRole[MemberRole["GUEST"] = 3] = "GUEST";
})(MemberRole || (MemberRole = {}));
function getBooksByGenre(books, genre) {
    return books.filter(function (book) { return book.genre === genre; });
}
function getMembersByRole(members, role) {
    return members.filter(function (member) { return member.role === role; });
}
function countBooksByGenre(books) {
    var _a;
    var genreCounts = (_a = {},
        _a[BookGenre.FICTION] = 0,
        _a[BookGenre.NON_FICTION] = 0,
        _a[BookGenre.MYSTERY] = 0,
        _a[BookGenre.SCIENCE_FICTION] = 0,
        _a[BookGenre.BIOGRAPHY] = 0,
        _a[BookGenre.FANTASY] = 0,
        _a);
    books.forEach(function (book) { return genreCounts[book.genre]++; });
    return genreCounts;
}
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
