exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body);

        // Simulate saving metadata
        const response = {
            message: "Upload successful!",
            metadata: body,
        };

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
    };
};