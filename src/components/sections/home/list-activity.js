import { useRouter } from "next/router";
import { useEffect } from "react";
import useActivity from "../../../hooks/use-data";
import { CardActivity, ImageWithFallback } from "../../commons";

export default function ListActivity(props) {
	const { data,openDelete } = props

	return (
		<div className='flex flex-col w-full'>
			{data ? (
				<div className='grid grid-cols-4 gap-8 w-full'>
					<CardActivity data={data} />
				</div>
			) : (
				<div className='flex justify-center items-center w-full h-full'>
					<ImageWithFallback src={'/images/todo-empty-state.png'} />
				</div>
			)}
		</div>
	);
}
