const cookie = {
    name: "czekoladowe ciastko",
    isGlutenFree: false,
    "+smaczne": true
}

cookie.name = "piegusek";
cookie.isGlutenFree = true;
console.log(cookie["+smaczne"]);
console.log(cookie);