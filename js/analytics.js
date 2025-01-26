async function fetchAnalyticsData() {
    try {
        const response = await gapi.client.analyticsdata.properties.runReport({
            property: "properties/474784597", // Replace with your property ID
            requestBody: {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "country" }, { name: "deviceCategory" }, { name: "pagePath" }],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "averageSessionDuration" }]
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
