// Public:
// 1) when you what that something can be accessable for every one you use public keyword.
// if you dont add public ts automatically add it as public

// e.g

class UserDetails {
  username: string; //all are marked as public
  email: string;
  readonly city: string = "Gilgit";
  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }
}
const saim = new UserDetails("saim", "Saim.emal");

// Private
// when you what that something can NOT be accessable for every one you use PRIVATE keyword.
// 2) It is part of TypeScript Ont JavaScript
/*
class BoxDetails {
   private username: string; //all are marked as public
    email: string;
    readonly city: string = "Gilgit";
    constructor(username: string, email: string) {
      this.username = username;
      this.email = email;
    }
  }*/
// SAME WAY OF DOING THE ABOVE WORK
class BoxDetails {
  readonly city: string = "Gilgit";
  constructor(private username: string, public email: string) {
    this.username = username;
    this.email = email;
  }
}
const Box = new BoxDetails("saim", "Saim.emal");
Box.username = "sadf"; //not accessable beacuse of private
