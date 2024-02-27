import { useEffect, useState } from "react"

export const useAsync = (asyncPromise) => {
    const [loading, setLoading] = useState(true)
    const [ value, setValue ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        asyncPromise
        .then((resolveValue) => {
            setValue(resolveValue)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return { loading, value, error }
}