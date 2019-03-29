export const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email)
export const isPasswordValid = (password) => /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,12}$/.test(password)
