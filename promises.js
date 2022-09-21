const posts = [
    {title:'Post One', body:'this is post one'},
    {title:'Post Two', body:'this is post two'}
];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     },1000)
// }

// function createPosts(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             posts.push(post);
            
//             let error = false;

//             if(!error) {
//                 resolve();
//             }
//             else {
//                 reject('Error : there is something wrong')
//             }

//         },2000)
//     })
// }

// function deletePosts() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if(posts.length !== 0) {
//                 resolve();
//             }
//             else {
//                 reject('Error : cannot delete because posts is empty')
//             }

//             posts.pop();

//         }, 4000)
//     })
// }



// // creating new Promise

// createPosts({title : 'Post Three', body : 'This is post three'})
// .then(() => {
//     getPosts();
//     deletePosts()
//     .then(() => {
//         getPosts();
//         deletePosts()
//         .then(() => {
//             getPosts();
//             deletePosts()
//             .then(() => {
//                 getPosts();
//                 deletePosts()
//                 .then(() => {
//                     getPosts();
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     createPosts({title : 'Post Four', body : 'This is post four'})
//                     .then( () => {
//                         getPosts();
//                         deletePosts()
//                         .then(() => {
//                             getPosts();
//                             deletePosts()
//                             .then(() => {
//                                 getPosts();
//                             })
//                             .catch((err) => {console.log(err)});
//                         })
//                         .catch((err) => {console.log(err)});
//                     })
//                     .catch((err) => {console.log(err)});
//                 })
//             })
//             .catch((err) => {console.log(err)});
//         })
//         .catch((err) => {console.log(err)});
//     })
//     .catch((err) => {console.log(err)})
// })
// .catch((err) => {console.log(err)});




// // Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Goodbye');
//     }, 2000);
// })

// Promise.all([promise1,promise2,promise3])
// .then((value) => {console.log(value)});



// const lastActiveBeforeCreation = new Date().getTime();

// const updateLastUserActivityTime = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000)
// })


// Promise.all([createPosts({title:'Post five', body:'This is post five'}), updateLastUserActivityTime])
// .then(() => {
//     console.log(`Time before creating new post ${lastActiveBeforeCreation}`);
//     posts.forEach((post) => {
//         console.log(post.title);
//     }),
//     console.log(`Users last Active time: ${Math.trunc((new Date().getTime()-lastActiveBeforeCreation)/1000)} seconds after creating new post`);


//     deletePosts()
//     .then(() => {
//         console.log('Deleted the last post');
//         posts.forEach((post) => {
//             console.log(post.title);
//         })
//         console.log(`Users last Active time: ${Math.trunc((new Date().getTime()-lastActiveBeforeCreation)/1000)} seconds after creating new post`);
//     })
    
// }
// )

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000)
}

getPosts();


const  createPosts = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.push(post);
            
            let error = false;

            if(!error) {
                resolve();
            }
            else {
                reject('Error : there is something wrong')
            }

        },2000)
    })
}

const  deletePosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(posts.length !== 0) {
                resolve();
            }
            else {
                reject('Error : cannot delete because posts is empty')
            }

            posts.pop();

        }, 2000)
    })
}


// async function 

async function postCreation() {

    const lastActiveBeforeCreation = new Date().getTime();

    console.log(`Time before creating new post ${lastActiveBeforeCreation}`);
    
    try {
        await createPosts({title : 'Post Three', body : 'This is post three'});
    }
    catch(e) {
        console.log(e);
    }
    
    getPosts()
    
    try {
        await deletePosts();
    }
    catch(e) {
        console.log(e);
    }

    getPosts()

    try {
        await deletePosts();
    }
    catch(e) {
        console.log(e);
    }

    getPosts()

    try {
        await deletePosts();
    }
    catch(e) {
        console.log(e);
    }

    getPosts()

    try {
        await deletePosts();
    }
    catch(e) {
        console.log(e);
    }
    
    
    
    const updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    })
    
    
    await Promise.all([createPosts({title:'Post five', body:'This is post five'}), updateLastUserActivityTime]);

    console.log(`Users last Active time: ${Math.trunc((new Date().getTime()-lastActiveBeforeCreation)/1000)} seconds after creating new post`);
    
    getPosts();

    try {
        await deletePosts();
    }
    catch(e) {
        console.log(e);
    }

    getPosts();

    try {
        await deletePosts();
    }
    catch(e) {
        console.log(e);
    }

    console.log(`Users last Active time: ${Math.trunc((new Date().getTime()-lastActiveBeforeCreation)/1000)} seconds after creating new post`);
 
}

postCreation();