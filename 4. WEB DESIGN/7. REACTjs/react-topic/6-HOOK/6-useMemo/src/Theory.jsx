// what is useMemo Hook?

// The React useMemo Hook returns a memoized value.
// રીએક્ટ યુઝમેમો હૂક મેમોઈઝ્ડ વેલ્યુ પરત કરે છે.

// Think of memoization as caching a value so that it does not need to be recalculated.
// મેમોઈઝેશનને મૂલ્ય કેશીંગ તરીકે વિચારો જેથી તેને પુનઃગણતરી કરવાની જરૂર ન પડે.

// The useMemo Hook only runs when one of its dependencies update.
// યુઝમેમો હૂક ફક્ત ત્યારે જ ચાલે છે જ્યારે તેની એક નિર્ભરતા અપડેટ થાય છે.

// This can be useful to optimize the performance of expensive calculations or computations infunctional components.
// આ ખર્ચાળ કામગીરીને ઑપ્ટિમાઇઝ કરવા માટે ઉપયોગી થઈ શકે છે કાર્યાત્મક ઘટકોમાં ગણતરીઓ અથવા ગણતરીઓ.

// This can improve performance.

// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function
// UseMemo અને useCallback Hooks સમાન છે. મુખ્ય તફાવત એ છે કે યુઝમેમો મેમોઈઝ્ડ વેલ્યુ પરત કરે છે અને યુઝકૉલબેક મેમોઈઝ્ડ ફંક્શન પરત કરે છે


// useMemo() | Syntax :-

// const memoizedValue = useMemo(() => {
//     // Computation or calculation goes here
//     return result;
// }, [dependency1, dependency2, ...]);


// • () => :- This is an inline function that contains the computation or calculation you want to memoize.
// આ એક ઇનલાઇન ફંક્શન છે જેમાં તમે યાદ કરવા માંગો છો તે ગણતરી અથવા ગણતરી સમાવે છે.

// • dependencyl, dependency2,  :- An array of dependencies. If any of these dependencies change, the memoized value will be recalculated.
// નિર્ભરતાની શ્રેણી. જો આમાંની કોઈપણ નિર્ભરતા બદલાય છે, તો મેમોઈઝ્ડ મૂલ્યની પુનઃ ગણતરી કરવામાં આવશે. 







