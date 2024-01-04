// what is propes :-

// Data Passing: Props allow you to pass data from a parent component to a child component in React.js.
// ડેટા પાસિંગ: પ્રોપ્સ તમને પેરેન્ટ કમ્પોનન્ટમાંથી React.js માં ચાઇલ્ડ કમ્પોનન્ટમાં ડેટા પાસ કરવાની મંજૂરી આપે છે.

// Read-Only: Props are read-only, meaning that the child component receiving props cannot modify them. They act as a way to send data down the component tree.
// ફક્ત-વાંચવા માટે: પ્રોપ્સ ફક્ત વાંચવા માટે હોય છે, એટલે કે પ્રોપ્સ પ્રાપ્ત કરનાર બાળ ઘટક તેમને સંશોધિત કરી શકતા નથી. તેઓ ઘટક વૃક્ષ નીચે ડેટા મોકલવા માટે એક માર્ગ તરીકે કામ કરે છે.

// Component Customization: Props enable you to customize and configure child components based on the data passed from the parent component.
// કમ્પોનન્ટ કસ્ટમાઈઝેશન: પ્રોપ્સ તમને પેરેન્ટ કમ્પોનન્ટમાંથી પસાર થયેલા ડેટાના આધારે ચાઈલ્ડ કમ્પોનન્ટને કસ્ટમાઈઝ અને ગોઠવવા માટે સક્ષમ કરે છે.

// Reusability: Props promote reusability of components. You can reuse the same component in different parts of your application by passing different props.
// પુનઃઉપયોગીતા: પ્રોપ્સ ઘટકોની પુનઃઉપયોગીતાને પ્રોત્સાહન આપે છે. તમે વિવિધ પ્રોપ્સ પસાર કરીને તમારી એપ્લિકેશનના વિવિધ ભાગોમાં સમાન ઘટકનો ફરીથી ઉપયોગ કરી શકો છો.

// Syntax: Props are accessed in the child component using this.props.propertyName where propertyName is the name of the prop being passed.



// 1. Passing Props:
// In the parent component, when you render a child component, you can pass props like this:

// <ChildComponent propName={propValue} />


// 2. Receiving and Using Props:
// In the child component, you can access the passed prop using this.props.propName. 

// class ChildComponent extends React.Component {
//     render() {
//       return <div>{this.props.propName}</div>;
//     }
//   }
  