import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //     count:0,   //creating state variable it is an object it has many state variable // it is set by setstate()
    // };
  }
  render() {
    const { name, location, Email,Mobile} = this.props;
    // const {count}=this.state;
    return (
      <div className="userdetails h-36 border border-solid border-amber-400 p-3 m-2 flex flex-col justify-between">
        <h2> Name :{name}</h2>
        <h2> Location:{location}</h2>
        <h2> Email :{Email}</h2>
        <h2>Mobile No :{Mobile}</h2>

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
