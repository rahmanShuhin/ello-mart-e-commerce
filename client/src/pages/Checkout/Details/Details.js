import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CITY from "../../../assets/data/city";
import DISTRICTS from "../../../assets/data/district";
import DIVITIONS from "../../../assets/data/divisions";
import CheckoutProgress from "../../../components/Checkout/CheckoutProgress/CheckoutProgress";
import { alertMessage, alertType } from "../../../redux/alertBox";
import { addAddress } from "../../../redux/Auth";
import PriceInfo from "./../../../components/Checkout/PriceInfo/PriceInfo";

const Details = () => {
    const [active] = useState("details");

    const [division, setDivision] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [divisionId, setDivisionId] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [errMessage, setErrMessage] = useState(false);
    const [openForm, setOpenForm] = useState(false);

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("user"));

    //getting division id from DIVITIONS array
    const handleDivisionId = (e) => {
        setDivision(e.target.value);
        const divisionIndex = DIVITIONS.find(
            (division) => division.name === e.target.value
        );
        setDivisionId(divisionIndex.id);
        setErrMessage(false);
    };

    //getting city id from DISTRICTS array
    const handleDistrictId = (e) => {
        setDistrict(e.target.value);
        const DistrictIndex = DISTRICTS.find(
            (districts) => districts.name === e.target.value
        );
        setDistrictId(DistrictIndex.id);
        setErrMessage(false);
    };

    const handleOpenForm = () => setOpenForm(true);

    const cancelForm = () => {
        resetForm();
        setOpenForm(false);
        setErrMessage(false);
    };

    const resetForm = () => {
        setDivision("");
        setCity("");
        setDistrict("");
        setAddress("");
        setDivisionId("");
        setDistrictId("");
    };

    const addAddressHandler = (e) => {
        e.preventDefault();
        if (
            division !== "" &&
            district !== "" &&
            city !== "" &&
            address !== ""
        ) {
            dispatch(
                addAddress({ _id: user._id, division, city, district, address })
            ).then((res) => {
                console.log(res);
                localStorage.setItem(
                    "user",
                    JSON.stringify(res.payload.data.user)
                );
                dispatch(alertType("success"));
                dispatch(alertMessage(res.payload.data.message));
                document.getElementById("address-form").reset();
                resetForm();
                setOpenForm(false);
            });
        } else {
            setErrMessage(true);
        }
        dispatch(alertType(""));
    };

    return (
        <div className="container">
            <CheckoutProgress active={active} />
            <div className="details--section">
                <div className="details--section--wrapper">
                    <h3>Shipping Address</h3>
                    <form className="address--form" id="address-form">
                        {errMessage && (
                            <span className="err--message">
                                Error! Input field can't be empty!
                            </span>
                        )}
                        <div className="form--group--wrapper">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <br />
                                <input
                                    className="form-input"
                                    type="text"
                                    name="name"
                                    min="5"
                                    max="35"
                                    id="name"
                                    placeholder="Your name"
                                    value={division}
                                    onChange={handleDivisionId}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                    Phone Number (+880)
                                </label>
                                <br />
                                <input
                                    className="form-input"
                                    type="number"
                                    name="phone"
                                    min="5"
                                    max="35"
                                    id="phone"
                                    placeholder="number"
                                    value={division}
                                    onChange={handleDivisionId}
                                />
                            </div>
                        </div>
                        <div className="form--group--wrapper">
                            <div className="form-group">
                                <label htmlFor="division">Division</label>
                                <br />
                                <select
                                    className="form-input"
                                    name="division"
                                    id="division"
                                    value={division}
                                    onChange={handleDivisionId}
                                >
                                    <option hidden={true}>
                                        select division
                                    </option>
                                    {DIVITIONS.map((division) => (
                                        <option
                                            key={division.id}
                                            value={division.name}
                                        >
                                            {division.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="district">District</label>
                                <br />
                                <select
                                    className="form-input"
                                    name="district"
                                    id="district"
                                    value={district}
                                    onChange={(e) => handleDistrictId(e)}
                                >
                                    <option hidden={true}>
                                        select district
                                    </option>
                                    {DISTRICTS.map((district) =>
                                        district.division_id === divisionId ? (
                                            <option
                                                key={district.id}
                                                value={district.name}
                                            >
                                                {district.name}
                                            </option>
                                        ) : null
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="form--group--wrapper">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <br />
                                <select
                                    className="form-input"
                                    name="city"
                                    id="city"
                                    value={city}
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                        setErrMessage(false);
                                    }}
                                >
                                    <option hidden={true}>select city</option>
                                    {CITY.map((city) =>
                                        city.district_id === districtId ? (
                                            <option
                                                key={city.id}
                                                value={city.name}
                                            >
                                                {city.name}
                                            </option>
                                        ) : null
                                    )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <br />
                                <input
                                    className="form-input"
                                    name="address"
                                    id="address"
                                    placeholder="House# 123, Street# 123, ABC Road"
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                        setErrMessage(false);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <button
                                onClick={cancelForm}
                                className="submit-btn cancel-btn"
                            >
                                Back to cart
                            </button>
                            <button
                                onClick={addAddressHandler}
                                type="submit"
                                className="submit-btn"
                            >
                                Proceed to payment
                            </button>
                        </div>
                    </form>
                </div>

                <div className="price-info--wrapper">
                    <PriceInfo />
                </div>
            </div>
        </div>
    );
};

export default Details;
