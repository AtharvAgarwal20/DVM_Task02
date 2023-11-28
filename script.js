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
const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailError")
const phoneError = document.querySelector("#phoneError")
const bitsIDError = document.querySelector("#bitsIDError")
const errorBoxes = document.querySelector("#errorBoxes")
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

function clearErrors() {
    nameError.style.color = "white"
    emailError.style.color = "white"
    phoneError.style.color = "white"
    bitsIDError.style.color = "white"
    errorBoxes.style.display = "none"
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
        nameError.style.color = "red";
        errors.push('Name too short')
    }
    else if (name.value.trim().length > 50) {
        nameError.style.color = "red";
        error.push('Name too long')
    }

    if (!emailValidate()) {
        emailError.style.color = "red";
        errors.push('Invalid Email')
    }

    if (phone.value.length !== 10) {
        phoneError.style.color = "red";
        errors.push('Invalid phone number')
    }

    if (!bitsIDValidate()) {
        bitsIDError.style.color = "red";
        errors.push('Invalid BITS ID')
    }

    if (errors.length > 0) {
        // alert(`Following errors have been encountered\n\n${errors.join('\n')}`)
        errorBoxes.style.display = "inline-block";
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
name.addEventListener('focus', clearErrors)
email.addEventListener('focus', clearErrors)
phone.addEventListener('focus', clearErrors)
bitsID.addEventListener('focus', clearErrors)