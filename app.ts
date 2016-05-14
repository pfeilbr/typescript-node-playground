import Utl from './utl'
import * as request from 'request'

class Startup {
    public static main(): number {
        console.log(`Hello ${Utl.foo()}`);
        const p = new Promise((resolve, reject) => {
            request('http://www.google.com', (err, res) => {
                if (err) { reject(err) }
                resolve(res)
                
            })    
        })
        
        p.then(res => console.log(res))
        
        return 0;
    }
}

Startup.main();
