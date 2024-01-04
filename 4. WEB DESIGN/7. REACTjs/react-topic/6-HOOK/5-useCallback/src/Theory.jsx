// what is useCallback Hook ?

// The React useCallback Hook returns a memoized callback function.
// React useCallback Hook memoized callback function પરત કરે છે. 

// Think of memoization as caching a value so that it does not need to be recalculated.
// મેમોઈઝેશનને મૂલ્ય કેશીંગ તરીકે વિચારો જેથી તેને પુનઃગણતરી કરવાની જરૂર ન પડે.

// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// આ અમને સંસાધન સઘન કાર્યોને અલગ કરવાની મંજૂરી આપે છે જેથી તે દરેક રેન્ડર પર આપમેળે ચાલશે નહીં.

// The useCallback Hook only runs when one of its dependencies update.
// યુઝકૉલબૅક હૂક માત્ર ત્યારે જ ચાલે છે જ્યારે તેની એક નિર્ભરતા અપડેટ થાય છે.

// This can improve performance.

// The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
// UseCallback અને useMemo હુક્સ સમાન છે. મુખ્ય તફાવત એ છે કે useMemo memoized વેલ્યુ પરત કરે છે અને useCallback memoized ફંક્શન પરત કરે છે.


// useCallback() | Syntax :-

// const memoizedCB = useCallback(callback, depend);

// • callback: The function that you want to memoize.
// • dependencies: An array of dependencies. If any of these dependencies change, the memoized callback will be recreated.



 