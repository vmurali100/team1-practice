let defaultstate={
    persons:[
        {
            "fname": "Dinesh",
            "lname": "Kumar"
        },
        {
            "fname": "Monish",
            "lname": "Reddy"
        },
        {
            "fname": "Hem Krish",
            "lname": "Reddy"
        },
        {
            "fname": "Loknath",
            "lname": "Reddy"
        },
        {
            "fname": "Vijay",
            "lname": "Prathap"
        },

    ]
}
export default function rootreducer(state=defaultstate,action) {
    switch (action.type) {
        case "GET_ALL_DETAILS":
            return state
            break;
    
        default:
            return state.persons
            break;
    }
    
}