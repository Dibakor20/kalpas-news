import React, { useCallback, useContext, useState} from "react";
import "./Users.css";
import Sidebar from "../sidebar/Sidebar";
import CardPreviewOne from "../card/CardPreviewOne";
import { UserContext } from "../../contextApi/AppContext";
import CardPreviewTwo from "../card/CardPreviewTwo";

const Users = ({ userData, setUserData }) => {
  const { toggleState, setToggleState } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(6);

  const handleClickNext = () => {
    setCurrentPage((previousUser) => previousUser + 6);
  };
  const handleClickPrevious = () => {
    setCurrentPage((previousUser) => previousUser - 6);
  };

  const handleDelete = useCallback(
    (id) => {
          const filterUserData = userData.filter((data) => data.id !== id);
          setUserData(filterUserData)
    },
    [userData]
  );

  return (
    <>
      <div className="row user_background pb-5">
        <div className="col-lg-2 mr-md-4 col-md-2">
          <Sidebar />
        </div>
        {toggleState === "horizental" ? (
          <div className="col-lg-9 col-md-9 px-5 ">
            <div className="row ml-5 my-4">
              {userData.slice(0, currentPage).map((user) => (
                <div className="col-lg-4 col-md-6  px-3 my-3">
                  <CardPreviewOne
                    user={user}
                    toggleState={toggleState}
                    key={user.id}
                    handleDelete ={handleDelete }
                  />
                </div>
              ))}
            </div>
          </div>
        ) : toggleState === "vertical" ? (
          <div className="col-lg-9 col-md-9 px-5 ">
            <div className="row ml-5 my-4">
              {userData.slice(0, currentPage).map((user) => (
                <div className="col-lg-12 my-3 ">
                  <CardPreviewTwo
                    user={user}
                    toggleState={toggleState}
                    key={user.id}
                    handleDelete ={handleDelete }
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="d-block mx-auto">
          {currentPage === 6 ? (
            <button type="button" className="btn btn-success disabled mr-4">
              Previous
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success mr-4"
              onClick={handleClickPrevious}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            className="btn btn-success px-4"
            onClick={handleClickNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Users;
