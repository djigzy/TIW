const PROPERTY_ID = '474784597';

async function fetchAnalyticsData() {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error("No access token found.");
        return;
      }
  
      // Set the access token for the API client
      gapi.client.setApiKey(API_KEY);
      gapi.auth.setToken({
        access_token: accessToken,
      });
  
      // Fetch analytics data
      const response = await gapi.client.analyticsdata.properties.runReport({
        property: `properties/${PROPERTY_ID}`,
        requestBody: {
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          dimensions: [
            { name: "country" },
            { name: "deviceCategory" },
            { name: "pagePath" }
          ],
          metrics: [
            { name: "activeUsers" },
            { name: "sessions" },
            { name: "averageSessionDuration" }
          ]
        }
      });
  
      const data = response.result;
      const chartData = processAnalyticsData(data); // Process and format data for the chart
      renderChart(chartData); // Pass formatted data to renderChart
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  }
  
  function processAnalyticsData(data) {
    const labels = [];
    const values = [];
  
    data.rows.forEach(row => {
      labels.push(row.dimensionValues[0].value); // Assuming the first dimension is 'country'
      values.push(parseInt(row.metricValues[0].value, 10)); // Active Users or any metric you prefer
    });
  
    return { labels, values };
  }
  