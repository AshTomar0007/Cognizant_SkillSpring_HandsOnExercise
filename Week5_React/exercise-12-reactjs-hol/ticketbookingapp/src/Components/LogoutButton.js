import react from 'react';

function LogoutButton(props){
    return(
        <div>
            <button onClick = {props.onClick}>Logout</button>
        </div>
    );
}
export default LogoutButton;