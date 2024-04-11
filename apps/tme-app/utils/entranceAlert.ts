export const entranceAlert = (id: string) => {
    const webhookUrl = process.env.DISCORD_WEB_HOOK!;
    const reviewUrl =
        process.env.NODE_ENV !== 'production'
            ? `http://localhost:3000/approve?id=${id}`
            : `${process.env.BASE_URL}/approve?id=${id}`;

    const payload = {
        embeds: [
            {
                title: 'Entrance Alert',
                description: 'Hello, someone has filled out the entrance form!',
                color: 15258703,
                fields: [
                    {
                        name: 'Review',
                        value: `[Click here to review](${reviewUrl})`,
                    },
                ],
            },
        ],
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Message sent successfully');
            } else {
                console.error('Error sending message:', response.status);
            }
        })
        .catch((error) => {
            console.error('Error sending message:', error);
        });
};
