# On-Demand Logistics Platform for Goods Transportation

## Purpose

The purpose of this project is to create a highly scalable logistics platform where users can book transportation services to move goods. The platform connects users with drivers in real-time, allowing for price estimation, vehicle tracking, and smooth coordination between both parties. It is designed to handle a global user base, process a large number of requests efficiently, and ensure smooth functionality even under high traffic conditions.

## Features

### User Features:
- **Booking Service**: Users can book a vehicle for transporting goods by specifying pickup and drop-off locations, vehicle type, and an estimated cost.
- **Real-Time Tracking**: After booking, users can track their assigned driver's location in real-time.
- **Price Estimation**: Users can get an upfront price estimate based on the distance, vehicle type, and current demand.

### Driver Features:
- **Job Assignment**: Drivers can receive, accept booking requests, and view the pickup/drop-off details.
- **Job Status Updates**: Drivers can update the status of a trip (en route, goods collected, delivered).

### Admin Features:
- **Fleet Management**: Admins can manage the fleet, monitor driver activity, and analyze booking data.
- **Data Analytics**: Admins can track the number of trips completed, average trip time, and driver performance.

### Future Feature:
- **Scheduled Bookings**: Users will be able to schedule transportation services for a future date and time.

## System Design Considerations

- **Scalability**: Designed to handle 10,000 requests per second with a user base of 50 million and 100,000 registered drivers globally.
- **Real-Time Data**: Efficiently handles real-time GPS tracking for thousands of concurrent users.
- **Pricing Model**: Takes into account variables like distance, demand, and vehicle type for price estimation and surge pricing.
- **Matching Algorithm**: Matches users with drivers based on proximity, vehicle type, and availability.

## Tech Stack

- **Frontend**: 
  - React
  - Material UI
  - Figma (for UI/UX design)
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for storing users, drivers, bookings, etc.)
  - Redis (for real-time data and caching)
- **Real-Time GPS Tracking**: GPS API (third-party services like Google Maps API or paid GPS APIs)
- **Load Balancing**: AWS Elastic Load Balancer
- **Scaling and Hosting**: 
  - AWS EC2 for server hosting
  - AWS S3 for static content
  - AWS RDS for relational data storage
- **Authentication**: JWT-based user authentication
- **Version Control**: Git
- **Continuous Integration**: GitHub Actions

## Architecture

### High-Level Architecture Diagram
![Architecture Diagram](https://drive.google.com/file/d/1ikEjfMKzstALf2der-R_BjZ--uVXKvrv/view?usp=sharing)

### Entity-Relationship (ER) Diagram
![ER Diagram](https://drive.google.com/file/d/1HQcup934CdWI8Xd5dSi0UtPJYafLJQ7T/view?usp=sharing)

## Challenges

- **Real-Time GPS Tracking**: Handling real-time GPS updates for thousands of vehicles and ensuring that these updates are available to users without overwhelming the system. **Note**: Using a third-party GPS API (like Google Maps API) might require paid access due to the large number of requests per second.
- **Scalability**: Designing the system to handle 10,000 requests per second with a large user base required efficient load balancing and the use of distributed database architecture (MongoDB sharding, Redis for caching).
- **Price Surge Handling**: Incorporating a surge pricing algorithm based on real-time demand was complex but essential to ensure fair driver compensation during peak hours.
  
## Major Design Decisions

- **Distributed Database Architecture**: MongoDB was chosen for its flexibility and scalability, with sharding implemented to handle large-scale operations.
- **Caching with Redis**: Redis was used to cache frequently accessed data (e.g., user details, real-time GPS coordinates) to reduce database load and improve performance.
- **Load Balancing**: AWS Elastic Load Balancer was used to distribute incoming requests across multiple servers to ensure reliability and performance.
- **Real-Time Data Management**: GPS data and vehicle tracking were handled using WebSockets to provide a seamless experience for users.

## How to Run the Project

### Prerequisites

- **Node.js** (v18.20.3 or later)
- **MongoDB** (locally installed or using MongoDB Atlas)
- **Redis** (optional, for real-time GPS tracking and caching)
- **AWS account** (for deployment and hosting services like EC2, RDS, S3, etc.)
- **Google Maps API** or another third-party service for real-time GPS tracking.

### Local Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/pranavkulkarni2905/Atlan-Internship-Task.git
    cd Atlan-Internship-Task
    ```

2. **Install dependencies**:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Set up environment variables**: Create a `.env` file at the root of the project and add the following variables:
    ```bash
    MONGO_URI=mongodb://localhost:27017/logistics_db
    JWT_SECRET=your_jwt_secret_key
    GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    REDIS_URL=redis://localhost:6379
    ```

4. **Run MongoDB and Redis**:
    - Start your MongoDB service (locally or using MongoDB Atlas).
    - (Optional) Start your Redis server for caching.

5. **Start the backend server**:
    ```bash
    npm run server
    ```

6. **Start the frontend**:
    ```bash
    cd client
    npm start
    ```

7. **Access the app**:
    - Open your browser and navigate to `http://localhost:3000`.

### How to Deploy on AWS

1. **Frontend**: 
    - Build the frontend:
      ```bash
      cd client
      npm run build
      ```
    - Deploy the build folder on **AWS S3** for static file hosting.

2. **Backend**:
    - Set up an EC2 instance and deploy the Node.js server on it.
    - Use **AWS RDS** for relational database needs (if necessary).
    - Ensure **AWS Elastic Load Balancer** is configured for load balancing across multiple EC2 instances.

3. **Environment Variables**: Ensure that your AWS EC2 instances have access to the required environment variables.

## Running Tests

To run the tests for this project, you can use the following command:

```bash
npm test
```

## Future Improvements

- **User Scheduling**: 
  Implement a feature that allows users to schedule future bookings. This would involve checking vehicle availability at the desired date and time, as well as considering potential delays due to traffic or weather conditions. The scheduling feature could also send notifications to the user as the scheduled time approaches.

- **Machine Learning-Based Matching Algorithm**: 
  Enhance the current driver matching algorithm by incorporating machine learning. This improvement would predict the best driver for each booking based on historical data, including factors such as driver proximity, driver rating, vehicle type, and user preferences. By utilizing historical booking patterns, this feature can significantly optimize the matching process, improving customer satisfaction and driver utilization.

- **Dynamic Price Adjustments**: 
  Develop a more sophisticated surge pricing model that adjusts rates based on real-time demand, traffic conditions, and estimated travel time. The algorithm would dynamically factor in the number of available drivers in a region, local weather, and other external conditions.

- **AI-Based Route Optimization**: 
  Introduce AI-based route optimization to help drivers select the most efficient path for each trip, reducing overall travel time and fuel consumption. This feature would use real-time traffic data and historical patterns to recommend the fastest and safest routes.

- **Mobile App**: 
  Develop a mobile version of the platform for both Android and iOS, allowing users and drivers to access the platform on the go with a seamless experience.

## Contributing

Contributions are welcome and appreciated! If you would like to improve this project, please follow the steps below:

1. **Fork the Repository**: 
   First, fork the repository to your own GitHub account by clicking the "Fork" button on the top right of this page.

2. **Clone the Forked Repository**: 
   Clone your fork locally using the following command:
   ```bash
   git clone https://github.com/your-username/on-demand-logistics-platform.git
   cd on-demand-logistics-platform


