const DISCOVERY_DOCS = ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];;
const SCOPES = 'https://www.googleapis.com/auth/analytics.readonly';
const CLIENT_ID = '227185617727-8o7v5dsg7d7a7csral5tdsavih30jlql.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBfhpYPm3rZ11lz5zEa978z_FeEvJSS_d4';
const REDIRECT_URI = 'https://djigzy.github.io/TIW/'; // Ensure this matches your Google Cloud Console configuration

let tokenClient;

// Initialize the Google API Client
function initClient() {
    gapi.load('client', async () => {
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: DISCOVERY_DOCS,
        });
        console.log('Google API client initialized.');
    });
}

// Handle authentication
function handleAuthClick() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI, // Match exactly
        callback: (response) => {
            if (response.access_token) {
                localStorage.setItem('access_token', response.access_token);
                fetchAnalyticsData();
            } else {
                console.error('Authentication failed.');
            }
        },
    });

    // Request the access token
    tokenClient.requestAccessToken();
}

// Handle sign-out
function handleSignoutClick() {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
        google.accounts.oauth2.revoke(accessToken, () => {
            console.log('User signed out.');
        });
        localStorage.removeItem('access_token');
    }
}
// Load Google API Client on window load
window.onload = () => {
    initClient();
};

