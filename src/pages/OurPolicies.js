
import classes from "./OurPolicies.module.css";
import ImageIP from "../images/insurancePolicy.jpg";
import QuoteLogo from "../images/Quote.png";


const OurPolicies = () => {
  
  return (
    <section>
      <br/>
      <div className={classes.position}>
        <img className={classes.image} src={ImageIP} alt="InsurancePolicy" />
      </div>

      <div className={classes.rect}>
        <h1>Save 20% on car Insurance</h1>
        <p>
          Switch your car insurance today and save 20% and be in to win a
          premium. Hurry offer ends on the 30th of May.
        </p>

        <button className={classes.offer}>Get a quote</button>
      </div>

      <div>
        <h1> Four Level of Cover</h1>
      </div>

      <div>
        <br />
        <div className={classes.allign}>
          <div>
            <h2 className={classes.coverType}> Mechanical</h2>
            <br />
          </div>

          <div>
            <p> ›Comprehensive cover for mechanical and electrical breakdown</p>
            <p> ›Parts & labour </p>
            <p> ›AA Roadservice & 24/7 breakdown assistance </p>
            <p> ›Vehicle recovery and towing </p>
            <p> ›Accommodation & rental car costs for out of town breakdowns</p>
            <p>
              {" "}
              ›Generous claim limits that are set when you purchase your policy
            </p>
          </div>

          <div>
            <br />
            <br />
            <img
              className={classes.quoteImage}
              src={QuoteLogo}
              alt="Quote"
            ></img>
          </div>
          <div>
            <button className={classes.getQuote}>Get a Quote</button>
          </div>
        </div>

        <div className={classes.allign}>
          <div>
            <h2 className={classes.coverType}> Comprehensive</h2>
            <br />
          </div>
          <div>
            <p> ›1 year new for old car replacement </p>
            <p> › Lifetime guarantee on repairs we arrange </p>
            <p>
              {" "}
              › Personal property stolen/damaged in an incident involving your
              car (up to $500)
            </p>
            <p> › Replacement of stolen keys and </p>
            <p> recoding of locks (up to $1,000) </p>
            <p> › Hire car after theft of up to 14 days</p>
          </div>
          <div>
            <br /> <br /> <br />
            <br />
            <img
              className={classes.quoteImage}
              src={QuoteLogo}
              alt="Quote"
            ></img>
          </div>
          <div>
            <button className={classes.getQuote}>Get a Quote</button>
          </div>
        </div>

        <div className={classes.allign}>
          <div>
            <h2 className={classes.coverType}> Third Party Property Damage</h2>
            <br />
          </div>
          <div>
            <p> › Transport cover </p>
            <p> › Replacement car cover </p>
            <p> › Damage by uninsured drivers </p>
            <p> › Emergency travel, accommodation and repairs </p>
            <p>
              {" "}
              › Personal property stolen / damaged in an incident involving your
              car (up to $500){" "}
            </p>
            <p> › Hire car after theft</p>
          </div>
          <div>
            <br /> <br /> <br />
            <br />
            <img
              className={classes.quoteImage}
              src={QuoteLogo}
              alt="Quote"
            ></img>
          </div>
          <div>
            <button className={classes.getQuote}>Get a Quote</button>
          </div>
        </div>

        <div className={classes.allign}>
          <div>
            <h2 className={classes.coverType}> Third party fire and theft </h2>
            <br />
          </div>
          <div>
            <p> › Transport cover </p>
            <p> › Replacement car cover </p>
            <p> › Damage by uninsured drivers </p>
            <p> › Emergency travel, accommodation and repairs </p>
            <p>
              {" "}
              › Personal property stolen / damaged in an incident involving your
              car (up to $500)
            </p>
            <p> › Hire car after theft </p>
          </div>

          <div>
            <br />
            <br />
            <br />
            <br />
            <img
              className={classes.quoteImage}
              src={QuoteLogo}
              alt="Quote"
            ></img>
          </div>
          <div>
            <button className={classes.getQuote}>Get a Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurPolicies;
