<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Template</title>
  </head>
  <body>
    <div id="root">
    </div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    // My Code goes here;
  </script>
</html>





# Components and Props - Basics




- Components
- Props
    - Passing different data types like string, number, arrays, objects, functions as props
    - children props ( Passing JSX )

# Components :

React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components.  From web sites to phone apps, everything on the screen can be broken down into components.

React applications are built from isolated pieces of UI called *components*. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page. 

Okay; Let’s say you have to prepare a birthday card element which display “Happy Birthday” Message multiple times. 

**The Traditional Method**: Let's say you want to display the same message twice on a page. You might do this:

```jsx
const element = (
  <>
    <p>Happy Birthday!</p>
    <p>Happy Birthday!</p>
  </>
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(element);
```

**With a Constant**: To make it a tad cleaner, you could store the message in a constant:

```jsx
const message = <p>Happy Birthday!</p>
const element = (
  <>
    {message}
    {message}
  </>
);
```

### Use Functions for Flexibility

Okay, so far so good. But what if you want two different messages, huh?

Let’s say, greeting text can be a variable; name can be another variable.

**Using Functions**: Functions are your friends here. Check this out:

```jsx
function greet({ text, name }) {
  return (
    <p>
      {text}, {name}
    </p>
  );
}

const element = (
  <div className="container">
    {greet({ text: "Happy Birthday", name: "Bruce" })}
    {greet({ text: "Good Morning", name: "Rachel" })}
  </div>
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(element);
```

This is how it’ll look when you inspect it using devtools. 

![Screenshot 2023-12-21 at 3.23.50 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/fefbd27f-55ff-427e-8282-dc1d19a44990/Screenshot_2023-12-21_at_3.23.50_PM.png)

This very same thing can be written in a more cleaner syntax like the one below. Notice how `Greet` is written with Capital Letter

```jsx
function Greet({ text, name }) { // First Change
  return (
    <p>
      {text}, {name}
    </p>
  );
}

const element = (
  <div className="container">
    <Greet text="Happy Birthday" name="Bruce" /> // Second Change; Props are discussed in detail below 
    <Greet text="Good Morning" name="Rachel" />
  </div>
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(element);
```

- So now this `Greet` is a component. It’s a reusable piece of UI meaning it can be used multiple time as and when required ( Pretty similar to how a function works and that is exactly what a component is; A function which maintains a piece of UI including styling, functionality etc ). Essentially you entire react is nothing but a bunch of components.

and if you check console now ( Does look like a react component )

![Screenshot 2023-12-21 at 3.30.14 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ff94b4dd-cb13-4ede-8019-d6a8215bf3d5/6f73c6d2-ed91-4cf5-a560-b79e79dee8d1/Screenshot_2023-12-21_at_3.30.14_PM.png)

---

Some important pointer wrt components : 

1. In React, Components are basically reusable piece of code that serve the same purpose as JavaScript functions, They work in isolation and return HTML via a render function. For example, The above function `Greet` is a component. Wherever you put `<Greet text="Happy Birthday" name="Bruce" />` ; It displays that message with that name. 
2. Why components ? 
    
    They let you split the UI into independent, reusable pieces to think about each piece in isolation. They make our code cleaner and easier to understand. Plus, you can use them again and again.
    
3. **Name Matters**: Capitalize your component names. It's not just good manners; it's how React knows you're creating a component.
4. **Nesting Components** : Components can be used inside other components. In the below code, you can see the component `App` has two components `Greet` inside
    
    ```jsx
    function Greet({ text, name }) {
      return (
        <p>
          {text}, {name}
        </p>
      );
    }
    
    function App() {
      return (
        <div className="container">
          <Greet text="Happy Birthday" name="Bruce" />
          <Greet text="Good Morning" name="Rachel" />
        </div>
      );
    }
    const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
    
    reactRoot.render(<App />);
    ```
    

# Props :

**Intro :**

