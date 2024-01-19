import Link from "next/link";
import React from "react";
import styles from './style.module.scss';

function Footer() {
  return (
    <div className="w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div>
        <div className="border dark:border-neutral-700 border-neutral-200" />
        <div className="flex xl:w-full  justify-center xl:ml-40  py-5 items-center text-neutral-600 text-sm">
        <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
               <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.ahmed}>Ahmed 👁️</p>
                    <p className={styles.boulakhras}>AHMED BOULAKHRAS</p>
                </div>
            </div>

          <p className="xl:hidden md:hidden lg:hidden">Created by AHMED BOULAKHRAS 👁️</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
