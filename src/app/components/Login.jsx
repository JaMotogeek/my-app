"use client";
import React from "react";
import Image from "next/image";
import styles from '../index.module.css';


const SignIn = () => {
  	return (
    		<div className={styles.signIn1}>
      			<Image className={styles.backIcon} width={24} height={24} alt="" src="Back.png" />
      			<div className={styles.loginUihut}>
        				<Image className={styles.loginUihutChild} width={327} height={48} alt="" src="Rectangle 1159.svg" />
        				<b className={styles.logIn}>Log in</b>
      			</div>
      			<div className={styles.loginUihut1}>
        				<Image className={styles.line42Stroke} width={56} height={8} alt="" src="Line 42 (Stroke).svg" />
        				<b className={styles.logInTo}>Log in to Chatbox</b>
      			</div>
      			<div className={styles.welcomeBackSign}>Welcome back! Sign in using your social account or email to continue us</div>
      			<div className={styles.forgotPassword}>Forgot password?</div>
        				<div className={styles.passwordBoxUihut}>
          					<a className={styles.password} href="mailto:nazrulmum@uihut.com" target="_blank">Password</a>
          					<div className={styles.passwordBoxUihutChild} />
          					<div className={styles.div}>**********</div>
        				</div>
        				<div className={styles.emailBoxUihut}>
          					<div className={styles.yourEmail}>Your email</div>
          					<div className={styles.passwordBoxUihutChild} />
          					<div className={styles.nazrulmumuihutcom}>nazrulmum@uihut.com</div>
        				</div>
        				<Image className={styles.icon} width={86} height={4} alt="" src="............svg" />
        				<Image className={styles.signIn1Child} width={138} height={6} alt="" src="Group 476.svg" />
        				</div>);
      			};
      			
      			export default SignIn;
      			