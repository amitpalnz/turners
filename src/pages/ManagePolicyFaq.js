import { useState } from "react";
import classes from "./ManagePolicyFaq.module.css";
import SearchIcon from "../images/search.svg";
const ManagePolicyFaq = () => {
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
        <h2>Manage your policies FAQs</h2>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>How can I make a premium payment by credit card?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          You can pay online directly to Vero with your credit or debit card.
          Please use your Customer PRN and policy number as the reference.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>How much does the policy cost?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          We have a number of policy options, so the premium will depend on the
          make/model of vehicle, the age and mileage, the term of cover and
          excess option selected.
        </p>
        <p>
          Speak to one of our Business Managers at any Turners branches to
          discuss the option that suits you best.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>Can my policy be renewed after it has expired?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          You may purchase another policy after the original policy has expired,
          provided there are no inherent faults with your vehicle at that time.
          We reserve the right to request a vehicle inspection report to confirm
          the vehicle is in sound mechanical condition prior to allowing its
          renewal. Speak with one of our Business Managers at any Turners
          branches about renewing your policy.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>What is an excess?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          An excess is the amount you are required to pay in respect of each
          unrelated claim. Every policy has an excess. If I need to cancel my
          policy, can I get a refund? You may at any time cancel your policy by
          giving us notice in writing. If you request cancellation, your policy
          is not refundable unless cancelled within 15 days of the start of the
          period of insurance.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>I’ve moved house. How do I update my policy address with you?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          You can call us on 0800 227 787 and we’ll be happy to change the
          contact address we have for you.
        </p>
      </div>
      <div className={classes.question}>
        <br />
        <br />
        <h3>Is my policy refundable or transferable?</h3>
      </div>
      <div className={classes.para}>
        <br />
        <p>
          If you are not completely happy with the cover provided by your
          policy, you can cancel it within 15 days of the start of the period of
          insurance, provided you have not made a claim under your policy. After
          that the policy is not refundable. Autosure have absolute discretion
          as to whether we will allow a transfer of your policy to another
          person. Please refer to the policy wording for full policy terms and
          conditions.
        </p>
      </div>
    </section>
  );
};
export default ManagePolicyFaq;
