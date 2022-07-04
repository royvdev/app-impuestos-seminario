export function saveDataToLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
};

export function getDataFromLocalStorage(key){
    let data = localStorage.getItem(key);
    if (data !== undefined) {
        return JSON.parse(data);
    }
};
