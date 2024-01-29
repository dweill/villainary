import { ApiUrl } from '../interfaces/api-url';

async function getData<TData>(endpoint: ApiUrl): Promise<TData> {
    try {
        // TODO: Parameterize Port
        const res = await fetch(
            `http://${process.env.API_HOST}:8080/api/${endpoint}`
        );
        return res.json();
    } catch (error) {
        throw new Error('Error fetching data: ' + JSON.stringify(error));
    }
}

export { getData };
