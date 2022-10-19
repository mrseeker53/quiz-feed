import React from 'react';

const Blog = () => {
    return (
        // use grid
        <div className='grid grid-cols-1 gap-5 mb-12 mx-12 md:mx-36'>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20 cursor-pointer'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    1. What is the purpose of React Router?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>React Router</strong> is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. It is a state container for the current location , or URL. It keeps track of the location and renders different Routes as it changes, and it also gives you tools to update the location using Links and the history API. makes our root component (normally called App) clear, maintainable and readable. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20 cursor-pointer'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    1. How does React Context API work?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>  <strong>React Context API</strong> returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. Context is designed to share data that can be considered “global” for a tree of React Components. It sits next to React to props and state. In other words, Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                </div>
            </details>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20 cursor-pointer'>
                {/* question */}
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    1. What is the useRef hook?
                </summary>
                <hr />
                {/* answer */}
                <div className='py-4 px-6 text-md text-justify'>
                    <strong>The useRef</strong> is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. There are three main key points that you should keep in mind when using the useRef Hook:
                    <ul className='list-disc ml-6 pt-4'>
                        <li>
                            A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.
                        </li>
                        <li>
                            Refs can be used for accessing DOM nodes or React elements, and for storing mutable variables (like with instance variables in class components).
                        </li>

                        <li>
                            Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.
                        </li>
                    </ul>
                </div>
            </details>
        </div>
    );
};

export default Blog;