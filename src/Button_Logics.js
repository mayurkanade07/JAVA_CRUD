import { useState } from "react";
export default function Conditional() {
    const [isLoggedin, setLoggedin] = useState(false);
    const check = (event) => {
        event.target.value === "Login" ? setLoggedin(true) : setLoggedin(false);
    }
    return (
        <div >
            <h1>ff </h1>
            <input type="text" value={isLoggedin} />
            <AuthButton isloggedIn={isLoggedin} onlogin={check} />
        </div>
    );
}

function AuthButton(props) {

    const { isloggedIn, onlogin } = props;
    const data = (isloggedIn === false ? "Login" : "LoggedOut");
    return (
        <div>
            <button value={data} onClick={onlogin}>{data}</button>
            <input type="text" value={isloggedIn} />
        </div>
    )
}