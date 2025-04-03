import React, { useActionState, useState, useTransition } from 'react'

export default function Acciones() {
    const [name, setName] = useState("")
    const [error, submitAction, isPending] = useActionState(

        async (previousState, formData) => {
            const error = await actualizarName(formData.get("name"))
            if (error) {
                return error

            }
            redirect("/path")
            return null
        },
        null
    )
    async function actualizarName(newname) {
        let url = "https://jsonplaceholder.typicode.com/users/1"
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: newname }),
        })
        const data = await response.json()
        console.log(data)
        return null;


    }
    return (
        <>
            <form action={submitAction}>
                <input type="text" name='name' value={name} onChange={(e) => (setName(e.target.value))} />
                <button type='submit' disabled={isPending}>GO</button>
                {error && <p>{error}</p>}
            </form>
        </>
    )
}
