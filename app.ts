import Utl from './utl'
import * as request from 'request'
import {IPerson} from './person'
const jsforce = require('jsforce')

jsforce.Connection;

class Startup {

    private static ageBy(p: IPerson, numberOfYears: number): IPerson {
        return Object.assign({}, p, { age: p.age + numberOfYears })
    }


    public static main(): number {
        console.log(`Hello ${Utl.foo()}`)

        const p = new Promise((resolve, reject) => {
            request('http://www.google.com', (err, res) => {
                if (err) { reject(err) }
                resolve(res)
            })
        })

        //p.then(res => console.log(res))
        const p1: IPerson = {
            name: 'brian',
            age: 38
        }


        const p2 = this.ageBy(p1, 1)


        return 0;
    }
}

Startup.main();
