import axios from 'axios';


export const createCompleteBooking = async (pick, drop, province) => {

    const object = {

        mass: 1,
        pickUpProvince: province.pickUpProvince,
        parcelDimensions: [

            {
                "parcel_length": 10,

                "parcel_breadth": 10,

                "parcel_height": 10,

                "parcel_mass": 11
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
        const rawResponse = await fetch('https://droppergroup.co.za/droppa/services/plugins/courier/quotes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 66de47e2-9193-44e5-9bd5-55bb87564339:60f8012b2114cc00724765b4',
            },
            body: JSON.stringify(object)
        });
        const content = await rawResponse.json();
        console.log(content)
        return content
    }

}


export const CreateExpressBooking = async (person, store) => {
    const order = {
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
        vehicleType: "DROPPA_EXPRESS",
        pickUpAddress: "13 Esdoring Nook, Highveld Techno Park, Centurion, 0157",
        date: "2021-10-17T17:10:50",
        dropOffAddress: "13 Esdoring Nook, Highveld Techno Park, Centurion, 0157",
        province: store.province,
        destinationProvince: person.province,
        serviceId: "60f8012b2114cc00724765b4",
        transportMode: "ROAD",
        type: "DASH",
        isExpress: true,
        itemMass: 12,
        parcelDimensions: [
            {
                parcel_length: 20,
                parcel_breadth: 20,
                parcel_height: 20,
                parcel_mass: 1
            }
        ],
        pickUpPCode: store.code,
        dropOffPCode: person.code
    }


    // const daaaa = await axios.post("https://droppergroup.co.za/droppa/services/v1/book", object, {
    //     headers: {
    //         "accept": "application/json",
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer 66de47e2-9193-44e5-9bd5-55bb87564339:60f8012b2114cc00724765b4',
    //     }
    // })
    // console.log(daaaa
    // )
}
