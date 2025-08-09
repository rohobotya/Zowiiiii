
// Main logic with auto-setup

const adminPhone = "0968623529";
const adminPassword = "admin123"; // Change this later!

const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const messageDiv = document.getElementById("message");

async function autoSetup() {
  try {
    const adminRef = db.ref('users/' + adminPhone);
    const snapshot = await adminRef.once('value');

    if (!snapshot.exists()) {
      await adminRef.set({
        phone: adminPhone,
        password: adminPassword,
        approved: true,
        role: "admin",
        createdAt: Date.now()
      });
      messageDiv.textContent = "Default admin user created.";
      console.log("Default admin user created.");
    } else {
      console.log("Default admin user exists.");
    }
  } catch (err) {
    console.error("Auto-setup error:", err);
  }
}

async function registerUser(phone, password) {
  if (!phone || !password) {
    messageDiv.textContent = "Please enter phone and password.";
    return;
  }

  try {
    const userRef = db.ref('users/' + phone);
    const snapshot = await userRef.once('value');
    if (snapshot.exists()) {
      messageDiv.textContent = "User already registered.";
      return;
    }

    await userRef.set({
      phone: phone,
      password: password,
      approved: false,
      role: "user",
      createdAt: Date.now()
    });
    messageDiv.textContent = "Registration successful. Await admin approval.";
  } catch (err) {
    console.error("Registration error:", err);
    messageDiv.textContent = "Error during registration.";
  }
}

async function loginUser(phone, password) {
  if (!phone || !password) {
    messageDiv.textContent = "Please enter phone and password.";
    return;
  }

  try {
    const userRef = db.ref('users/' + phone);
    const snapshot = await userRef.once('value');
    if (!snapshot.exists()) {
      messageDiv.textContent = "User not found.";
      return;
    }

    const userData = snapshot.val();
    if (userData.password !== password) {
      messageDiv.textContent = "Incorrect password.";
      return;
    }

    if (!userData.approved) {
      messageDiv.textContent = "Your account is not approved yet.";
      return;
    }

    messageDiv.textContent = "Login successful! Redirecting...";
    // Redirect or open the protected site here
    window.location.href = "https://rohobotya.github.io/www.zowipromotion.com/";
  } catch (err) {
    console.error("Login error:", err);
    messageDiv.textContent = "Error during login.";
  }
}

registerBtn.addEventListener("click", () => {
  registerUser(phoneInput.value.trim(), passwordInput.value.trim());
});

loginBtn.addEventListener("click", () => {
  loginUser(phoneInput.value.trim(), passwordInput.value.trim());
});

// Run auto-setup on load
autoSetup();
