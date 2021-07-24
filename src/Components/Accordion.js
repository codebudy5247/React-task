import React, { useState } from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const Accordion = ({ c }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div onClick={() => setIsActive(!isActive)}>
          <div className="card mx-auto col-md-3 col-10 mt-5">
            {" "}
            <div className="card-body text-center mx-auto">
              <div>{/*} <Avatar alt={c.name} src={c.avatar} />*/}</div>
              <div className="name">{c.name}</div>

              <div>
                <span className="badge rounded-pill bg-primary">{c.type}</span>
              </div>
            </div>
            {isActive && (
              <>
        
                <div className="fluid">
                  <PhoneIcon /> {c.phone}
                </div>
                <div className="fluid">
                  <EmailIcon /> {c.email}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
