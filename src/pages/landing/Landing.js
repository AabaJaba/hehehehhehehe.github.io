import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/me.png";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import FloatingImages from "../../components/FloatingImages";
const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      <Draw />      
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="Iam">I am a </span>')
                .typeString('<span class="video-editor">Video Editor</span>')
                .pauseFor(1500)
                .deleteChars(12)
                .typeString('<span class="designer">Designer</span>')
                .pauseFor(1500)
                .deleteChars(8)
                .typeString('<span class="developer">Developer</span>')
                .pauseFor(1500)
                .deleteAll()
                .typeString('<span class="video-editor1">EDIT. </span>')
                .typeString('<span class="designer1">DESIGN.</span>')
                .typeString('<span class="developer1"> DEVELOP.</span>')
                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Navnoor Singh"
        />
      </div>
      <SocialIcons />
      
    </section>
  );
};

export default Landing;
