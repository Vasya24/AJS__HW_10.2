// import read from './reader'
// import json from './parser'

// export default class GameSavingLoader {
//   static load() {
//     const data = read(); // возвращается Promise!
//     const value = json(data); // возвращается Promise!
//     return value;
//   }
// }



export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          "id": 1, 
          "created": 1596291883,
          "userInfo": {
            "id": 1, 
            "name": "Василий",
            "level": 80,
            "points":  100
          }
        }
        resolve(data)
      }, 1000)}
      )}
    }