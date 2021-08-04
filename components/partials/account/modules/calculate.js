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
            'Authorization': 'Bearer 66de47e2-9193-44e5-9bd5-55bb87564339:60f8012b2114cc00724765b4',
        }
    })

    return daaaa.data.amount
}


export const CreateExpressBooking = async () => {
    const dropTime = 2021 + '-' + 12 + '-' + 17 + 'T' + 17 + ':' + 10 + ':' + 50;

    const object = {
        dropOff: {
            firstName: "Hello",
            lastName: "Hello 12",
            phone: "0798344109",
            email: "Hello@gmail.com"
        },
        pickUp: {

            firstName: "Nicolas",
            lastName: "Hello 122",
            phone: "0798344109",
            email: "Hello@gmail.com"
        },
        vehicleType: "DROPPA_EXPRESS",
        pickUpAddress: "13 Esdoring Techno Park, Centurion, 0157",
        dropOffAddress: "Amampondo Drive, Rooihuiskraal North, Centurion, 0157, South Africa",
        date: dropTime,
        price: 100,
        labour: 1,
        comment: "Nicolas Rasekgala",
        canopy: false,
        load: 1,
        province: "GAUTENG",
        serviceId: "60f8012b2114cc00724765b4",
        transportMode: "ROAD",
        type: "EXPRESS_COURIER",
        isExpress: true,
        itemMass: 2,
        parcelDimensions: [
            {
                "parcel_length": 20,
                "parcel_breadth": 30,
                "parcel_height": 40,
                "parcel_mass": 50
            }
        ],
        fromSuburb: "Centurion",
        toSuburb: "Highveld",
        pickUpPCode: "0157",
        dropOffPCode: "0169"
    }


    const daaaa = await axios.post("https://droppergroup.co.za/droppa/services/v1/create/express/booking", object, {
        headers: {
            "accept": "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 66de47e2-9193-44e5-9bd5-55bb87564339:60f8012b2114cc00724765b4',
        }
    })
    console.log(daaaa
    )
}
