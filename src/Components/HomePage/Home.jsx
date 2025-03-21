import React, { useState } from "react";
import { Link } from "react-router-dom";
import { templateImagesPaths } from "../Data/Data"; //templateImagesPaths is imported from Data.js which is used to display static images of various templates on the Home page.
import { useDispatch } from "react-redux";
import { updateState } from "../../ReduxManager/dataStoreSlice";
import shortid from "shortid"; // Ensure shortid is installed and imported correctly

import './Home.css'; // Import the custom CSS file

function Home() {
  const [isMouseOver, setIsMouseOver] = useState("MouseIsNotOver"); // this state is used to display 'useTemplate' button when user hovers over the template

  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <div className="header">
        <h3>Select a Template to get started!</h3>
      </div>

      <div className="templates-container">
        {templateImagesPaths.map((currentTemplate) => {
          return (
            <div className="template-card" key={shortid.generate()}>
              <div
                className="template-wrapper"
                onMouseOver={() => setIsMouseOver(currentTemplate.name)}
                onMouseOut={() => setIsMouseOver("MouseIsNotOver")}
              >
                <div className="template-name">
                  <h3>{currentTemplate.name}</h3>
                </div>
                <img
                  className="template-image"
                  src={currentTemplate.imageSource}
                  alt="template"
                />
                {isMouseOver === currentTemplate.name && (
                  <Link to="/detailsfillingpage/personalinfo">
                    <button
                      className="use-template-btn"
                      onClick={() => {
                        dispatch(
                          updateState({
                            key: "selectedTemplate",
                            value: currentTemplate.name,
                          })
                        );
                      }}
                    >
                      Use Template
                    </button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
