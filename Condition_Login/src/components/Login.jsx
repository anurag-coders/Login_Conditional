function LogIn() {
    return (
        <div>
            <div>Email :
                <input type="email" placeholder="Enter Your Email" required />
            </div>

            <div>Password :
                <input type="password" placeholder="Enter Your Password" required/>
            </div>
            <div><button type="submit">LogIn</button></div>
        </div>
    );
}

export default LogIn;