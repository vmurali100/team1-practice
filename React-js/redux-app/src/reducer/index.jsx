let defaultstate={
    users: [
        {
            "fname": "Marisela",
            "lname": "Hettrick"
        },
        {
            "fname": "Noby",
            "lname": "Willms"
        },
        {
            "fname": "Vernon",
            "lname": "Stevenson"
        },
        {
            "fname": "Nishal",
            "lname": "Brown"
        },
        {
            "fname": "Wattis",
            "lname": "Hydle"
        }
    ]
}
export default function rootreducer(state=defaultstate,action) {
    switch (action.type) {
        case "GET_ALL_USER":
           return state            
            break;
    
        default:
            return state.users
    }
}