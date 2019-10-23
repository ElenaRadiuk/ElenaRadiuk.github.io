const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://test@localhost/test');

class User extends Sequelize.Model {
    get age(){

    }
}

User.init({
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
  password: Sequelize.STRING,
}, { sequelize, modelName: 'user' });


class Post extends Sequelize.Model {
    get commentsCount(){
        return this.getComments().then(comments => comments.length)
    }
    get user(){
        return this.getUser()
    }
}

Post.init({
    title: Sequelize.STRING,
    text: Sequelize.TEXT
},{ sequelize, modelName: 'post' })

User.hasMany(Post)
Post.belongsTo(User)


class Tag extends Sequelize.Model {}
Tag.init({
    text: Sequelize.STRING
},{ sequelize, modelName: 'tag' })

Post.belongsToMany(Tag, {through: 'post2tag'})
Tag.belongsToMany(Post, {through: 'post2tag'})




;(async () => {
    await sequelize.sync()

    console.log(Post.prototype)
    console.log(User.prototype)

//    let john = await User.create({username: 'John', birthday: new Date()})
    //let john = await User.findOne({where: {username, password}})

    ////console.log(john.__proto__)
    ////console.log(Post.prototype)
    ////
    ////

    //let tag = await Tag.findByPk(1)

    //console.log((await tag.getPosts()).map(post => post.text))

    //let [post1, post2] = await john.getPosts()

    //console.log(Post.prototype)

    //let nodejs = await Tag.create({text: 'nodejs'})
    //let redux  = await Tag.create({text: 'redux'})

    //await post1.addTags([nodejs, redux])

    //await redux.addPost(post2)

    //post2.text = 'this is John\'s second post';

    //await post2.save()




    //let post = john.createPost({title: 'John Post', text: 'John First Post text'})
    //let post = Post.create({userId: john.id, title: 'John Post', text: 'John First Post text'})
})()
  //.then(() => User.create({
    //username: 'janedoe',
    //birthday: new Date(1980, 6, 20)
  //}))
  //.then(jane => {
    //console.log(jane.toJSON());
  //});
