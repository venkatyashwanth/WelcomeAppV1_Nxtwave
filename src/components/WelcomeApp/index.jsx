import React, { useState } from 'react';
import styles from "./WelcomeApp.module.scss";

function WelcomeApp() {
    const [subscribe, setSubscribe] = useState(false);


    const handleSubscription = () => {
        setSubscribe(!subscribe);
    }

    const subsText = subscribe ? (<>
        <button onClick={handleSubscription} className={styles.subscribedBtn}>Subscribed</button>
    </>) : (
        <>
            <button onClick={handleSubscription}>Subscribe</button>
        </>
    );
    return (
        <div className={styles.appBg}>
            <div className={styles.appContent}>
                <h1>Welcome</h1>
                <div className={styles.thanksText}>
                    <p>Thank you! Happy Learning</p>
                    {subsText}
                </div>
            </div>
        </div>
    )
}

export default WelcomeApp