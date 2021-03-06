import axios from 'axios';


export const createCompleteBooking = async (pick, drop, province) => {

    const object = {

        mass: 3,
        pickUpProvince: province.pickUpProvince,
        parcelDimensions: [

            {
                "parcel_length": 10,

                "parcel_breadth": 10,

                "parcel_height": 10,

                "parcel_mass": 3
            }

        ],

        dropOffProvince: province.dropOffProvince,
        // distance: 125,
        pickUpCode: pick,
        dropOffCode: drop,
        // storeName: null,
    };

    // const daaaa = await axios.post("https://droppergroup.co.za/droppa/services/plugins/courier/quotes", object, {
    //     headers: {
    //         "Access-Control-Allow-Credentials": "true",
    //         "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    //         // "origin": "www.suppl-i.com",

    //         "accept": "*",
    //         "Origin": "X-Requested-With, Content-Type, Accept, Authorization",
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer 66de47e2-9193-44e5-9bd5-55bb87564339:60f8012b2114cc00724765b4',
    //     }
    // })
    if (pick && drop && province) {
        const rawResponse = await fetch('https://www.droppa.co.za/droppa/services/plugins/courier/quotes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 24b3124f-77b6-4bf6-87ce-07c63b7a2644:5fc74d192874347c7d1f796c',
            },
            body: JSON.stringify(object)
        });
        const content = await rawResponse.json();
        console.log(content)
        return content
    }

}


export const CreateExpressBooking = async (person, store, type, shippingAmount) => {

    const myDate = new Date();
    myDate.setHours(myDate.getHours() + 2);

    const order = {
        // dropOff: {
        //     firstName: person.name,
        //     phone: person.phone,
        //     email: person.email
        // },
        // pickUp: {
        //     firstName: store.name,
        //     phone: store.phone,
        //     email: store.companyEmail
        // },
        // vehicleType: "DROPPA_EXPRESS",
        // pickUpAddress: store.address,
        // date: "2021-05-27T13:00:30.934Z",
        // dropOffAddress: person.address,
        // province: store.province || "GAUTENG",
        // // destinationProvince: person.provice || "GAUTENG",
        // serviceId: "60f8012b2114cc00724765b4",
        // transportMode: "ROAD",
        // type: type,
        // isExpress: false,
        // itemMass: 3,
        // parcelDimensions: [
        //     {
        //         parcel_length: 20,
        //         parcel_breadth: 20,
        //         parcel_height: 20,
        //         parcel_mass: 3
        //     }
        // ],
        // pickUpPCode: store.code,
        // dropOffPCode: person.code,
        // // price: 300,
        // status: "BUCKET",
        // labour: 0,
        // canopy: true,
        // load: 1,



        dropOff: {
            firstName: person.name,
            phone: person.phone,
            email: person.email
        },
        pickUp: {
            firstName: store.name,
            phone: store.phone,
            email: store.companyEmail
        },
        "vehicleType": "DROPPA_EXPRESS",
        "pickUpAddress": store.address,
        "date": myDate.toISOString(),
        "dropOffAddress": person.address,
        "labour": 0,
        "canopy": true,
        "load": 1,
        "province": person.provice,
        "serviceId": "5fc74d192874347c7d1f796c",
        "transportMode": "ROAD",
        "type": type,
        "isExpress": false,
        "itemMass": 3,
        parcelDimensions: [
            {
                parcel_length: 20,
                parcel_breadth: 20,
                parcel_height: 20,
                parcel_mass: 3
            }
        ],
        "pickUpPCode": store.code,
        "dropOffPCode": person.code,
        "price": shippingAmount,
    }




    const rawResponse = await fetch('https://www.droppa.co.za/droppa/services/v1/create/express/booking', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 24b3124f-77b6-4bf6-87ce-07c63b7a2644:5fc74d192874347c7d1f796c',
        },
        body: JSON.stringify(order)
    });
    const content = await rawResponse.json();
    console.log(content)
    return content



}
