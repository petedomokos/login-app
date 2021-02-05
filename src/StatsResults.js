import React, { useState } from "react";

export default function({ body }) {

    const [ user, setUser ] = useState("");

    function ForUser({ user }) {

        const loginEvents = body;
        console.log(loginEvents);
        return <article>
            <table>
                <tbody>
                    <tr>
                        <th>DatePart</th>
                        <th>Count</th>
                    </tr>
                    {loginEvents.map(result => (<tr>
                        <td>{result.DatePart}</td>
                        <td>{result.Count}</td>
                    </tr>))}
                </tbody>
            </table>
        </article>;
    }

    return (
    <main>
        <h1>Stats results</h1>
        {user ? <ForUser user={user} /> : null}
        <pre>{JSON.stringify(body, null, 3)}</pre>
    </main>);

}
