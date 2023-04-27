<h1 align="center">RESTFUL Blog Service</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Platform](https://img.shields.io/badge/platform-reddit-orange.svg)](https://www.reddit.com/user/Wordbook_Bot)
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---


## 📝 Table of Contents

- [About](#about)
- [Usage](#usage)
- [Contact](#Contact)
- [Contributing](../CONTRIBUTING.md)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
Aimed to create A 'GraphQL' service built with Node.js

Schema:
```
-> Root Query
    -login(email: String!, password: String!): AuthData!
    -posts(page: Int!): PostData!
    -post(id: ID!): Post!
    -user: User!

-> Root Mutation
    -createUser(userInput: UserInputData): User!
    -createPost(postInput: PostInputData): Post!
    -updatePost(id: ID!, postInput: PostInputData): Post!
    -deletePost(id: ID!): Boolean
    -updateStatus(status: String!): User!

-> DBMS
    - Posts
        Post
            creator
            title
            createdAt
            updatedAt
    - Users
        User
            email
            password
            name
            status
            posts
```

## 🎈 Usage <a name = "usage"></a>

You can run the app by writing this line on cmd, type:

```
npm install --save
npm start
```

## ✍️ Contact <a name = "Contact"></a>

- [@xddemir](https://github.com/xddemir) - Github
- [@dogukan.demir991@gmail.com](dogukan.demir991@gmail.com) - Email


See also the list of [contributors](https://github.com/xddemir/Restful-Blog-Service/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
