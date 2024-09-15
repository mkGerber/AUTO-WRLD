import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-2_zkhQS9ZCK',
    ClientId: '3n12uja9o1kv41ihptoshbs8de',
};

export default new CognitoUserPool(poolData);