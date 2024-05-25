import "./therapist.scss";
import { Category, DoctorCard } from "../../components";
import { useState, useEffect } from "react";
import configuredUrl from "../../utils/request/request";
import Loader from "../../components/loader/Loader";
const Therapist = () => {
  const [therapist, setTherapist] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllTherapist = async () => {
    try {
      const { data } = await configuredUrl.get("/therapist/get-therapist");
      if (data.success) {
        setLoading(false);
        setTherapist(data.allTherapist);
        console.log(data);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    document.title = "Therapist Page";
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content =
      "Explore IndiaTherapist's network of professional therapists and find the right match for your mental health needs.";
    const keywordsMeta = document.createElement("meta");
    keywordsMeta.name = "keywords";
    keywordsMeta.content =
      "IndiaTherapist, therapists, mental health, counseling, therapy";
    document.head.appendChild(descriptionMeta);
    document.head.appendChild(keywordsMeta);
    setLoading(true);
    getAllTherapist();
    return () => {
      document.head.removeChild(descriptionMeta);
      document.head.removeChild(keywordsMeta);
    };
  }, []);

  const getFilterBased = async (data1) => {
    console.log(data1);
    const { category, language, experience } = data1;
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await configuredUrl.get(
        `/therapist/get-based?language=${language}&category=${category}&experience=${experience}`
      );

      if (data.success) {
        setTherapist(data.result);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="doctors_container">
          <section className="top1">
            <Category getFilterBased={getFilterBased} />
          </section>
          <section className="bottom">
            {therapist &&
              therapist?.map((item, ind) => (
                <DoctorCard item={item} key={ind} />
              ))}
          </section>
        </section>
      )}
    </>
  );
};

export default Therapist;
