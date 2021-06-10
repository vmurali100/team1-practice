let defaultstate={
    users:[
        {
            "fname": "Kendra",
            "lname": "Saver"
        },
        {
            "fname": "Gregory",
            "lname": "Masimore"
        },
        {
            "fname": "Dedun",
            "lname": "Grubbs"
        },
        {
            "fname": "Sidney",
            "lname": "Mcnamee"
        },
        {
            "fname": "Karl",
            "lname": "Hemmer"
        },
    ]
}
export default function rootreducer(state=defaultstate,action){
    switch (action.type) {
        case "GET_ALL_EMP":
           return state
            break;
    
        default:
            return state.users
    }
}