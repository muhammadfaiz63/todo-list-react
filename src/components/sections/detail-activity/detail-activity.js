import { useRouter } from "next/router";
import { ImageWithFallback, ListActivity } from "../../commons";

export default function DetailActivity(props) {
	const router = useRouter();
	const { data } = props

	return (
		<div className='flex flex-col w-full'>
			{data && data.length > 0 ? (
				<div className='flex flex-col w-full space-y-4'>
					<ListActivity data={data} />
				</div>
			) : (
				<div className='flex justify-center items-center w-full h-full'>
					<ImageWithFallback src={'/images/activity-empty-state.png'} />
				</div>
			)}
		</div>
	)
}