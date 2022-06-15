
export function isUserLecturer() {
    let UserData = JSON.parse(sessionStorage.getItem('User'));
    if(UserData.role === 'lecturer')
        return true;
    return false;
}

export function isUserLoggedIn() {
    let UserData = JSON.parse(sessionStorage.getItem('User'));
    return UserData !== null;
}

export function redirectIfNotLecturer(props){
    if(!isUserLoggedIn()){
        props.history.push('/');
        return;
    }

    if(!isUserLecturer()){
        props.history.push('/');
    }
}

export function redirectIfNotStudent(props){
    if(!isUserLoggedIn()){
        props.history.push('/');
        return;
    }

    if(isUserLecturer()){
        props.history.push('/');
    }
}
