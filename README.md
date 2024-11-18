## BikeCheck: A JavaScript Web Application for Checking Used Bikes

**BikeCheck** is a JavaScript web application that helps users verify the legitimacy of a used bike before purchase. By connecting to the **BikeIndex API**, the app allows users to search for details on a specific bike using its serial number or other identifying information. This project enables users to quickly check if a bike has been reported as stolen, ensuring a more secure buying experience.

**BikeIndex API**: [BikeIndex API Documentation](https://bikeindex.org/documentation/api_v3#!/search/GET_version_search_format_get_0)

---

## Key Features

1. **Main Page with Search and Pagination**
   - Displays 24 items per page with pagination for easy navigation.
   - By default, it loads all pages of stolen bicycles in the Netherlands.
  
2. **Search by Serial Number**
   - Users can enter a bike’s serial number to retrieve information about a particular bike.
   - If the bike has been stolen or lost, users will see a card with information about the bike (e.g. 856398, 61D3UAA39009452).

3. **Search by Manufacturer**
   - Users can search for bikes by manufacturer, especially when the serial number is unavailable (e.g. Gazelle, Sparta).
   - This provides an alternative method for searching bikes and evaluating their legitimacy.

4. **Search by Location**
   - Users can search for bicycles by a specified location (also within a 10-mile radius).
   - This feature helps users find bikes near them and allows for further verification.

5. **Search with All Parameters**
   - Users can search for bikes using a combination of serial number, manufacturer, and location.
   - This allows for more refined searches, especially when the serial number alone may not be available, helping users to narrow down their results and make better-informed decisions.
     
6. **Identifying Suspicious Items**
   - If a user finds a bike that is similar to one reported as stolen or lost, they can make an informed decision not to buy the suspicious item.
  
7. **Error Handling**
   - If no search criteria are provided, the user will see a modal window with the message:  
     _"No bikes found matching your criteria."_
   - If any server error occurs, the user will see an appropriate error message in the modal window.

---

BikeCheck ensures a safer buying experience by providing a reliable way to check the history and legitimacy of used bikes.