- **Props** stand for "properties."
- They are a way of passing data from one component (usually a parent) to another (usually a child).
- Think of props like arguments you pass to a function. They let components communicate with each other.

**How Do They Work?**

1. **Passing Data**: You can pass different types of data, such as numbers, strings, arrays, objects, or even functions, as props.
2. **Read-Only**: Props are read-only. This means the component receiving props cannot modify them. Instead, it treats them like a 'constant' or an unchangeable value.
3. **One-Way Data Flow**: Props flow down from parent to child components. This makes the data flow predictable and easier to understand.

In the above example : 

- `Greet` component receives props
- `App` component is the parent, and `Greet` is the child.
- `text="Happy Birthday"` and ``name="Bruce"`` is the prop being passed to `Greet`.
- Inside `Greet`, we access the name using `[props.name](http://props.name)` or it can be directly destructured as we have done above

These props make your components flexible and maintainable. As you dive deeper into React, you'll see how props play a critical role in component interaction and data flow.



.






# Children Props

# Children props in React Component :

"Children props in React Component" refers to a special prop in React, called `children`, which allows you to pass components as data to other components. This prop is a key concept in React's compositional model, where smaller components are composed together to build more complex UIs.

In React, any JSX elements you place between the opening and closing tags of a component are passed to it as `children` props. This allows components to define their structure with placeholders for any children elements to be defined later.

When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`. For example, the `Card` component below will receive a `children` prop set to `<Avatar />` and render it in a wrapper div:

```jsx
import "./styles.css";

function Card(props) {
  console.log(props);
  return (
    <div style={{ padding: "10px", border: `5px solid ${props.borderColor}` }}>
      {props.children}
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        src="https://i.pinimg.com/564x/f0/14/b4/f014b482978c37f0e12ea9db8f37a264.jpg"
        alt="batman"
        width={200}
      />
      <p>Batman</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Card borderColor="black">
        <Avatar />
      </Card>
    </div>
  );
}
```

Try replacing the `<Avatar>` inside `<Card>` with some text to see how the `Card` component can wrap any nested content. It doesn’t need to “know” what’s being rendered inside of it. You will see this flexible pattern in many places.

You can think of a component with a `children` prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX. You will often use the `children` prop for visual wrappers: panels, grids, etc.

## Use-case & Benefits

The children prop is useful for creating reusable and dynamic components. For instance, a `Modal` component can be designed to accept any content as children, making it versatile for various scenarios.

Consider a `List` component. Without children props, you'd need to create a specific List for every type of item. With children props, you can create one List component and pass different items as children.

## Real world Examples

In real-world programming, a `Container` component could be used to apply consistent padding and margin around its children. Whether it's a form, a paragraph, or an image, the `Container` ensures consistent spacing.

## Usage

- `children`: This is a prop that contains any elements included between the opening and closing tags of a component. It can be used to dynamically render content inside a component.

Example:

```jsx
function Container({ children }) {
  return <div className="container">{children}</div>;
}

<Container>
  <p>This is a child paragraph</p>
</Container>

```

## Task 1 :

Problem: Create a `PageLayout` component that takes a header, content, and footer as children and renders them in a structured layout.

Solution:

1. Define `PageLayout` with a `children` prop.
2. Use the `children` prop to render the passed elements.
3. Use the component by passing different elements as children.

```jsx
function PageLayout({ children }) {
  return <div className="page-layout">{children}</div>;
}

<PageLayout>
  <Header />
  <MainContent />
  <Footer />
</PageLayout>

```

## Task 2 :

Problem: Create a `Gallery` component that can display any number of `Image` components passed as children.

Step-by-Step:

1. Define `Gallery` with a `children` prop.
2. Render `children` within a grid layout.
3. Use `Gallery` by passing multiple `Image` components.

Solution:

```jsx
function Gallery({ children }) {
  return <div className="gallery-grid">{children}</div>;
}

<Gallery>
  <Image src="image1.jpg" />
  <Image src="image2.jpg" />
  // Add as many images as needed
