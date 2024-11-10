import style from './home.module.css';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import {Suspense} from "react";
import Loading from "@/app/(afterLogin)/home/loading";
import TabDeciderSuspense from "@/app/(afterLogin)/home/_component/TabDeciderSuspense";

export default async function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab/>
        <PostForm/>
        <Suspense fallback={<Loading />}>
        {/* 이건 TabDeciderSuspense를 나중에 불러와서 최적화를 하기 위함 */}
        {/* 로딩이 필요한 부분은 suspense로 감싸면서 다른 컴포넌트부터 먼저 렌더링될수있게하자 */}
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  )
}
