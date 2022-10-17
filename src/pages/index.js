import DefaultLayout from '../components/layouts/default-layout';
import { HeadingLink } from '../components/commons';
import ListActivity from '../components/sections/home/list-activity';
import useData from '../hooks/use-data';
import { useEffect } from 'react';

export default function HomePage() {
	const { getDataActivity,activity,createDataActivity } = useData()

	useEffect(()=>{
		getDataActivity()
	},[])

  return (
    <div className="flex flex-col space-y-20">
      <HeadingLink title='Activity' withBack={false} onClick={()=>createDataActivity()}/>
      <ListActivity data={activity}/>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
