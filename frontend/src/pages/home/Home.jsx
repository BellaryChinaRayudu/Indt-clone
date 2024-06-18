import "./home.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import {
  flexibleTreatment,
  right_content1,
  homeCarouselData,
} from "../../utils/homepageUtils";
import { FaPhoneAlt } from "../../assets/icons/index";
import {
  Button,
  Card,
  RoundIcon,
  RightContent,
  HomeCarousel,
  DoctorCard,
} from "../../components/index";
import Newscard from "../../components/newscard/Newscard";
import { SwiperSlide } from "swiper/react";
import configuredUrl from "../../utils/request/request";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import BlogsCard from "../../components/blogscards/BlogsCard";

const Home = () => {
  const [therapist, setTherapist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState(null);
  const getAllTherapist = async () => {
    try {
      const { data } = await configuredUrl.get("/therapist/get-therapist");
      if (data.success) {
        setLoading(false);
        setTherapist(data.allTherapist);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  const getAllNews = async () => {
    try {
      const { data } = await configuredUrl.get("/news/getNews");
      console.log(news);
      if (data.success) {
        setLoading(false);
        setNews(data.news);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  useEffect(() => {
    document.title = "Home Page";
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content =
      "Welcome to IndiaTherapist, your trusted online platform connecting individuals with professional therapists across India. Our mission is to provide accessible, confidential, and effective mental health support tailored to your needs.";
    descriptionMeta.name = "keywords";
    descriptionMeta.content =
      "Online therapy India, therapist directory, mental health support, counseling services, Indian therapists, emotional well-being, therapy sessions, confidential counseling, therapy specialties, mental health resources, virtual therapy sessions, remote counseling, trusted therapists, personal growth, LGBTQ+ affirming therapists";
    document.head.appendChild(descriptionMeta);
    getAllTherapist();
    getAllNews();
    setLoading(true);
    return () => {
      document.head.removeChild(descriptionMeta);
    };
  }, []);
  console.log(news);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="home_container">
          {/* section1 slider */}
          <section className="section1_container">
            <HomeCarousel>
              {homeCarouselData.map((item, ind) => (
                <SwiperSlide key={ind}>
                  <section className="swiper_content_section">
                    <img src={item.img} alt="" />
                    <section className="swiper_content">
                      <h1 className="main_heading">{item.title}</h1>
                      <p>{item.desc}</p>
                      <Link
                        className="link"
                        title={"Read more"}
                        to="/top-indian-therapists-best-online-therapy"
                      >
                        <Button title={"Read more"} bg={"--icon-bg"} />
                      </Link>
                    </section>
                  </section>
                </SwiperSlide>
              ))}
            </HomeCarousel>
          </section>
          {/* section3  */}
          <section className="section3_container">
            <h1 className="main_heading">
              Best Indian Online Therapy <br /> with Top Indian Therapists
            </h1>
            <section className={"section3_content"}>
              <HomeCarousel
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
              >
                {flexibleTreatment.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <Card
                      data={{ ...item, height: 250, width: 250, section: 2 }}
                    />
                  </SwiperSlide>
                ))}
              </HomeCarousel>
            </section>
          </section>
          {/*section 5 starts */}
          {/* section 5 ends here */}
          {/* section 9 */}
          <section className="section9_container">
            <section className="left">
              <section className="left_content">
                <section className="left_heading">
                  <h1 className="main_heading">Indian Marriage Counseling</h1>
                </section>
                <section className="left_desc">
                  <p>
                    "India Therapist provides expert breakup and divorce therapy
                    services, guiding individuals through emotional challenges
                    post-separation. Our therapists offer support, coping
                    strategies, and tools to rebuild self-esteem, aiding in the
                    healing process. Get personalized breakup counseling today
                    for a resilient recovery."
                  </p>
                </section>
              </section>
            </section>
            <section className="img_container">
              <img src="/sec9.jpg" alt="lady" />
            </section>
          </section>
          {/* section10  */}
          <section className="section10_container">
            <section className="left">
              <section className="left_top_image">
                <img
                  src="https://media.istockphoto.com/id/1649071889/photo/vulnerable-woman-shares-something-with-therapist-during-therapy-session.webp?b=1&s=170667a&w=0&k=20&c=PQACie40c4Te7q4zIT45YxV9vNO-yAi8Z5jNCWZBn08="
                  alt="image"
                />
              </section>
              <section className="left_bottom_image">
                <img src="https://media.istockphoto.com/id/1488894519/photo/university-student-motions-towards-her-chest-as-she-describes-the-discomfort-she-has-been.webp?b=1&s=170667a&w=0&k=20&c=bjaAtr39WLFSNtT9pFT2-lJLsl0HFUPfjIHITW5RlF0=" />
              </section>
            </section>
            <section className="right">
              <RightContent {...right_content1} />
            </section>
          </section>
          {/* section 11 starts  */}
          {/* section 11 ends here  */}
          {/* section 12 */}
          <section className="section12_container">
            <section className="section12_heading">
              <h1 className="main_heading">Our Therapist</h1>
              <p>
                Our team of expert therapists provides unparalleled mental
                health care, delivering{" "}
              </p>
              <p>
                compassionate and effective treatment tailored to each NRI's
                needs.
              </p>
            </section>
            <section className={"section12_content"}>
              <HomeCarousel
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
              >
                {therapist?.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <DoctorCard item={item} key={ind} />
                  </SwiperSlide>
                ))}
              </HomeCarousel>
            </section>
          </section>
          {/* section 13 */}
          <section className="section12_container">
            <section className="section12_heading">
              <h1 className="main_heading">Blogs</h1>
            </section>
            <section className="section12_content">
              <HomeCarousel
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },

                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
              >
                {news?.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <BlogsCard item={item} />
                  </SwiperSlide>
                ))}
              </HomeCarousel>
            </section>
          </section>
          <section className="section13_container">
            <section className="left">
              <img src="https://media.istockphoto.com/id/1134890323/photo/woman-using-smartphone-the-concept-of-using-the-phone-is-essential-in-everyday-life.webp?b=1&s=170667a&w=0&k=20&c=Y-seAx-M62ly0f29GuKXvFYrRCVvPnl8MFwYSK5s1DU=" />
            </section>
            <section className="right">
              <h3>
                “If You are in Trouble Need our Help, Contact Us Immediately, We
                are Support 24/7”
              </h3>
              <section className="right_bottom_container">
                <Link to="/contact-us">
                  <Button title={"Contact us"} bg={"--button-bg"} />
                </Link>
                <section className="contact_details">
                  <RoundIcon icn={<FaPhoneAlt />} bg={" --icon-bg"} />
                  <section className="contact_content">
                    <p className="dial">Dial Now</p>
                    <a href="tel: +91 9384838353">9384838353</a>
                  </section>
                </section>
              </section>
            </section>
          </section>
          {/* Section 14 */}
          <div className="section14_container"></div>
          {/* Section 15 */}
          <section className="section15_container">
            <div className="heading15">
              <div className="main_title">
                <div className="title">WORK PROCESS</div>
                <div className="subtitle_large">Our Approach</div>
                <p>
                  At Our Therapy Clinic, we prioritize personalized care and
                  effective solutions, guiding individuals towards holistic
                  well-being with compassion and expertise.
                </p>
              </div>
            </div>
            <div className="diagram15">
              <div className="single_diagram">
                <div className="work-thumb ">
                  <div className="work-number">01</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar2-week"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>

                <div className="work-title">Make Schedule</div>
                <div className="work-desc">
                  Easily schedule your therapy sessions online, at your
                  convenience.
                </div>
              </div>
              <div className="single_diagram">
                <div className="work-thumb ">
                  <div className="work-number">02</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                  </svg>
                </div>

                <div className="work-title">Start Discussion</div>
                <div className="work-desc">
                  Engage in meaningful conversations with our experienced
                  therapists.
                </div>
              </div>
              <div className="single_diagram">
                <div className="work-thumb ">
                  <div className="work-number">03</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-newspaper"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                  </svg>
                </div>

                <div className="work-title">Enjoy Plan</div>
                <div className="work-desc">
                  Explore personalized therapy plans tailored to your needs.
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Home;
