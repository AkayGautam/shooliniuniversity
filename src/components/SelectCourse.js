import React, { Component, useState, useEffect } from 'react'
import Select from "react-select";
import Link from 'next/link'


const SelectCourse = () => {


   


    const [pgdata, setPgata] = useState([])
    const [gdata, setGdata] = useState([])
    const [ddata, setDdata] = useState([])

    var result_pg = []
    var result_g = [] 
    var result_d = []

    useEffect(() => {
        fetch('https://shooliniuniversity.com/media/programAPI', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({ auth: 'shoolini@999', undergraduate: 1 }),
        })
            .then((response) => response.json())
            .then((res) => setPgata(res))

         
    }, [])
    // console.log(pgdata,"pgdata")

    useEffect(() => {
        fetch('https://shooliniuniversity.com/media/programAPI', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({ auth: 'shoolini@999', postgraduate: 2 }),
        })
            .then((response) => response.json())
            .then((res) => setGdata(res))
    }, [])

    useEffect(() => {
        fetch('https://shooliniuniversity.com/media/programAPI', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({ auth: 'shoolini@999', doctor: 3 }),
        })
            .then((response) => response.json())
            .then((res) => setDdata(res))
    }, [])


    /** "selected" here is state variable which will hold the
    * value of currently selected dropdown.
    */
    const [selected, setSelected] = React.useState("");
    const [program, setProgram] = React.useState("");
    /** Function that will set different values to state variable
    * based on which dropdown is selected
    */
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

    const changeCourseOptionHandler = (event) => {
        setProgram(event.target.value);
    };


    /** Different arrays for different dropdowns */
    const pg_data = pgdata?.success;
    const ug_data = gdata?.success;
    const phd_data = ddata?.success;

    /** Type variable to store different array for different dropdown */
    let type = null;

    let pageDetail = null;

    /** This will be used to create set of options that user will see */
    let options = null;

    let goNav = null;

    /** Setting Type variable according to dropdown */
    if (selected === "Master's Degree/ PG Diploma") {
        type = ug_data;
    } else if (selected === "Bachelor's Degree") {
        type = pg_data;
    } else if (selected === "PhD Degree") {
        type = phd_data;
    }

    /** If "Type" is null or undefined then options will be null,
    * otherwise it will create a options iterable based on our array
    */
    if (type) {
        <option >Select Course </option>
        options = type.map((course, index) =>
            <option key={index} value={course.slug}>{course.title}</option>
        );

        //  console.log(ug_data, "dadadadadad")
    }

    const handleClick = (e) => {
        if(program === '')
        {
            e.preventDefault();
        }
       
      }



    return (
        <div className="serchingWidget">
            <h3> Find your Course </h3>
            <p> Pursue a futuristic course of your choice. Select your degree and program from the list below: </p>
            <form>
                <div className="form-control">
                    <select className="border-0 w-100"
                        onChange={changeSelectOptionHandler}>
                        <option>Select Degree</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree/ PG Diploma</option>
                        <option>PhD Degree</option>
                    </select>
                </div>
                <div className="form-control mt-3">
                    <select className="border-0  w-100"
                        onChange={changeCourseOptionHandler}>
                        <option>Select Program </option>
                        {
                            options
                        }
                    </select>

                    {/* <Select onChange={changeCourseOptionHandler}
                        options={options}
                    >
                        <option value={options}>{options}</option>
                    </Select> */} 

                </div>
                <div className="form-control p-0 border-0 mt-3">

                    <Link onClick={handleClick}  className="viewDBtn btn  w-100" href={`/${program}`}> View Details </Link>
                </div>
                <div>
                </div>
            </form>
        </div>
    );
};

export default SelectCourse;
