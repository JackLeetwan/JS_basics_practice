const cookie = {
    name: "czekoladowe ciastko",
    isGlutenFree: false,
    // "+smaczne": true
    eatCookie: function () {
        console.log("I am eating "+ this.name);
    }
}

cookie.name = "piegusek";
cookie.isGlutenFree = true;
// console.log(cookie["+smaczne"]);
// console.log(cookie);
// cookie.eatCookie();

class Cookie {
 constructor(name, isGlutenFree){
    this.name = name;
    this.isGlutenFree = isGlutenFree;
 }   
 eatCookie(){
    console.log("I am eating "+ this.name);
}
}
const myCookie = new Cookie("Iced Oatmeal", false);

// console.log(myCookie);
myCookie.eatCookie();