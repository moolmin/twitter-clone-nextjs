import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
      </div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        {/* next에서는 a태그 대신 Link를 써야함
        Link는 페이지 새로고침을 방지하기 때문 */}
        <Link href="/i/flow/signup">계정 만들기</Link>
        <h3>이미 트위터애 가입하셨나요?</h3>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
}
