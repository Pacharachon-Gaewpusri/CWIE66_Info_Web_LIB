import '../style.css'
import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { setupCounter } from '../counter.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Home from './Home.js'

document.querySelector('#app').innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    
</head>
<body>

    <div class="login-container">
        <div class="login-header">
            <h2>Welcome!</h2>
        </div>
        
        <form id="login-form" action="http://localhost:5173/Home" method="POST">
            <div class="form-group">
                <label for="username">Username or Email</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Enter your username" 
                    required 
                    autocomplete="username"
                >
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    required 
                    autocomplete="current-password"
                >
            </div>

            <button type="submit" class="login-btn">Sign In</button>
        </form>
            <p>Don't have an account? <a href="http://localhost:5173/Signup" id="to-signup-link">Sign up</a></p>
    </div>

</body>
`
setupCounter(document.querySelector('#counter'))
export function Login(container = document.querySelector('#app')) {
  if (!container) return;
  container.innerHTML = loginHTML;

  const toSignup = container.querySelector('#to-signup-link');
  if (toSignup) {
    toSignup.addEventListener('click', (e) => {
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


export default Login;