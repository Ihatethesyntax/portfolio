import Button from "../../util/Button";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>It's nice to meet you! Space Cowboy</h1>
        <p>
          Hey, I'm Andrew. I'm 17 years old and from the U.S. Nice to meet you!
          I enjoy building modern react apps that solve real world problems.
          With tools and libraries such as react, supabase, scss, redux, etc.
        </p>
      </div>
      <div>
        <Button>Contact Me</Button>
      </div>
    </div>
  );
}

export default Hero;
