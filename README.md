# **Healthcare Dashboard**

A full-stack web application using **React.js** and **Flask** that enables users to input their name, age, and upload files. This project demonstrates front-end and back-end integration with file handling and data submission functionality.

---

## **Features**
- Input fields for:
  - **Name**
  - **Age**
  - **File Upload**
- Submit button to send data to the backend.
- Stores uploaded files in the server directory.
- Displays a success message on successful data submission.

---

## **Technologies Used**

### **Frontend**
- **React.js**: For building the user interface.
- **Material-UI (MUI)**: For a responsive and modern UI.

### **Backend**
- **Flask**: Python-based lightweight web framework.
- **Flask-CORS**: Enables Cross-Origin Resource Sharing (CORS).

---

## **File Structure**

### **React (Frontend)**
flaskfullstack/ ├── src/ │ ├── components/ │ │ ├── Dashboard.jsx # The main component for the form │ ├── App.js # Root component for the React app │ ├── index.js # Entry point for React ├── package.json # React project dependencies and configurations
### **Python (Flask) (Backend)**
flaskfullstack/ ├── python/ │ ├── server.py # The Flask server for backend handling ├── upload/ # Directory where files are uploaded and stored
---

## **Setup and Installation**

### **1. Prerequisites**
- Install **Node.js** for the frontend.
- Install **Python 3.10+** for the backend.

---

### **2. Frontend Setup**
1. Navigate to the project directory and install dependencies:
   ```bash
   cd flaskfullstack
   npm install
2. Create a React app: If you haven't created a React app yet, use the following command to set up:

   ```bash
   npx create-react-app



3. Install dependencies:

   Install Material-UI (MUI) for UI components:
   ```bash

    npm install @mui/material @emotion/react @emotion/styled


4. Start the React development server:

   ```bash

    npm start

5. Navigate to the backend directory:

   ```bash

    cd python

6. Install dependencies: Install Flask and Flask-CORS using pip:

    ```bash

    pip install flask flask-cors

7. Start the Flask development server:

    ```bash

    python server.py

### **Usage Instructions**
1. Run the React app:

    Navigate to the React project directory.
    Run npm start.
    Open http://localhost:3000 in your browser.
   
2. Run the Flask server:

    Navigate to the Flask project directory.
    Run python server.py.
    Test the functionality:

3. Fill in the Name and Age fields, and upload a file.
   
    Click the Submit button.
    Verify that the file is saved in the upload/ folder on the backend.
    Check the response returned from the backend.
