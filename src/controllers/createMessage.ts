export type Environment = 'dev' | 'prod';

export class Messenger {
    port: number;
    environment : Environment;
    constructor (port:number, env: Environment){
        this.port = port;
        this.environment = env;

    }
    messagePrint(){
        return `Node and express server is running on port ${this.port}`;
    }
}