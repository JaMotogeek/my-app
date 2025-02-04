import Image from "next/image";
import styles from '../index.module.css';


const SignUp = () => {
  	return (
    		<div className={styles.signUp1}>
      			<div className={styles.statusBar}>
        				<Image className={styles.excludeIcon} width={17} height={11} alt="" src="Exclude.svg" />
        				<Image className={styles.excludeIcon1} width={15} height={11} alt="" src="Exclude.svg" />
        				<div className={styles.group}>
          					<Image className={styles.vectorIcon} width={1} height={4} alt="" src="Vector.svg" />
          					<div className={styles.rectangle} />
          					<div className={styles.rectangle1} />
        				</div>
        				<div className={styles.frame}>
          					<div className={styles.div}>9:41</div>
        				</div>
      			</div>
      			<Image className={styles.backIcon} width={24} height={24} alt="" src="Back.png" />
      			<div className={styles.signUpUihut}>
        				<Image className={styles.line42Stroke} width={50} height={8} alt="" src="Line 42 (Stroke).svg" />
        				<b className={styles.signUpWith}>Sign up with Email</b>
      			</div>
      			<div className={styles.getChattingWith}>Get chatting with friends and family today by signing up for our chat app!</div>
      			<div className={styles.passwordUihut}>
        				<div className={styles.password}>Password</div>
        				<div className={styles.passwordUihutChild} />
      			</div>
      			<div className={styles.confirmPasswordUihut}>
        				<div className={styles.password}>Confirm Password</div>
        				<div className={styles.passwordUihutChild} />
      			</div>
      			<div className={styles.createAccountUihut}>
        				<Image className={styles.createAccountUihutChild} width={327} height={48} alt="" src="Rectangle 1161.svg" />
        				<b className={styles.createAnAccount}>Create an account</b>
      			</div>
      			<div className={styles.emailUihut}>
        				<div className={styles.yourEmail}>Your email</div>
        				<div className={styles.emailUihutChild} />
        				<div className={styles.invalidEmailAddress}>Invalid email address</div>
        				<div className={styles.nazrulmumuihutcom}>nazrulmum@uihut.com</div>
      			</div>
      			<div className={styles.nameUihut}>
        				<div className={styles.password}>Your name</div>
        				<div className={styles.passwordUihutChild} />
        				<div className={styles.nazrulIslam}>Nazrul Islam</div>
      			</div>
    		</div>);
};

export default SignUp;
