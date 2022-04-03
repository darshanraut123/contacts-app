const initialState = [
    {
        id:0,
        name:"darshan",
        email:"darshanraut3828@gmail.com",
        phone:9405686153
    },
    {
        id:1,
        name:"akshay",
        email:"ak@gmail.com",
        phone:9405686153
    },
    {
        id:2,
        name:"shubham",
        email:"shubham@gmail.com",
        phone:9405686153
    },
    {
        id:3,
        name:"sohan",
        email:"sohan@gmail.com",
        phone:9405686153
    },
    {
        id:4,
        name:"Manish",
        email:"manish@gmail.com",
        phone:9405686153
    },
    {
        id:5,
        name:"Ashish",
        email:"ashish@gmail.com",
        phone:9405686153
    },
    {
        id:6,
        name:"kaushik",
        email:"kaushik@gmail.com",
        phone:9405686153
    },
    {
        id:7,
        name:"sacha",
        email:"sacha@gmail.com",
        phone:9405686153
    }
];

const contactReducer = (state=initialState,action)=>{
    switch(action.type){
        case "add": {
            state=[action.payload,...state]
            return state;
        }

        case "delete": {
            state=state.filter(obj=>obj.id!=action.payload);
            return state;
        }

        case "update": {
            state=state.filter(obj=>obj.id!=action.payload.id);
            state=[action.payload,...state]
            return state;      
        }

        default: return state;

    }

}


export default contactReducer;