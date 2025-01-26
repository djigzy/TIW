const DISCOVERY_DOCS = ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];;
const SCOPES = 'https://www.googleapis.com/auth/analytics.readonly';
const CLIENT_ID = '227185617727-8o7v5dsg7d7a7csral5tdsavih30jlql.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBfhpYPm3rZ11lz5zEa978z_FeEvJSS_d4'
const PROPERTY_ID = '474784597';

let tokenClient;

function handleAuthClick() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (response) => {
            if (response.access_token) {
                console.log("Access Token Received:", response.access_token);
            } else {
                console.error("Authorization failed.");
            }
        }
    });

    // Print the redirect URI being used
    console.log("Redirect URI:", window.location.href);

    // Request access token from the user
    tokenClient.requestAccessToken();
}
