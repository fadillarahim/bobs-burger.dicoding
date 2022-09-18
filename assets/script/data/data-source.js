class DataSource{
    static loadMember(){
        return fetch('https://bobsburgers-api.herokuapp.com/characters?limit=15')
        .then(response=>{
            return response.json();
        })
        .then(responseJson =>{
            if (responseJson) {
                return Promise.resolve(responseJson);
              } else {
                return Promise.reject(`Upsss Something Wrong Here, Sorry!!!`);
              }
        });
    }
}

export default DataSource;