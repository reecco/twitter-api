import Twitter from "twitter";
import dotenv from 'dotenv';

dotenv.config();

let config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const client = new Twitter(config)

class Twitterr {
    static async trends(id) {
        let trends = await client.get('trends/place.json', {
            id: id
        });

        return trends
    }
    
    static async profile(user) {
        let profile = await client.get(`https://api.twitter.com/2/tweets/search/recent?query=from:${user}`, {});
        return profile;
    }
}

export default Twitterr;