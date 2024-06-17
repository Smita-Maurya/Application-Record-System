# Application-Record-System
# Objective
The primary objective of this system is to record and analyze user interactions within the Chrome Extension.

# User Requirement
1.Data Input and Validation: Allow users to input and validate data with proper error handling to ensure data accuracy.

2.Search and Filter Functionality: Enable users to easily search and filter records based on specific criteria.

3.Data Editing and Updating: Allow authorized users to edit and update records, ensuring that the information stays current.

4.Notifications: Implement notifications for important events or updates related to the records.

5.Data Backup and Recovery: Implement regular data backups and a reliable recovery system to prevent data loss

6.Applicant Tracking System (ATS):
Features for tracking and managing incoming job applications.

# Technologies (Tech Stack)
Building an application record system typically involves using web technologies.

1.HTML :for structuring

2.CSS : for Styling

3.Javascript: Core programming language for extension functionality.

4.Some important APIs 
Chrome storage api (For storage , To interact with data)

5.Manifest file(Json)

# Tasks
1. User Interaction Tracking
   
The system will capture and log user interaction such as clicks, navigation and form submission within the extension.

2. Add New Application
   
I propose implementing a 'create route' in the JavaScript file to enhance user convenience in the job application process. This feature allows users to effortlessly add newly applied jobs to their record system by filling out a form.

3. Edit ,Update and Delete
   
Users will have the flexibility to edit, update, or delete existing applied jobs as needed. To facilitate this, I will implement a dedicated 'edit route' for application modification. An associated EJS file will be created, providing users with a seamless interface to modify relevant information.

4 .Search and Filter Functionality

Implement a user-friendly search and filter functionality, allowing users to easily retrieve and organize records based on specific criteria.

5. Data Storage
   
Incorporate the chrome.storage API to efficiently store, retrieve, and track changes in user data. This API offers an extension-specific mechanism for persisting user data and state. To enable the use of the storage API, we will declare the 'storage' permission in the extension manifest.



