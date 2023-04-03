const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/AabaJaba">
        <i className="fa-brands fa-github" aria-hidden="true" title="Navnoor Singh' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/navnoor-singh-7627a1240/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Navnoor Singh' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/nav._.noor/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Navnoor Singh' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.youtube.com/@aabajaba3199">
        <i className="fa-brands fa-youtube" aria-hidden="true" title="Navnoor Singh' Youtube Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
