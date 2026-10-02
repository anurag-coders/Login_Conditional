function SignIn() {
    return (
        <div>
            <div>Name :
                <input type="text" placeholder="Enter Your Name" />
            </div>

            <div>Email :
                <input type="email" placeholder="Enter Your Email" />
            </div>

            <div>Password :
                <input type="password" placeholder="Enter Your Password"/>
            </div>
            <div><button type="submit">SignIn</button></div>
        </div>
    );
}

export default SignIn;