step 1 :- install react-router-dom
step 2 :-  vite --> main.jsx
            createapp --> index.jsx or index.js 
            Wrap App with <BrowserRouter>

step 3 :- Create Pages (Components)--> Home,About, Contact

step 4 :- Define Routes 
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hello" element={<h1>hello this is hello route</h1>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
        </Routes>

step 5 :- Add Navigation Links (Component)
        <Link to="/">Home</Link>  | 
        <Link to="/about">about </Link> |
        <Link to ="/contact">contact</Link> |
