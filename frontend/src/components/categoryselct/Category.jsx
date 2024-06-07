import "./category.scss";
import { useState } from "react";

export default function Category({ getFilterBased }) {
  const [form, setForm] = useState({
    category: "",
    language: "",
    experience: "zero",
  });

  const onChangeFilter = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const fetchCategory = () => {
    getFilterBased(form);
  };

  return (
    <>
      <section className="category_maincontainer">
        <section className="booking-container">
          <label htmlFor="language" className="option">
            <select id="language" name="language" onChange={onChangeFilter}>
              <option value="lang" class="bold-option">
                Language
              </option>
              <option value="hindi">Hindi</option>
              <option value="kannada">Kannada</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
            </select>
          </label>

          <label htmlFor="category" className="option">
            <select id="category" onChange={onChangeFilter}>
              <option value="category" class="bold-option">
                Category
              </option>
              <option value="couple">Couple and Marriage Counseling</option>
              <option value="stress">Stress and Anxiety</option>
              <option value="depression">Depression</option>
              <option value="breakup">Breakup Counseling</option>
              <option value="sex">Sex and Intimacy Coaching</option>
              <option value="premarital">Premarital Counseling</option>
              <option value="work">Work Stress</option>
              <option value="lgbt">LGBTQIA+</option>
              <option value="loneliness">Loneliness</option>
            </select>
          </label>
          <button type="submit" onClick={fetchCategory}>
            Search
          </button>
        </section>
        {/* booking button section */}
      </section>
    </>
  );
}
