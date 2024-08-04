import { useEffect, useState } from "react";

function useAPIRequest({ timeout, url: route }) {
    const [isPending, setIsPending] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        setTimeout(() => {
            fetch(route)
                .then((res) => {
                    console.log("Received response: ", res)
                    return res.json();
                })
                .then((data) => {
                    console.log("Received data");
                    console.log(data);
                    setIsPending(false);
                    setData(data);
                })
                .catch((err) => {
                    console.log("Error", err);
                    setError(err.message);
                })
        }, 1000 * timeout);
    }, []);

    return {
        isPending,
        data,
        error,
    }
}

export default useAPIRequest;