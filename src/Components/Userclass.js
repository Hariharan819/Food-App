import React from "react";

class Userclass extends React.Component {
 constructor(props)
{
    super(props)
    // this.state={
    //     count:0,   //creating state variable it is an object it has many state variable // it is set by setstate()
    // };
}
  render() {
    const {name,location,contact}=this.props;
    // const {count}=this.state;
    return (
      <div className="userdetails">
        <h2> Name :{name}</h2>
        <h2> Location:{location}</h2>
        <h2> Contact :{contact}</h2>

        {/* <h3>Count:{count}</h3>
        <button onClick={()=>{
            this.setState({
                count:this.state.count +1,
            })
        }}>
            click to increase
        </button> */}
      </div>
    );
  }
}
export default Userclass;
