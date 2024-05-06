import Image from "next/image";
import styles from './logo.module.css'
import Link from "next/link";
export default async function Logo() {


  return (
    <Link href="/" title="">
        <div className={styles.mainLogo}>
            
            <Image alt="" height={32} width={32} src="/heatmapsLogo.svg"></Image>
            <p><strong>Heatmaps</strong></p>
            
        </div>
    </Link>
  );
}
