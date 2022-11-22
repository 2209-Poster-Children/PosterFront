// users fetches

async function registerFetch(username, password) {
    try {
        const response = await fetch(
            'https://poster-backendapi.onrender.com/api/users/register',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                        username: username,
                        password: password
                })
            }
        )

        const data = await response.json();
        console.log("register data:", data);
        return data;
    } catch(error) {
        console.log(error);
    }
}


async function loginFetch(username, password) {
    try {
        const response = await fetch(
            'https://poster-backendapi.onrender.com/api/users/login',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        )

        const data = await response.json();
        console.log("login data: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
}


async function userFetch() {    
    try {
        const response = await fetch(
            'https://poster-backendapi.onrender.com/api/users/me',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            
        const data = await response.json();
        console.log("user data: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
}


module.exports = { registerFetch, loginFetch, userFetch };