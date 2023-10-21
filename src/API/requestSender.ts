import axios from 'axios';

export const axiosGet = (apiEndpoint: string) => {
    return axios
        .get(apiEndpoint)
        .then(function (response) {
            // handle success
            return response;
        })
        .catch(function (error) {
            // handle error
            throw new Error(error);
        });
};
