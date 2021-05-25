import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchWorkouts = () => {
	dispatchEvent(workoutsLoading());

	return fetch(baseUrl + "exercise")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((workout) => dispatch(addWorkouts(workout)))
		.catch((error) => dispatch(workoutsFailed(error.message)));
};

export const workoutsLoading = () => ({
	type: ActionTypes.WORKOUTS_LOADING
});

export const workoutsFailed = (errMess) => ({
	type: ActionTypes.WORKOUTS_FAILED,
	payload: errMess
});

export const addWorkouts = (exercise) => ({
	type: ActionTypes.ADD_WORKOUTS,
	payload: exercise
});

export const postExercise =
	(name, date, sets, reps, weight, duration, exerciseId) => (dispatch) => {
		const newExercise = {
			name: name,
			date: new Date().toISOString(),
			sets: sets,
			reps: reps,
			weight: weight,
			duration: duration,
			exerciseId: exerciseId
		};

		return fetch(baseUrl + "exercise", {
			method: "POST",
			body: JSON.stringify(newExercise),
			headers: {
				"Content-Type": "appplication/json"
			}
		})
			.then(
				(response) => {
					if (response.ok) {
						return response;
					} else {
						const error = new Error(
							`Error ${response.status}: ${repsonse.statusText}`
						);
						error.response = response;
						throw error;
					}
				},
				(error) => {
					throw error;
				}
			)
			.then((response) => response.json())
			.then((response) => dispatch(addExercise(response)))
			.catch((error) => {
				console.log("post exercise", error.message);
				alert(
					"Your exercise could not be posted\n Error: " + error.message
				);
			});
	};

export const addExercise = (exercise) => ({
	type: ActionTypes.ADD_EXERCISE,
	payload: exercise
});
