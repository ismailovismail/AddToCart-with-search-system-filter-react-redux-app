
import database  from  '../firebase/firebaseConfig'
export const addBlog = (blog) => ({
    type:'ADD_BLOG',
    blog
})
export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch) => {
        const { title='', text='',price='',img='' } = blogData;
        const blog = {title,text,price,img};

        database.ref("blog").push(blog).then((res) => {
            dispatch(addBlog({
                id: res.key,
                ...blog
            }))
        })
    }
}

export const removeBlog =(id)=>({
    type:'REMOVE_BLOG',
    id:id
})
export const removeBlogFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`blog/${id}`).remove().then(() => {
            dispatch(removeBlog(id));
        })
    }   
}


export const editBlog=(id,update)=>({
    type:'EDIT_BLOG',
    id,
    update
})
export const editBlogFromDatabase = (id, update) => {
    return (dispatch) => {
        return database.ref(`blog/${id}`).update(update).then(() => {
            dispatch(editBlog(id,update));
        })
    }
}

export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs
})

export const getBlogsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("blog").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(setBlogs(blogs));
        })
    }
}