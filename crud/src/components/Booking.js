import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Booking = () => {
    const { udata, setUdata } = useContext(adddata);
    const history = useHistory();

    const [inpval, setValue] = useState({
        name: "",
        location: "",
        shot: "",
        time: "",
    });

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const addinpdshow = async (e) => {

        e.preventDefault();

        const { name, location, shot, time } = inpval;
        if (name == "") {
            alert("name is required");
        } else if (location == "") {
            alert("location is required");
        } else if (shot == "") {
            alert("shot is required");
        } else if (time == "") {
            alert("time is required");
        }
        else {
            const res = await fetch("/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    location,
                    shot,
                    time
                })
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 422 || !data) {
                console.log("error ");
                alert("error");
            } else {
                history.push("/show")
                setUdata(data)
                console.log("data added");
            }
        }
    };

    return (
        <div className="container">
            <NavLink to="/show">Show</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1"
                            value={inpval.name}
                            onChange={handleChange}
                            name="name"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">
                            Location
                        </label>
                        <input
                            type="text"
                            value={inpval.location}
                            onChange={handleChange}
                            name="location"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">
                            Shot Type
                        </label>
                        <input
                            type="text"
                            value={inpval.shot}
                            onChange={handleChange}
                            name="shot"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">
                            Date Time
                        </label>
                        <input type="date" id="meeting-time"
                            name="meeting-time" value={inpval.time} onChange={setValue}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={addinpdshow}>Submit</button>
                </div>
            </form>
        </div>
    );
};
export default Booking;
