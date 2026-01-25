

fetch(`${process.env.BETTER_AUTH_URL ?? 'http://localhost:3000'}/api/registry`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((response) => response.json())
    .then((data) => console.log(data));