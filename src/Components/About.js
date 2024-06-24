import Userclass from "./Userclass";

const About = () => {
  return (
    <div className="userdetails1 flex flex-col items-center">
      <h2 className="text-2xl text-red-700 -mx-5 my-5 pr-7">About Us</h2>
      <h2 className="text-neutral-900 pr-7">This is an Normal Food App</h2>
      <h2 className="pr-7">Developed by</h2>
      <div>
        <Userclass
          name="Hariharn .v"
          location="Namakkal"
          Email="hariharanvenkatachalam11@gmail.com"
          Mobile="9791570191"
        />
      </div>
    </div>
  );
};
export default About;
