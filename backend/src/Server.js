import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { Server as ServerSocket} from 'socket.io'
import http from 'http'

export default class Server {
    constructor (port) {
        this.port = port
        this.app = express()
        this.serverHttp = http.createServer(this.app)
        this.io = this.setSocket()
        this.setMiddleware()
        this.addSocket()
    }

    setMiddleware () {
        this.app.use(cors())
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
    }
    setSocket () {
        return new ServerSocket(this.serverHttp, {
            cors: {
                origin: '*'
            }
        })
    }

    addSocket () {
        this.io.on('connection', (socket)=>{
            console.log('a user connected')
            socket.on('message', (data) => {
                console.log(data)
                socket.broadcast.emit('message', {
                    body: data.body,
                    user: data.user,
                })
            })
        })
    }

    start () {
        this.serverHttp.listen(this.port, () => {
            console.log(`'Server running on port ${this.port}'`)
        })
    }
}
