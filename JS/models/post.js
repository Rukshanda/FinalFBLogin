export class Post {
    constructor(userName , userDp, content , postImg, id , likes = 0 ){
        this.userName = userName;
        this.userDp = userDp;
        this.content = content;
        this.postImg = postImg || null || " ";
        this.likes = likes;
        this.id = Math.random().toString(16).slice(2);
    }
}