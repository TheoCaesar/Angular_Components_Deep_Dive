Now we understand that subscriptions are set up by default within our template when rendering signal values. This subscription doesn't extend to the component. To get this in our component, we need to leverage the effect function so that any modification in the value can be accessed instantly within our component. 

The effect function takes a function as an argument and within it, if we should use any signals in that argument function, angular sets a subscription to that function.


#### Need to know
When working with signal effects, we might need to perform some cleanup work before the effect function runs again (e.g. clearing some timer or something of the sort). 
Angular's effect function allows us do that as well. 
it does provide us with an onCleanup hook which can execute as part of our existing efect function to define what should happen before the effect code runs the next time:

effect((onCleanup)=>{
    const tasks = getTasks();
    const timer = setTimeout(()=>{
        console.log(`Current number of tasks: ${tasks().length}, 1000);
        onCleanup(()=>clearTimeout(timer)) //this is how onClean up method works.
    });
});


# @empty - a fallback for looping through props in template

now we looked at modeling what props are ticket property will look like in a ticket.model.ts file and then created an array of tickets property in our component to store those new tickets of ours. 

we used the @empty decorator to wrap a paragraph displaying a simple message when we have no tickets added just yet. 

we also had our new ticket prop emit an output property carrying the details of our form in the onSubmit method, which is then received by our parent tickets component, modifies it and adds it to our list of tickets.

### $first, $even, $odd & $count keywords for the for loop
these key words return boolean values and useful if we wnat to conditionaly perform some actions like styling or more. the count attribute returns the count value of all the items in the loop and not their indexes.
