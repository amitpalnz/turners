import { useState } from "react";
import classes from "./FaqOurPolicy.module.css";
import SearchIcon from "../images/search.svg";

const FaqOurPolicy = () => {
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
        <h2>Our Policies FAQs</h2>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>What is Mechanical Breakdown Insurance?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          Mechanical Breakdown Insurance is an insurance policy that protects
          you from unexpected costs in the event that your car has a sudden and
          unforseen breakdown.
        </p>
        <br />
        <p>
          Cover is available for different types and categories of vehicles.
          Some vehicles may require an additional premium to be paid. Speak to
          one of our Business Managers for more information about the type of
          vehicles covered, special conditions and pricing which apply.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>Does the policy include the cost of both parts and labour?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          Yes. The cover is comprehensive and includes parts and labour, towing,
          AA roadservice & 24/7 breakdown assistance, plus accommodation and
          rental car costs for out of town breakdowns.
        </p>
        <br />
        <p>
          Speak to one of our Business Managers for more information about the
          components and services included in the cover.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>Do I need to service my car?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          Yes. It is a condition of the policy that you comply with the first
          service and ongoing service requirements which must be carried out by
          an independent service centre.
        </p>
        <br />
        <p>
          As a guide it would normally be every 10,000km or 15,000km or 12
          months. This requirement will be noted in the policy document.
        </p>
        <br />
        <p>
          If there is no service history with the vehicle, Turners recommend
          having the service done soon after purchase as best practise.
        </p>
        <br />
        <p>
          {" "}
          Full service requirements, including information on who can service
          your car, are outlined in the policy terms.
        </p>
        <br />
        <p>
          We recommend that all vehicles be serviced in order to maintain safety
          and reliability, whether they have a mechanical breakdown policy or
          not.{" "}
        </p>
      </div>
    </section>
  );
};
export default FaqOurPolicy;
