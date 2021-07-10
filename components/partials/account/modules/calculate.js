import axios from 'axios';


export const createCompleteBooking = async (pick, drop) => {
    const object = {

        pickUpCode: pick,
        dropOffCode: drop,
        mass: 3,
        storeName: null,
    };

    const daaaa = await axios.post("https://droppergroup.co.za/droppa/services/plugins/quotes", object, {
        headers: {
            // "Access-Control-Allow-Origin": "*",
            "accept": "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer c6eb3ef2-f678-4a3b-9278-e7dcd61cc10d:60a504c02114cc007591f0a8',
        }
    })

    return daaaa.data.amount
    console.log(daaaa.data.amount)

    // 

    // return await axios.post('http://88.99.94.84:8080/droppa/services/' +
    //     "v1/create/complete/booking",
    //     object,
    //     {
    //         headers: {
    //             "Accept": "application/json",
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer c6eb3ef2-f678-4a3b-9278-e7dcd61cc10d:60a504c02114cc007591f0a8',
    //         }
    //     },
    //     // body: JSON.stringify(object)
    // ).then((data) => console.log(data)).catch((e) => console.log(e))


}



