# Simple Firebase Notification Test

This project is a small demo to test sending and receiving Firebase Cloud Messaging (FCM) push notifications.

It has two parts:

- `fcm-test/` is the sender (Node.js script)
- `testFirebase-receiver/` is the receiver (simple web page)

---

### Requirements

- A Firebase project
- FCM enabled (HTTP v1 API)
- Firebase Admin SDK service account key (.json file)

---

### Sender Setup (`fcm-test`)

#### Step 1: Open terminal and go to the folder

```bash
cd fcm-test
```

#### Step 2: Install dependencies

```bash
npm install
```

#### Step 3: Add your Firebase service account key

- Download the `.json` file from Firebase
- Rename it to `serviceAccountKey.json`
- Place it inside the `fcm-test/` folder

#### Step 4: Run the script

```bash
node send.js
```

If the message is sent successfully, you will see output like:

```
Successfully sent message: projects/your-project-id/messages/abc123
```

---

### Receiver Setup (`testFirebase-receiver`)

#### Step 1: Open the folder

```bash
cd testFirebase-receiver
```

#### Step 2: Start a local web server (example using Python)

```bash
python3 -m http.server 5500
```

#### Step 3: Open this URL in your browser

```
http://localhost:5500
```

#### Step 4: Allow notifications in the browser

- The browser console will show the FCM token
- When a message arrives, it will appear in the console as a background message

---

### Testing

1. Copy the FCM token from the browser console
2. Open `send.js` and paste the token into the `to` field
3. Run the sender script:

```bash
node send.js
```

4. The browser should receive the message
