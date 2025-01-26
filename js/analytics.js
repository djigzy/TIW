const PROPERTY_ID = '474784597';
const API_KEY = 'AIzaSyBfhpYPm3rZ11lz5zEa978z_FeEvJSS_d4'

async function fetchAnalyticsData() {
  const response = await gapi.client.analyticsdata.properties.runReport({
  property: `properties/${PROPERTY_ID}`,
  requestBody: {
  dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
  dimensions: [{ name: "country" }, { name: "deviceCategory" }, {
 name: "pagePath" }],
  metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name:
 "averageSessionDuration" }]
  }
  });
  console.log(response.result);
 }