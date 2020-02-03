import axios from 'axios';

consultar = function() {
    const promise = axios.get("http://jsonplaceholder.typicode.com/users");

    return promise;
}