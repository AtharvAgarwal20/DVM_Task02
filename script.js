const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const bitsID = document.querySelector("#bitsID")
const hostel = document.querySelector("#hostel")
const sizes = document.querySelectorAll(".sizes")
const form = document.querySelector(".form")
const merchImg = document.querySelector("#merchImage")
const initHeading = document.querySelector("#initialHeading")
const confirmed = document.querySelector("#confirmed")
var errors = []
var userData = {
    'name': '',
    'email': '',
    'phone': '',
    'bitsID': '',
    'hostel': '',
    'size': ''
}
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
const bitsIDregex = new RegExp(/\d{4}(A|B)\d(PS|TH)\d{4}(P|G|H)/gi)

function emailValidate() {
    if (email.value.trim().match(emailRegex) == email.value.trim()) {
        return true
    }
    else {
        return false
    }
}

function bitsIDValidate() {
    if (bitsID.value.trim().match(bitsIDregex) == bitsID.value.trim()) {
        return true
    }
    else {
        return false
    }
}

function formSubmit(e) {
    e.preventDefault()
    errors = []
    userData = {
        'name': '',
        'email': '',
        'phone': '',
        'bitsID': '',
        'hostel': '',
        'size': ''
    }

    if (name.value.trim().length < 5) {
        errors.push('Name too short')
    }
    else if (name.value.trim().length > 50) {
        error.push('Name too long')
    }

    if (!emailValidate()) {
        errors.push('Invalid Email')
    }

    if (phone.value.length !== 10) {
        errors.push('Invalid phone number')
    }

    if (!bitsIDValidate()) {
        errors.push('Invalid BITS ID')
    }

    if (errors.length > 0) {
        alert(`Following errors have been encountered\n\n${errors.join('\n')}`)
    }
    else if (errors.length === 0) {
        userData['name'] = name.value.trim()
        userData['email'] = email.value.trim()
        userData['phone'] = phone.value
        userData['bitsID'] = bitsID.value.trim()
        userData['hostel'] = hostel.value

        for (let i = 0; i < sizes.length; i += 1) {
            if (sizes[i].checked) {
                userData['size'] = sizes[i].value
            }
        }

        fetch('https://www.foo.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(userData)
        })

        form.style.display = "none";
        initHeading.style.display = "none";
        merchImg.style.display = "none";
        confirmed.style.display = "block";

        console.log('Success')
        console.log(userData)
    }
}

form.addEventListener('submit', formSubmit)