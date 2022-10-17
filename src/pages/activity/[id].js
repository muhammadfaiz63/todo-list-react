import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { HeadingLink } from '../../components/commons';
import DefaultLayout from '../../components/layouts/default-layout';
import DetailActivity from '../../components/sections/detail-activity/detail-activity';
import useData from '../../hooks/use-data';

export default function Activity() {
	const { getDetailActivity,detailActivity } = useData()
    const router = useRouter()
    const { id } = router.query

	useEffect(()=>{
		getDetailActivity(id)
	},[])

    console.log("detailActivity",detailActivity)

	return (
		<div className='flex flex-col space-y-20'>
			<HeadingLink title={detailActivity?.title} withEdit />
			<DetailActivity data={detailActivity?.todo_items}/>
		</div>
	);
}

Activity.getLayout = function getLayout(page) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
