
let defaultstate={
    users:[
        {
            "fname": "Hemanth",
            "lname": "Reddy"
        },
        {
            "fname": "Gagan",
            "lname": "Reddy"
        },
        {
            "fname": "Jaideep",
            "lname": "Reddy"
        },
        {
            "fname": "Murali",
            "lname": "Krishna"
        },
        {
            "fname": "Sai",
            "lname": "Prathap"
        },
    ]
}

export default function rootreducer(state=defaultstate,action) {
    switch (action.type) {
        case "Get_All_EMPLOYERS":
            return state
            break;
    
        default:
           return state.users
    }
}