import {DATA_SUCCESS} from "./action";

const initState = {
    mainData : [] ,
    dataAvailable : false ,
}

export const dataReducer = (store=initState , {type , payload}) => {
    switch(type){
        case DATA_SUCCESS:
            return{
                ...store ,
                mainData:[...payload] ,
                dataAvailable : true ,
            }

        default:
            return store ;
    }
}
