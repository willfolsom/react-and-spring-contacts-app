# React and Spring Contact App
A fullstack contacts creation app using React (with Typescript) and Spring, from the LinkedIn course "Building Full-Stack Apps with React and Spring". Uses Materialize UI for styling.

![](client.png)
![](spring.png)

I added to the original course stuff by adding Typescript and updating the refs functionality that was deprecated. Here's a hint on what that looks like in `AddContacts.tsx`:

```
    firstNameRef: RefObject<any>;
    lastNameRef: RefObject<any>;
    emailRef: RefObject<any>;

    constructor(props: any) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
    }
```

I did not add to the course stuff by making it any prettier. 😉

-----

### Running
You must have JDK 11 installed, and npm and such.

Client: ```cd client; npm i; npm run start;```

Server is run directly from the `main` function in `ReactAndSpringDataRestApp.java`.

Data only persists for as long as the server is running.
