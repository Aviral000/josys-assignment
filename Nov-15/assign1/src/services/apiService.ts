import axios from 'axios';

const url: string = 'https://reqres.in/api/users/';

const getData = async () => {
    try {
        const response: any = await axios.get(url);
        const data = response?.data.data;
        console.log(data);
        return data;
    } catch (error) {
        alert("Error in fetching");
    }
}

export { getData };