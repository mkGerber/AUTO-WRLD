import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from './userpool';

export const Authenticate=(username, password)=>{
    return new Promise((resolve, reject)=>{
        const user = new CognitoUser({
            Username: username,
            Pool: userPool
        });

        const authDetails = new AuthenticationDetails({
            Username: username,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSuccess:', data);
                resolve(data);
            },
            onFailure: err => {
                console.error('onFailure:', err);
                reject(err);
            },
            newPasswordRequired: data => {
                console.log('newPasswordRequired:', data);
                resolve(data);
            }
        });
    });
};

export const Logout=()=>{
    const user = userPool.getCurrentUser();
    if(user){
        user.signOut();
    }
};