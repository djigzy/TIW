const CLIENT_ID = '227185617727-8o7v5dsg7d7a7csral5tdsavih30jlql.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBfhpYPm3rZ11lz5zEa978z_FeEvJSS_d4';
const DISCOVERY_DOCS = ["https://analyticsdata.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/analytics.readonly";
const PROPERTY_ID = '474784597'; // Replace with your property ID

let tokenClient;

// Function to initiate authentication and request an access token
function handleAuthClick() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: (response) => {
      if (response.access_token) {
        localStorage.setItem('access_token', response.access_token);
        fetchAnalyticsData();
      } else {
        console.error("Authentication failed.");
      }
    },
  });

  // Request access token
  tokenClient.requestAccessToken();
}

// Function for sign-out
function handleSignoutClick() {
  google.accounts.oauth2.revoke(localStorage.getItem("access_token"), () => {
    console.log("User signed out.");
  });
  localStorage.removeItem("access_token");
}