</Gallery>

```

This approach demonstrates the power of composition in React, where `children` props allow for flexible and reusable components.










# Conditional Rendering and Conditional Styling

# Conditional Rendering :

Conditional rendering in React is a concept that allows you to display content based on certain conditions.

Let’s take a simple example : 

Imagine your `App` component has two `LightBulb` component. You pass a prop `“on”` which is a boolean value to this `LightBulb` component. The `LightBulb` will render `Bulb is on` or `Bulb is off` based on this prop

That means we are conditionally rendering `Bulb is on` or `Bulb is off` depending on prop `“on”` 

Approach 1 : 

```jsx
function LightBulb(props) {
  if (props.on) {
    return <div>Bulb is on</div>;
  } else {
    return <div>Bulb is off</div>;
  }
}

function App() {
  return (
    <>
      <LightBulb on={true} />
      <LightBulb on={false} />
    </>
  );
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

Approach 2 : 

```jsx
function LightBulb(props) {
  return <div>Bulb is {props.on ? "on" : "off"}</div>;
}

function App() {
  return (
    <>
      <LightBulb on={true} />
      <LightBulb on={false} />
    </>
  );
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

# Conditional Styling :

Based on certain condition; The styling is updated. 

```jsx
function LightBulb(props) {
  const styleObject = {
    backgroundColor: props.on ? "black" : "white",
    color: props.on ? "white" : "black",
    padding: "20px",
    border: `1px solid black`,
  };

  return <div style={styleObject}>Bulb is {props.on ? "on" : "off"}</div>;
}

function App() {
  return (
    <>
      <LightBulb on={true} />
      <LightBulb on={false} />
    </>
  );
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

---

### Another example :

```jsx
const SuperheroDetails = ({
  name,
  hobbies,
  hasSuperPowers,
  isMarried,
  address,
  age,
}) => {
  return (
    <div className="card">
      <p>Name : {name}</p>
      {hobbies.length > 0 ? (
        <p>Hobbies : {hobbies.join(", ")}</p>
      ) : (
        <p>No hobbies</p>
      )}
      {/*
              <p>Has Super Powers : {hasSuperPowers ? "Yes" : "No"}</p>
            */}
      <p>
        Has Super Powers :{" "}
        <span style={{ color: hasSuperPowers ? "green" : "red" }}>
          {hasSuperPowers ? "Yes" : "No"}
        </span>
      </p>
      <div>
        <p>Street : {address.street}</p>
        <p>City : {address.city}</p>
        <p>Country : {address.country}</p>
      </div>
      <p>Age : {age}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <SuperheroDetails
        name="Batman"
        hobbies={["Driving fancy cars", "Fighting crime"]}
        hasSuperPowers={false}
        address={{ street: "3rd Main", city: "Gotham", country: "USA" }}
        age={25}
      />
      <SuperheroDetails
        name="Superman"
        hobbies={["Flying", "Collecting coins"]}
        hasSuperPowers={true}
        address={{
          street: "4th Cross",
          city: "Central city",
          country: "USA",
        }}
        age={30}
      />
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<App />);
```

Ever wondered how to show or hide something based on a condition? Here, we'll look at how you can conditionally render elements in React.

Let's say you want to display hobbies only if the superhero has some. Look at this part:

```jsx
{hobbies.length > 0 ? (
  <p>Hobbies : {hobbies.join(", ")}</p>
) : (
  <p>No hobbies</p>
)}
```

This is called a ternary operator. It checks if `hobbies.length > 0`. If it's true, it renders the superhero's hobbies; if false, it shows "No hobbies".

### 🔵 **Conditional Styling of Elements**

Now let's add a bit of style. You might want to visually highlight if a superhero has superpowers. Check out this code snippet:

```jsx
<p>Has Super Powers: {hasSuperPowers ? "Yes" : "No"}</p>
```

Want to make it colorful? You can conditionally add inline styles like this:

```jsx
<p>
  Has Super Powers:
  <span style={{ color: hasSuperPowers ? 'green' : 'red' }}>
    {hasSuperPowers ? "Yes" : "No"}
  </span>
</p>
```

In this snippet, the text will be green if `hasSuperPowers` is true; otherwise, it will be red.










# **How React updates the DOM efficiently ( Virtual DOM )**

To appreciate the efficiency of React in updating the DOM, let's compare building a digital clock application using vanilla JavaScript and React.

Clock built with Vanilla Javascript

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clock with JS / DOM</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let rootElement = document.getElementById("root")

      function tick() {
        const time = new Date().toLocaleTimeString()
        rootElement.innerHTML = `
          <h1>Digital Clock With vanilla javascript</h1>
          <h2>${time}</h2>
        `
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

Clock with react

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        margin: 10px;
        color: teal;
      }
    </style>
    <title>Clock using React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)

      function tick() {
        const time = new Date().toLocaleTimeString()
        const element = (
          <>
            <h1>Digital Clock With React</h1>
            <h2>{time}</h2>
          </>
        )
        reactRoot.render(element)
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

**Observation** : 

1. **Vanilla JavaScript Approach**: Every second, the entire HTML content within the **`rootElement`** is replaced, even if only a small part, like the time, changes. 
2. **React Approach**: React updates only the necessary parts of the DOM. For instance, it only changes the time string without re-rendering the entire clock component.

Let’s make one another change to these above examples to understand how it impacts user experience.you’d notice that in vanilla javascript piece, any focused input will lose its focus every second, which is super annoying. React is smarter; it only updates what's necessary, keeping all your interactions intact.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clock with JS / DOM</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      let rootElement = document.getElementById("root")

      function tick() {
        const time = new Date().toLocaleTimeString()
        rootElement.innerHTML = `
          <h1>Digital Clock With vanilla javascript</h1>
          <input type="text" value="focus on this input" />
          <h2>${time}</h2>
        `
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .container {
        margin: 10px;
        color: teal;
      }
    </style>
    <title>Clock using React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
      const rootElement = document.getElementById("root")
      const reactRoot = ReactDOM.createRoot(rootElement)

      function tick() {
        const time = new Date().toLocaleTimeString()
        const element = (
          <>
            <h1>Digital Clock With React</h1>
            <input type="text" value="focus on this input" />
            <h2>{time}</h2>
          </>
        )
        reactRoot.render(element)
      }

      // Let's update the clock every 1 second!
      setInterval(tick, 1000)
    </script>
  </body>
</html>
```

1. **Vanilla JavaScript Approach**: : Every second, the entire HTML content within the **`rootElement`** is replaced, even if only a small part, like the time, changes. This can disrupt user interactions, such as losing focus on an input field.
2. **React Approach**: React updates only the necessary parts of the DOM. For instance, it only changes the time string without re-rendering the entire clock component. Hence the input focus remained intact

# **Virtual DOM :**

React's efficiency stems from its use of the Virtual DOM. Here's how it works:

**What is the Virtual DOM?** 
The Virtual DOM is a lightweight copy of the actual DOM. It's a virtual representation of the UI components.

**How Does React Use the Virtual DOM?** 
When there's a change in the UI, React first updates the Virtual DOM. Then, it compares (or "diffs") the updated Virtual DOM with a snapshot taken right before the update. This process is known as "reconciliation."

**Efficient Updates**: 
React identifies what exactly changed in the Virtual DOM. It then updates only those specific parts in the actual DOM. This selective updating avoids unnecessary re-renders, enhancing performance.

**The Benefits:**

1. **Performance**: React reduces the workload on the browser by avoiding needless DOM manipulations, resulting in faster applications.
2. **User Experience**: React's targeted updates improve accessibility and user experience, such as maintaining focus on an input field, as shown in our clock example.

**Conclusion:**

React's smart DOM update mechanism, powered by the Virtual DOM, makes it a powerful tool for developing efficient and user-friendly web applications.

---