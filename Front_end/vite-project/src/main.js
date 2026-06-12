import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

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
        
        <form id="login-form" action="http://localhost:3000/login" method="POST">
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

        <div class="form-footer">
            <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
    </div>

</body>
`

setupCounter(document.querySelector('#counter'))
