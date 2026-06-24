// Signup page module
// Exports `signupHTML` and `renderSignup(container)` to inject the signup form
import '../style.css'
import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { setupCounter } from '../counter.js'

import Login from './Login.js'
import Home_after_Login from './Home.js'

var signupHTML = document.getElementById("signup-container");
signupHTML.querySelector('#style').innerHTML = `
<div class="signup-container">
  <div class="signup-header">
    <h2>Create account</h2>
  </div>

  <form id="signup-form" action="http://localhost:5173/Login" method="POST">
    <div class="form-group">
      <label for="fullname">Full name</label>
      <input type="text" id="fullname" name="fullname" placeholder="Your full name" required />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required />
    </div>

    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Choose a username" required />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Create a password" required />
    </div>


    <div class="form-group">
      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
    </div>

    <button type="submit" class="signup-btn">Sign Up</button>
  </form>

  <div class="form-footer">
    <p>Already have an account? <a href="http://localhost:5173/Login/" id="to-login-link">Sign in</a></p>
  </div>
</div>
`

export function Signup(container = document.querySelector('#app')) {
  if (!container) return;
  container.innerHTML = signupHTML;

  const toLogin = container.querySelector('#to-login-link');
  if (toLogin) {
    toLogin.addEventListener('click', (e) => {
      e.preventDefault();
      // Simple client-side navigation: reload main.js default content
      import('../main.jsx').then(mod => {
        if (mod && typeof mod.default === 'function') mod.default();
        // If main.js doesn't export default, you can call a named function instead
      }).catch(() => {
        window.location.reload();
      });
    });
  }
}

export default Signup;
