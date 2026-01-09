# Harborlights Hotel - Vue.js Frontend Node.js Backend

🏨 Harborlights Hotel - Vue.js Frontend Node.js Backend
**1. Project Overview**

This is a Single Page Application (SPA) built with Vue 3 and Vite, Node.js Backend. 
It modernizes a static Bootstrap 4 template by implementing dynamic data fetching, client-side routing, and component-based architecture while maintaining compatibility with legacy jQuery plugins (Owl Carousel, Datepicker).

<img width="1623" height="1072" alt="image" src="https://github.com/user-attachments/assets/7c52a804-4402-4ef2-a3c3-9d8c2860c8c2" />

Many thanks to the author of the template: https://themewagon.com/themes/free-bootstrap-4-html5-responsive-hotel-website-template-harbor-lights/
For backend (Node.js), please refer: https://github.com/ThanThanhThuan/react_node_hotel

**2. Technology Stack**

Component	Technology	Description

Framework	Vue.js 3	Uses the Composition API (<script setup>).

Build Tool	Vite	Fast development server and bundler.

Routing	Vue Router 4	Handles navigation (/, /rooms, /rooms/:slug).

Styling	SCSS / Bootstrap 4	Inherited from template, compiled via Vite SASS.

HTTP	Native fetch	Connects to Node.js backend.

UI Alerts	SweetAlert2	Custom popups for booking success/failure.

Legacy	jQuery	Required for original template animations/sliders.

**3. Key Implementation Features**
A. Composition API (<script setup>)

We used the modern Vue 3 syntax for cleaner code logic:

<script setup>
import { ref, onMounted } from 'vue';
// Reactive state and lifecycle hooks are imported directly
</script>

B. Legacy Script Management (The "Script Loader")

Since the template relies on jQuery and Owl Carousel (which expect a static page load), we implemented a script re-loader in App.vue.

    Watcher: Watches route.path.

    Action: When the route changes, it removes the old main.js tag and injects a new one.

    Result: This forces the sliders and animations to re-initialize on every page navigation.

C. Dynamic Data & Booking

    Room Listing: Home.vue and Rooms.vue fetch room data from the Node.js backend (/api/rooms).

    Single Room Details: RoomSingle.vue uses the URL slug (e.g., /rooms/king-room) to fetch specific details, including real-time Available Quantity calculations.

    Booking Form:

        Populates the "Room" dropdown from the DB.

        Updates "Guest" dropdown limits based on the selected room's max_adults.

        Sends booking data to POST /api/book.

        Uses SweetAlert2 for user feedback.

**4. How to Run**

1. Prerequisites
Ensure your PostgreSQL database is running and the Node.js Backend is started:
cd harborlights-server
npm run dev

3. Start Vue Frontend
cd harborlights-vue
npm install  # (If you haven't installed dependencies yet)
npm run dev
Visit http://localhost:5173 to see the application.


