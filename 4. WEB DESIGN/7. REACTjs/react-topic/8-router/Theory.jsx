// What Is React Router?

// React Router is a React library that enables dynamic navigation without refreshing the entire web page.
// રિએક્ટ રાઉટર એ એક રિએક્ટ લાઇબ્રેરી છે જે સમગ્ર વેબ પેજને રિફ્રેશ કર્યા વિના ડાયનેમિક નેવિગેશનને સક્ષમ કરે છે.

// It creates fast and interactive (SPA) single-page applications by showing different content based on the URL, similar to traditional multi-page sites but without page reloads.
// તે પરંપરાગત મલ્ટિ-પેજ સાઇટ્સ જેવી જ પરંતુ પૃષ્ઠ ફરીથી લોડ કર્યા વિના, URL પર આધારિત વિવિધ સામગ્રી બતાવીને ઝડપી અને ઇન્ટરેક્ટિવ (SPA) સિંગલ-પેજ એપ્લિકેશન્સ બનાવે છે.

// Developers can build user-friendly web apps by rendering specific components when users click on links.
// જ્યારે વપરાશકર્તાઓ લિંક્સ પર ક્લિક કરે છે ત્યારે વિકાસકર્તાઓ ચોક્કસ ઘટકોને રેન્ડર કરીને વપરાશકર્તા-મૈત્રીપૂર્ણ વેબ એપ્લિકેશન્સ બનાવી શકે છે.



// Steps | React Router :-

// • Install React Router
// -> Use npm or yarn to install React Router

// • Import React Router Components
// -> Include necessary elements from react-router-dom

// • Set Up Routes
// -> Define routes & associate them with specific components

// • Navigation
// -> Use ‹NavLink/> or </Link› component for clickable route links



// Installation :-

// Using npm:
// npm install react-router-dom

// Using yarn:
// yarn add react-router-dom

// Note: install react router dom in your react project directory


// Router Components :-

// React Router provides several hooks that allow you to interact with the router and access information about the current navigation state.
// Here are some commonly used React Router hooks.


// • useNavigate()
// • useLocation()
// • useParams()
// • useOutlet
// • useRoutes


// 1. useNavigate() :-
// Provides the navigate function to programmatically navigate to a different route.
// પ્રોગ્રામેટિક રીતે અલગ રૂટ પર નેવિગેટ કરવા માટે નેવિગેટ ફંક્શન પ્રદાન કરે છે.

// 2. useLocation() :-
// Returns the current location object, representing where the app is now.

// 3. useParams() :-
// Retrieves the parameters from the current route's URL.
// વર્તમાન લોકેશન ઑબ્જેક્ટ પરત કરે છે, જે એપ અત્યારે ક્યાં છે તેનું પ્રતિનિધિત્વ કરે છે.

// 4. useOutlet() :-
// useOutlet in React Router v6 lets you dynamically render nested routes within a parent component without explicitly listing them in the render method.
// It's an alternative to <Outlet>, streamlining the parent component's structure for more dynamic nested route handling.

// React રાઉટર v6 માં useOutlet તમને રેન્ડર પદ્ધતિમાં સ્પષ્ટપણે સૂચિબદ્ધ કર્યા વિના પેરેન્ટ કમ્પોનન્ટમાં નેસ્ટેડ રૂટ્સને ગતિશીલ રીતે રેન્ડર કરવા દે છે.
// તે <Outlet> નો વિકલ્પ છે, વધુ ગતિશીલ નેસ્ટેડ રૂટ હેન્ડલિંગ માટે પેરેન્ટ કમ્પોનન્ટની રચનાને સુવ્યવસ્થિત કરે છે.


// 5. useRoutes() :-
// the useRoutes hook is a functional alternative to the traditional ‹Routes> ... ‹Route> approach for defining routes.
// It allows you to create route objects using Javascript objects, offering a more procedural and dynamic way to manage navigation within your application

// UseRoutes હૂક એ રૂટ્સ વ્યાખ્યાયિત કરવા માટે પરંપરાગત ‹Routes> ... ‹Route> અભિગમનો કાર્યાત્મક વિકલ્પ છે.
// તે તમને Javascript ઑબ્જેક્ટ્સનો ઉપયોગ કરીને રૂટ ઑબ્જેક્ટ્સ બનાવવાની મંજૂરી આપે છે, તમારી એપ્લિકેશનમાં નેવિગેશનને સંચાલિત કરવા માટે વધુ પ્રક્રિયાગત અને ગતિશીલ રીત પ્રદાન કરે છે





// --- Router Components :- ---

// The react router provides a set of components that allow you to define how your application's Ul should change based on the URL, Here some most useful components.

// • BrowserRouter
// • Router
// • Routes
// • Route
// • Link
// • NavLink
// • Outlet


// --- 1. <BrowserRouter> ---
// --- 2. <Router>        ---

// BrowserRouter & Router are both components in React Router that serve a similar purpose: to manage routing or navigation in a React ap

// Feature _____________________________ // BrowserRouter_______________________________ // Router

// API               =                      Older                                         Newer
// Performance       =                      Less performant                               More performant
// Ease of use       =                      Easier to use                                 More manual
// Use case          =                      Web applications                              Web and native applications
// history API       =                      Uses HTML5 History API                        Does not use HTML5 history API



// --- 3. <Routes> ---
// Routes is a container for multiple Route components. It allows you to define a hierarchy of routes.
// The Routes component is typically used as a child of the Router component.

// <Routes>
// {/* Home Route */}
// <Route path="/" element={<Home />}/

// {/* About Route */}
// <Route path="/about" element={<About />} />
//   ... 
// </Routes>;


// --- 4. <Route> --- 
// The Route component defines a single entry within the Routes collection.
// It specifies a path and the associated component that should be rendered when that path is matched.
// A Route can also include nested Routes to create nested navigation structures



// 5. <Link>
// Link is used to create navigation links. It prevents a full page reload by updating the URL and rendering the appropriate component.



// 6. <NavLink>
// NavLink is similar to Link but allows you to apply styles to the link based on whether the link's URL matches the current URL

// style.active class