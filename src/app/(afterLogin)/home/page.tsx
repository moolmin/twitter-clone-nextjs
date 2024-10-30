import style from './home.module.css';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PostRecommends from './_component/PostRecommends';
import TabDecider from './_component/TabDecider';

async function getPostRecommends() {
  const res = await fetch(`http://localhost:9090/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'],
    },
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({queryKey: ['posts', 'recommends'], queryFn: getPostRecommends});
  const dehydratedState = dehydrate(queryClient);

  // queryClient.getQueryData(['posts', 'recommends'])

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <Tab/>
        <PostForm />
        <TabDecider />
        {/* <PostRecommends /> */}
      </TabProvider>
      </HydrationBoundary>
    </main>
  )
}
