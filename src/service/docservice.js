import axios from 'axios';

const url = 'http://localhost:5000/api/docs/';

class DocService {
    static getDocs(start_date = new Date()) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(
                    url,
                    {
                        params: {
                            start_date: start_date
                        }
                    });
                const data = res.data;
                resolve(
                    data.map(doc => ({
                        ...doc,
                        time: new Date(doc.time),
                    }))
                );
            } catch(err) {
                reject();
            }
        });
    }
}

export default DocService;