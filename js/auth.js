const CLIENT_ID = '227185617727-8o7v5dsg7d7a7csral5tdsavih30jlql.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBfhpYPm3rZ11lz5zEa978z_FeEvJSS_d4';
const DISCOVERY_DOCS = ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";

function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn().then(() => {
        fetchAnalyticsData();  // Fetch data after successful login
    });
}

function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    });
}

gapi.load("client:auth2", initClient);
