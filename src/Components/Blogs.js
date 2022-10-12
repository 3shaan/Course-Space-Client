import Accordian from './Accordian';
const items =[
    {
        id: 1,
        heading: 'What is the purpose of react router?',
        content : "Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications."

    },
    {
        id: 2,
        heading: 'What is Context Api?',
        content : "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.."

    },
    {
        id: 3,
        heading: 'What is the use of usereff in react?',
        content : "The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. "

    },
]

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-3xl text-center mt-10'>There is Blog Section</h1>
            {
                items.map(item=> <Accordian key={item.id} heading={item.heading} content={item.content} ></Accordian>)
            }
        </div>
    );
};

export default Blogs;