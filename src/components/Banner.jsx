import "./styling.css"

const Banner = () =>{
    return(
        <div>
            <header className = "bannerHeader">Orbit Report</header>
            <p>Click on the buttons to see the satellites in that orbit type</p>
        </div>
    )
}

export default Banner;

//Requirement
//There are 1000's of satellite orbiting around the earth
//filter the satellites based on the orbit path/orbit type i.e low,medium and high
//for this assignment we will use following components-banner,buttons,satdata and table
//1.A banner that introduces the project and provides instructions on how to use the application.
//2.A table that renders satellite information based on the orbit path.
//3.Multiple buttons that show satellites in an orbit path. When a user clicks a button the table will render the satellites with that designated orbit path.
//4.satdata contains the satelite data in the form of array
