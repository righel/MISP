import axios from 'axios'

// axios.interceptors.response.use(
//     function(response) {
//         return response;
//     },
//     function(error) {
//         if (error.response.status == 403) {
//             console.log('Unauthenticated');
//             // self.$toaster.error("ERROR: Invalid token detected");
//             //   self.logout();
//             // }
//             // throw new Error('Invalid token detected')

//         }
//     }
// );

export default axios.create({
    timeout: 10000,
    headers: {
        'Accept': 'application/json; charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8'
    }
});