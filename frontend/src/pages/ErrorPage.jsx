<<<<<<< HEAD
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    // console.error(error);

    return (
        <div className= "flex flex-col items-center w-full m-auto" id="error-page">
            <h1 className="font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};
=======
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
	const error = useRouteError()
	// console.error(error);

	return (
		<div
			className="flex flex-col items-center w-full m-auto"
			id="error-page"
		>
			<h1 className="font-bold">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}
>>>>>>> 2c89f1e3e365682b8aa8aae647709f8ea82baf1d
