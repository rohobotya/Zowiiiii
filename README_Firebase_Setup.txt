
# Firebase Setup Instructions

1. Go to your Firebase Console at https://console.firebase.google.com/

2. Select your project, then go to 'Realtime Database'

3. If you haven't created a database yet, create one (start in test mode or locked mode)

4. Go to the 'Rules' tab, and replace the current rules with:

{
  "rules": {
    "users": {
      "$phone": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
  }
}

5. Publish the rules.

6. Replace the placeholders in `firebase-config.js` with your actual Firebase project config values.

7. Upload the entire contents to your GitHub Pages or hosting provider.

8. When you open `index.html`, the default admin user (phone: 0968623529) will be auto-created.

9. Users can register and wait for admin approval (which you can toggle manually in the database).

10. Approved users can log in and be redirected to the protected website.

---

Important:

- Firebase Realtime Database rules require users to be authenticated (you may want to integrate Firebase Auth for better security).
- This example uses a simple phone/password approach stored in the database (not secure for production).
- For real apps, consider using Firebase Authentication and stronger security measures.
