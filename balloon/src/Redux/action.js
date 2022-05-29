// action type
export const DATA_SUCCESS = "DATA_SUCCESS" ;

// action creater
export const data_success = (payload) => ({
    type : DATA_SUCCESS ,
    payload ,
});


export const randomColor = () => (disptach) =>{
    let letters = '0123456789ABCDEF'.split('');
    let arr = [] ;
    for(let j = 0 ; j<5 ; j++){
       var color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    var dataObj = {
        id : j ,
        color : color ,
    }
    arr.push(dataObj) ;
    }
    disptach(data_success(arr)) ;
}
