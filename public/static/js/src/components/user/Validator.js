export const ValidateUsername = (string) => {
    const userReg = /^[A-Za-z0-9]{6,30}$/;
    if(userReg.test(string) == false) {
        return false
    } else {
        return true
    }
}

export const ValidatePassword = (string) => {
    const passReg = /^.{6,30}$/;
    if(passReg.test(string) == false) {
        return false
    } else {
        return true
    }
}