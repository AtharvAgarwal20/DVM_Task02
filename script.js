const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const bitsID = document.querySelector("#bitsID")
const hostel = document.querySelector("#hostel")
const form = document.querySelector(".form")
let errors = []
const bitsIDregex = /\d{4}(A|B)\d(PS|TH)\d{4}(P|G|H)/gi
// const emailRegex = /\/gi

function formSubmit(e) {
    errors = []

    if (name.value.trim().length < 5) {
        errors.push('Name too short')
    }
    else if (name.value.trim.length > 50) {
        error.push('Name too long')
    }

    if (phone.value.length !== 10) {
        errors.push('Invalid phone number')
    }

    var bitsIDValidation = bitsIDregex.test(bitsID.value.trim())
    if (!bitsIDValidation) {
        errors.push('Invalid BITS ID format')
    }

    if (errors.length > 0) {
        e.preventDefault()
        alert(`Following errors have been encountered\n\n${errors.join('\n')}`)
    }
    console.log(errors.join('\n'))
}

form.addEventListener('submit', formSubmit)