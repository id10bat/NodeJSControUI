var onPage = require('./index')

exports.userOn = (val) => {
    // if(val === undefined){
    //    val = false;
    //    onPage.checkValue(val)
    // }else{
        onPage.checkValue(val)
    // }
   
    console.log(val)
    return val;
};

exports.On = (user) => {
    userOn = user

    return userOn;

}


// Test Code

// var check = {
//     userOn : (val) => {
//         if(val === undefined){
//             val =false
//             console.log(val)
//         }
//         // onPage.checkValue(val)
//         // console.log(val)
//         // return val;
//     },
    
//     On : (user) => {
//         userOn = user
    
//         return userOn;
    
//     }
// }

// return check.userOn()