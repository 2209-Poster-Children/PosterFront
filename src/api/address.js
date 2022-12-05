// address fetches


export async function getAddressesFetch() {
    try {
        const response = await fetch(
            'https://poster-backendapi.onrender.com/api/address',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
        )

        const data = await response.json();
        console.log("addresses data: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
}


export async function newAddressFetch(userId, address, city, state, zipcode, primaryAddress) {
    try {
        const response = await fetch(
            'https://poster-backendapi.onrender.com/api/address',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    userId: userId,
                    address: address,
                    city: city,
                    state: state,
                    zipcode: zipcode,
                    primaryAddress: primaryAddress
                })
            }
        )

        const data = await response.json();
        console.log("new address data: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
}
