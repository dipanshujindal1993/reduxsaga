export function formatNumberInUS(num) {
    if (num==='' || num===null) return

    let formattedNumber=num.replace(/[^\d]+/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3').trim()
    return formattedNumber

}

export function checkValidEmail(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim().length === 0) {
        return false;
    } else if (reg.test(email)) {
        return false;
    }
    return true;

}
