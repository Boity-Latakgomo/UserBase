
const axios = require("axios");

const getData = async (filterBy = "all") => {
	const res = await axios.get("http://sam-user-activity.eu-west-1.elasticbeanstalk.com/");
	const data = res.data;

	if(data){
		if(filterBy === "start date"){
			const key = Object.keys(data)[0];
			const value = data[Object.keys(data)[0]];
			const result = {}
			result[key] = value; 
			return result;
		}else if(filterBy === "end date"){
			const lastItemIndex = Object.keys(data).length - 1;
			const key = Object.keys(data)[lastItemIndex];
			const value = data[Object.keys(data)[lastItemIndex]];
			const result = {}
			result[key] = value; 
			return result;
		}else if(filterBy === "all"){
			return data;
		}
		else{
			let selectedDate;
			for (const item in data) {
				if(filterBy === item){
					selectedDate = filterBy;
				}
			  }
			  if(selectedDate){
				const result = {};
				result[selectedDate] = data[selectedDate];
				return result;
			  }else{
				return "Your entered filter is not in the data";
			  }
		}
	}
}

exports.getData = getData;