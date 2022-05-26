import { useState } from "react";
import classes from "./FaqClaim.module.css";
import SearchIcon from "../images/search.svg";

const FaqClaim = () => {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <section>
      <div className={classes.search}>
        <input
          placeholder="Search Faq"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" />
      </div>
      <div className={classes.heading}>
        <br />
        <br />
        <h2>Claims FAQs</h2>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>How do I make a car insurance claim?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          If you’ve had an accident or your car has been stolen, phone 0800 227
          787 to get assistance with your claim. Our car insurance claims are
          managed by Vero Insurance New Zealand Limited.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>It’s important to do these things before making your claim:</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          ensure everyone is safe and contact emergency services if anyone has
          been injured in an accident notify the police if your car has been
          stolen or maliciously damaged (note the police record report number
          and officer details) take all reasonable care to prevent further loss
          or liability.
        </p>
      </div>

      <div className={classes.question}>
        <br />
        <br />
        <h3>
          4 Simple Steps to Making a Claim (based on your claim being accepted)
        </h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          1. Call us with your registration and policy number to lodge your
          claim.
        </p>
        <p>
          2. You take your car to a reputable repairer and give them your claim
          number. They'll take photos of the damage and email them to us with a
          quote to repair your car.
        </p>
        <p>
          3. Your car will be assessed to ensure quality repairs and costs are
          fair and reasonable.
        </p>
        <p>
          4. We’ll manage the process and payments with the repairer, and keep
          you updated on progress.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>What if my windscreen or window is damaged? </h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          If this is the only damage to your car phone 0800 227 787 to lodge
          your claim and find a reputable glass company to repair the damage.
          Depending on the policy you have with us you may have to pay an excess
          if the windscreen needs replacing.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>Someone drove into my car, what do I do? </h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          It’s important to get as much information from them as possible e.g.
          drivers full name, drivers licence no, address, phone number, car
          registration, insurance company (if any). If you’re not at fault for
          the accident and we have other person’s details, we may waive your
          excess.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>
          What if I caused the accident and the other person wants to make a
          claim against me?
        </h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          Do not admit fault for the damage/accident and do not promise to pay
          for any costs. Tell them we’re your insurance company and they can
          call us on 0800 227 787.
        </p>
      </div>
      <br />
      <br />
    </section>
  );
};
export default FaqClaim;
