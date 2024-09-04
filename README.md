



# Reminder Service
## Introduction
The Reminder Service is designed to send notifications to users about their bookings. These notifications include alerts for price drops, flight delays, and check-in reminders. The service efficiently manages these tasks using cron jobs for scheduling.

## Installation
To install the necessary dependencies, run the following command:

```bash

npm install express body-parser nodemon dotenv nodemailer node-cron
```
## Setup
1. Cron Jobs
Configure cron jobs to handle scheduled reminders. This ensures that notifications are sent at the right time.
2. Email Configuration
Set up email functionality using nodemailer. This service is configured to use Gmail as the host for sending emails.


```env

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```
# Routes
## Reminder Routes
POST /api/v1/tickets: Create a ticket for setting up reminders. This endpoint allows users to schedule notifications for their bookings.
## Notes
Cron Jobs: The service is set up to send reminders for flight check-ins and alerts for price drops. These tasks are managed through scheduled cron jobs.
Message Queue: For scalability and reliability, RabbitMQ can be integrated to manage message queues, although this is optional and can be added based on your project's needs.

# Other Services Links

[FlightSearchService](https://github.com/SPARSH1608/flightandSearchService)

[AirTicketBookingService](https://github.com/SPARSH1608/AirTicketBookingService)

[AuthService](https://github.com/SPARSH1608/Auth_service)

[ReminderService](https://github.com/SPARSH1608/ReminderService)
