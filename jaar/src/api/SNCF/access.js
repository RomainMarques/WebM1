import axios from 'axios';
import { getAccessToken } from './auth.js';

export const getTrain = async (departure,arrival,date) => {
    const accessToken = await getAccessToken();
    axios.defaults.auth = {
        username: accessToken
    };
    const res = await axios.get(`https://api.sncf.com/v1/coverage/sncf/journeys?from=${departure}&to=${arrival}&datetime=${date}`);
    return res;
};

export const lastTrain = async (departure,arrival,date) => {
    const accessToken = await getAccessToken();
    axios.defaults.auth = {
        username: accessToken
    };
    const res = await axios.get(`https://api.sncf.com/v1/coverage/sncf/journeys?to=${arrival}&datetime_represents=arrival&from=${departure}&datetime=${date + "T235959"}`);
    return res;
};

export const getAllTrainsDay = async (departure,arrival,date) => {
    const toReturn = {
        "departure": departure,
        "arrival": arrival,
        "journeys": []
    }
    /*
        Journeys are composed of :
        - departure date and time
        - arrival date and time
        - duration
    */
    const accessToken = await getAccessToken();
    axios.defaults.auth = {
        username: accessToken
    };
    return lastTrain(departure,arrival,date).then(async (res) => {
        if (res.status === 200) {
            const lastTrainTime = res.data.journeys[0].departure_date_time;
            //replace last char in lastTrainTime by 1
            const lastTrainTimeDate = lastTrainTime.substring(0,lastTrainTime.length - 1) + "1";
            let isLastTrain = false;
            let actualDate = date
            while (!isLastTrain) {
                await getTrain(departure,arrival,actualDate).then((res) => {
                    if (res.status === 200) {
                        const links = res.data.links;
                        for (let i = 0; i < links.length; i++) {
                            if (links[i].rel === "next") {
                                actualDate = linksParserForNextTime(links);
                                break;
                            }
                        }
                        toReturn.journeys.push({
                            "departure_date": res.data.journeys[0].departure_date_time,
                            "arrival_date": res.data.journeys[0].arrival_date_time,
                            "duration": res.data.journeys[0].duration
                        });
                        if (actualDate === lastTrainTimeDate) {
                            isLastTrain = true;
                        }
                    }
                    else {
                        console.log("Error: " + res.status);
                    }
                });
            }
            return toReturn;
        }
        else {
            console.log("Error: " + res.status);
        }
    });
};

export const linksParserForNextTime = (links) => {
    for (let i = 0; i < links.length; i++) {
        if (links[i].rel === "next") {
            return links[i].href.split("datetime=")[1];
        }
    }
    return null;
}