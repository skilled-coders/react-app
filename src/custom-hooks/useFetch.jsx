import { useEffect, useState } from "react";

function useFetch(route) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(route)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((err) => setError(err.message));
        }, 1000 * 3);
    }, []);

    return {
        data,
        error
    };
}

export default useFetch;