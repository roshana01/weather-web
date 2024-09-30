

# Weather App

This project is a weather application built using React and Vite that allows users to retrieve real-time weather information for various cities. The focus of this project is more on logic and functionality rather than UI design.

## Features

- **City Search**: Users can input city names and retrieve current weather data.
- **Real-time Data**: Weather information is fetched from a reliable API, providing accurate updates.
- **Dynamic Weather Display**: The application dynamically displays key weather metrics, including:
  - Temperature (in Celsius)
  - Humidity
  - Wind Speed
- **Weather Icons**: Visual representations of weather conditions change based on retrieved data.
- **Day of the Week**: The current day is displayed in both English and Persian, enhancing user experience.
- **Loading States**: Emojis are used as placeholders during data loading, improving interaction with the UI.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides fast development and Hot Module Replacement (HMR).
- **React Query**: Used for managing API requests and data state, improving application performance and efficiency.
- **Zustand**: A lightweight state management solution used to manage the application's state.
- **Custom Hooks**: API requests and data fetching are handled using custom hooks for clean and reusable code.
- **Context API**: Used for global state management among components, facilitating cleaner data flow.
- **Tailwind CSS**: Utilized for responsive design, providing a modern design framework.

## Setup

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Conclusion

This weather application focuses on the core functionality of retrieving and displaying weather data while ensuring a smooth user experience. The project serves as a practical example of using React with Vite, React Query, Zustand for state management, and custom hooks to efficiently handle API requests.


