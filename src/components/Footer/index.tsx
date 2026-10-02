import { BaggageClaimIcon, Heart } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.newsletter}>
            <h3>BE THE FIRST TO KNOW</h3>

            <p>Sign up for updates from mettā muse.</p>

            <form className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                aria-label="Email address"
              />

              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          {/* Contact */}
          <div className={styles.contactSection}>
            <div className={styles.contact}>
              <h3>CONTACT US</h3>

              <a href="tel:+44221133560">+44 221 133 5360</a>

              <a href="mailto:customercare@mettamuse.com">
                customercare@mettamuse.com
              </a>
            </div>

            {/* Currency */}
            <div className={styles.currency}>
              <h3>CURRENCY</h3>

              <div className={styles.currencyValue}>
                <span className={styles.flag}>🇺🇸</span>
                <span>•</span>
                <strong>USD</strong>
              </div>

              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider} />
        <div className={styles.bottomSection}>
          <div className={styles.companyColumn}>
            <h2>mettā muse</h2>

            <nav>
              <a href="/about">About Us</a>
              <a href="/stories">Stories</a>
              <a href="/artisans">Artisans</a>
              <a href="/boutiques">Boutiques</a>
              <a href="/contact">Contact Us</a>
              <a href="/eu-compliances">EU Compliances Docs</a>
            </nav>
          </div>

          <div className={styles.linksColumn}>
            <h3>QUICK LINKS</h3>

            <nav>
              <a href="/orders-shipping">Orders & Shipping</a>
              <a href="/seller">Join/Login as a Seller</a>
              <a href="/payment-pricing">Payment & Pricing</a>
              <a href="/returns-refunds">Return & Refunds</a>
              <a href="/faqs">FAQs</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </nav>
          </div>

          <div className={styles.socialColumn}>
            <div>
              <h3>FOLLOW US</h3>

              <div className={styles.socialIcons}>
                <a href="#" aria-label="Instagram">
                  <BaggageClaimIcon size={18} />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <Heart size={18} />
                </a>
              </div>
            </div>

            <div className={styles.paymentSection}>
              <h3>mettā muse ACCEPTS</h3>

              <div className={styles.paymentMethods}>
                <span className={styles.paymentBadge}>G Pay</span>
                <span className={styles.paymentBadge}>●●</span>
                <span className={styles.paymentBadge}>P</span>
                <span className={styles.paymentBadge}>AMEX</span>
                <span className={styles.paymentBadge}>Pay</span>
                <span className={styles.paymentBadge}>ℙ Pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright © 2023 mettāmuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
