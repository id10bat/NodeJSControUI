

var Page = () => {
    var Input = (type, name, id) => {
        return '<input type="' + type + '" name="' + name + '" id="' + id + '" required="required">'
            + '<label for="' + id + '">' + name + '</label>';
    }
    var Label = () => {
        return
    }
    var btnLogin = {
        button: () => {
            let span = '<span>GO</span>';
            var btnGo = () => {
                let btn = '<button id="loginBtn" type="submit">' + span + '</button>';
                return btn;
            }
            return btnGo();

        }
    };

    var Close = '<div class="close"></div>';

    var Head = (name) => {
        return '<h1 class="title">' + name + Close + '</h1>';
    }

    var btnRegister = {
        button: () => {
            let span = '<span>Next</span>';
            var btnNext = () => {
                let btn = '<button id="registerBtn" type="submit">' + span + '</button>';
                return btn;
            }
            return btnNext();
        }
    }

    let bar = '<div class="bar"></div>'

    var registerForm = {
        Form: () => {
            let toggle = '<div class="toggle"></div>';

            let Username = '<div class="input-container">' + Input("#{label}", "Username", "#{label}") + bar + '</div>';
            let Password = '<div class="input-container">' + Input("password", "Password", "#{label}") + bar + '</div>';
            let repeatPassword = '<div class="input-container">' + Input("password", "Repeat_Password", "#{label}") + bar + '</div>';
            let btnNextForm = '<div class="button-container">' + btnRegister.button() + '</button>'
            let cardAlt = {
                Form: () => {
                    let formR = '<form method="get" action="/regis">' + Username + Password + repeatPassword +btnNextForm + '</form>'
                    return '<div class="card alt">' + toggle + Head("Register") + formR +  '</div>';
                }
            }
            return cardAlt.Form();
        }
    }

    var loginForm = {
        Form: () => {
            let formBtnGo = '<div class="button-container">' + btnLogin.button() + '</div>';
            let Username = '<div class="input-container">' + Input("#{label}", "Username", "#{label}") + bar + '</div>';
            let Password = '<div class="input-container">' + Input("password", "Password", "#{label}") + bar + '</div>';
            let form = () => {

                let card = '<form method="get" action="/login">' + Username + Password + formBtnGo + '</form>';
                return card;
            }
            return '<div class="card">' + Head("Login") + form() + registerForm.Form() + '</div>';
        }
    }

    var indexPage = {
        Page: () => {
            let container = '<div class="container">' + '<div class="card"></div>' + loginForm.Form() + '</div>';

            let index = {
                html: () => {
                    let metaUTF = '<meta charset="UTF-8">'
                    let metaIe = '<meta http-equiv="X-UA-Compatible" content="ie=edge">';
                    let metaViewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
                    let tag = '<link rel="stylesheet" type="text/css" href="./css/style.css">'
                    let scripts = '<script src="script.js" ></script>';
                    let fontawesome = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
                    let jquery = '<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>';
                    let headTag = () => {
                        return '<head>' + metaUTF + metaViewport + metaIe + tag + fontawesome + jquery + '</head>';
                    }

                    let bodyTag = () => {
                        return '<body>' + container + '</body>';
                    }

                    let htmlTag = () => {
                        return '<!DOCTYPE html>' + '<html lang="en">' + headTag() + bodyTag() + scripts + '</html>';
                    }
                    return htmlTag();
                }
            }
            return index.html()
        }
    }

    return indexPage.Page();

}

module.exports = Page();