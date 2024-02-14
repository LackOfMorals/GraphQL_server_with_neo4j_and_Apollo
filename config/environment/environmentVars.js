import dotenv from 'dotenv';
import IP from 'ip';


// Set default values which will be used if vars are not present
const defaultEnvs = {
    GRAPHQL_PORT: '4000',
    GRAPHQL_IP: '0.0.0.0',
    NEO4J_USER: '<USERNAME FOR NEO4j>',
    NEO4J_PWD: '<PUT YOUR NEO$J PASSWORD HERE>',
    NEO4J_SERVER: '<ADDRESS OF YOUR NEO4J SERVER'
  };

// Read from .env file 
// dotenv.config();
const result = dotenv.config();

// if .env doens't exist or cannot be read, then result returns an error
if (result.error) {
  throw result.error;
}


// place vars into readEnv 
// it's a let as we will alter some of these
const readEnvs  = result.parsed


// Merge values read from .env with those in our
// default
let mergedEnvs = {
    ...defaultEnvs,
    ...readEnvs
}


// check port & ip are not empty
// and put value in place if they are
if (mergedEnvs.GRAPHQL_PORT === '') {
    mergedEnvs.GRAPHQL_PORT = '4000';

}

// If GRAPHQL_USE_HOST_IP is 1 then we'll use 
// the detected IP of the host.
if (mergedEnvs.GRAPHQL_USE_HOST_IP === '1') {
    //Get host ip address
    mergedEnvs.GRAPHQL_IP = IP.address();
}


// If IP is not given, assume it's 0.0.0.0
if (mergedEnvs.GRAPHQL_IP === '') {
    mergedEnvs.GRAPHQL_IP = '0.0.0.0';
}

// export to make environmental vars available for others
export default mergedEnvs ;


