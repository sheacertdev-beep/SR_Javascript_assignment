let post = {
  username: "coder_dan",
  caption: "Learning JavaScript every day!",
  likes: 120,
  comments: ["Great post!", "Keep it up!", "So helpful!"],

  addLike: function () {
    this.likes = this.likes + 1;
  }
};

post.addLike();
console.log("Likes after addLike:", post.likes);


let { username, caption } = post;
console.log("Username:", username);
console.log("Caption:", caption);