import axios from "axios";
const getData = async (userId) => {
    try {
        const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/" + userId)
        const {data :post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        return {
            ...user,
            post
        }
    } catch(e) {
        console.error("error type:", e.message)
        throw e
    }
}

export default getData;