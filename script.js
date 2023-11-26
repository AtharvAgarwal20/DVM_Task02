const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const bitsID = document.querySelector("#bitsID")
const hostel = document.querySelector("#hostel")
const form = document.querySelector(".form")
var errors = []
var userData = {
    'name': '',
    'email': '',
    'phone': '',
    'bitsID': '',
    'hostel': '',
}
// const bitsIDregex = /\d{4}(A|B)\d(PS|TH)\d{4}(P|G|H)/gi
// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
const bitsIDregex = new RegExp(/\d{4}(A|B)\d(PS|TH)\d{4}(P|G|H)/gi)

function formSubmit(e) {
    errors = []
    userData = {
        'name': '',
        'email': '',
        'phone': '',
        'bitsID': '',
        'hostel': '',
    }
    let emailValidation = emailRegex.test(email.value.trim())
    let bitsIDValidation = bitsIDregex.test(bitsID.value.trim())

    if (name.value.trim().length < 5) {
        errors.push('Name too short')
    }
    else if (name.value.trim.length > 50) {
        error.push('Name too long')
    }

    if (!emailValidation) {
        errors.push('Invalid Email')
    }

    if (phone.value.length !== 10) {
        errors.push('Invalid phone number')
    }

    if (!bitsIDValidation) {
        errors.push('Invalid BITS ID format')
    }

    if (errors.length > 0) {
        e.preventDefault()
        alert(`Following errors have been encountered\n\n${errors.join('\n')}`)

    }
    else if (errors.length === 0) {
        userData['name'] = name.value.trim()
        userData['email'] = email.value.trim()
        userData['phone'] = phone.value
        userData['bitsID'] = bitsID.value.trim()
        userData['hostel'] = hostel.value

        fetch('https://www.foo.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }
    console.log(errors.join('\n'))
    console.log(name.value.trim())
    console.log(email.value.trim())
    console.log(typeof (email.value.trim()))
    console.log(bitsID.value.trim())
    console.log(typeof (bitsID.value.trim()))
    console.log(phone.value)
    console.log(hostel.value)
    console.log(bitsIDregex)
    console.log(bitsIDValidation)
    console.log(emailRegex)
    console.log(emailValidation)
}

form.addEventListener('submit', formSubmit)