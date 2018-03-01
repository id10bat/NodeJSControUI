const fs = require('fs');

var check = require('./checkOn')


var backend = {

Login: (email, pass) => {
    fs.readFile('database.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            // console.log(err);
        } else {

            var obj = JSON.parse(data); //now it an object}
            var checkNum;
            for (i = 0; i <= obj.length; i++) {
                for (const prop in obj[i]) {
                    if (prop == "Email") {

                        if (obj[i][prop] == email) {
                            checkNum = i
                            console.log("Email OK")
                        }

                    }

                }

            }
            if (checkNum == undefined) {
                console.log("Email incorrect")
            } else {
                if (pass == obj[checkNum].Password) {
                    check.userOn(check.On(true))
                    console.log("Password OK")
                    // console.log(userOn)
                } else {
                    check.userOn(check.On(false))
                    // return checkStat;
                    console.log("Password incorrect")
                    // console.log(userOn)
                }
            }


        }
    })
},

Register: (email, pass, repass) => {

    fs.readFile('database.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data); //now it an object}

            obj.push({ Email: `${email}`, Password: `${pass}`, RePassword: `${repass}` }); //add some data
            var json = JSON.stringify(obj); //convert it back to json
            console.log(json)
            fs.writeFile('database.json', json, 'utf8', (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            }); // write it back 
        }
    })

},
Logout: () =>{
    check.userOn(check.On(false))
}

}

    // checkOn: (callback) => {
    //     callback(user)
    //     // console.log(user)

    // },
// backend.Login("nut@test.com", "123456")



// backend.checkOn((user)=>{
//     console.log(user)
// })


// backend.Register("nut@test.com","123456","123456")
module.exports = backend;
