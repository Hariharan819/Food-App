const heading = React.createElement("h1", {id:"heading" }, "hello world from react");
// console.log(heading)
// root.render(heading);
{
    /* <div id="parent" >
    <div id="child1">
        <h1 id="child1_h1 ">iam h1</h1>
        <h1 id="child1_h1">iam second h1</h1>
    </div>
</div> */
}
       const parent1=React.createElement("div" ,{ id:"parent"}, 
        React.createElement("div",{id :"child"},
        [
            React.createElement("h2",{id:"child-heading"},"iam a H1 from child div which is inside parent did"),
            React.createElement("h2",{id:"child-heading2"},"iam a H2 from child div which is inside parent did")
        ]// for two sibilings so we use array 
));
        // const root = ReactDOM.createRoot(document.getElementById('root'));
        // root.render(parent1);
       // createElement is an object=> html(browser undestands)


{
   /* <div id="parent" >
    <div id="child1">
        <h1 id="child1_h1 ">iam h1</h1>
        <h1 id="child1_h1">iam second h1</h1>
    </div>
     <div id="child2">
        <h1 id="child2_h1 ">iam h1</h1>
        <h1 id="child2_h1">iam second h1</h1>
    </div>
</div> */
}
const parent2=React.createElement("div" ,{ id:"parent"},[ 
    React.createElement("div",{id :"child1"},
    [
        React.createElement("h2",{id:"child1-heading1"},"iam a H1 from child1 div which is inside parent did"),
        React.createElement("h2",{id:"child1-heading2"},"iam a H2 from child1 div which is inside parent did")
    ]),

  React.createElement("div",{id :"child2"},
    [ 
     React.createElement("h2",{id:"child2-heading1"},"iam a H1 from child2 div which is inside parent did"),
     React.createElement("h2",{id:"child2-heading2"},"iam a H2 from child2 div which is inside parent did")
    ]),
]);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent2);
    // root.render([parent2,parent1]);// possible
    