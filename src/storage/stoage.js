const IsAutorizedUserKey = 'isAutorizedUser'

export function setIsAutorizedUserStorage(value) {
    localStorage.setItem(IsAutorizedUserKey, value)
}

export function getIsAutorizedUserStorage() {
    return JSON.parse(localStorage.getItem(IsAutorizedUserKey))
}