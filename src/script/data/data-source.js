class DataSource {
    static province() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        return fetch(`${proxy}https://api.kawalcorona.com/indonesia/provinsi/`)
            .then(response => {
                return response.json();
            })
            .then(ResponseJson => {
                return Promise.resolve(ResponseJson);
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
}

export default DataSource;