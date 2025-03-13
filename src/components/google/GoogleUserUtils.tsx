import {IGoogleUserInfo} from "./IGoogleUserInfo.tsx";

export const createGoogleUserInfo = (decodedToken: any): IGoogleUserInfo => {
    return {
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
    };
};