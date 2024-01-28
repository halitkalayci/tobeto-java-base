import React, {useEffect} from "react";
import axiosInstance from "../../core/utils/interceptors/axiosInterceptors";
import carService from "../../services/carService";

type Props = {};

const Homepage = (props: Props) => {
	useEffect(() => {
		carService.getAll().then(response => console.log(response));
	}, []);

	return <div>Homepage</div>;
};

export default Homepage;
