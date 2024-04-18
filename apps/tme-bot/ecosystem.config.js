module.exports = {
    apps: [
        {
            name: 'tme-bot',
            script: 'ts-node',
            args: '--transpile-only src/index.ts',
        },
    ],
};
