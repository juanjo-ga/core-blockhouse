function isSignedIn() {
    const user = localStorage.getItem("user");
    return user ? true : false;
}
