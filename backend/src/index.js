import Server from './Server.js'

function main () {
    const server = new Server(3001)
    server.start()
}

main()