import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, number, date, InferType } from 'yup';
import { submitAPI } from "../data/api";
import ConfirmedBooking from "../components/ConfirmedBooking";
import { Check, Minus, Plus } from "../assets/icons";

// const BookingForm = props => {
// 	const [currentStep, availableTimes, occasions, date, time, guests, location, name, phone, email, occasion, other, requests, dispatch] = [props.state.currentStep, props.state.availableTimes, props.state.occasions, props.state.date, props.state.time, props.state.guests, props.state.location, props.state.name, props.state.phone, props.state.email, props.state.occasion, props.state.other, props.state.requests, props.dispatch]
// 	const [fullDate, setFullDate] = useState("")
// 	const [showConfirmed, setShowConfirmed] = useState(false)

// 	const checkValidation1 = () => {
// 		return date
// 			? time !== "Select a time"
// 				? guests >= 1 && guests <= 10
// 					? true
// 					: false
// 				: false
// 			: false
// 	}

// 	const checkValidation2 = () => {
// 		return name
// 			?	phone
// 				? occasion !== "Select an occasion"
// 					? occasion === "Other"
// 						? other
// 							? true
// 							: false
// 						: true
// 					: false
// 				: false
// 			: false
// 	}

// 	const getFullDate = date => {
// 		setFullDate(new Date(date))
// 	};

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		if (submitAPI(props.state)) {
// 			setShowConfirmed(true);
// 			getFullDate(`${date} 00:00:00 GMT`);
// 		}
// 	}

// 	return (
// 		<>
// 			<section id="stepper">
// 				<div className="container-sm">
// 					<section className="stepper">
// 						<Step
// 							step={1}
// 							label="Reservation Details"
// 							currentStep={currentStep}
// 							dispatch={dispatch}
// 						/>
// 						<Step
// 							step={2}
// 							label="Your Information"
// 							currentStep={currentStep}
// 							dispatch={dispatch}
// 							disabled={!checkValidation1()}
// 						/>
// 						<Step
// 							step={3}
// 							label="Confirmation"
// 							currentStep={currentStep}
// 							dispatch={dispatch}
// 							disabled={!checkValidation2()}
// 						/>
// 					</section>
// 				</div>
// 			</section>

// 			<div className="form-container">
// 				<form id="reservation" onSubmit={handleSubmit}>
// 					<FormSection id="reservation-details" container="container-sm" show={currentStep >= 1 ? true : false}>
// 						<h2>When will we see ya?</h2>
// 						<fieldset className="fullwidth">
// 							<label htmlFor="date" className="required">Date</label>
// 							<input
// 								id="date"
// 								name="date"
// 								value={date}
// 								onChange={e => dispatch({ type: "date", payload: e.target.value})}
// 								type="date"
// 								required
// 							/>
// 						</fieldset>
// 						<fieldset className="fullwidth">
// 							<label htmlFor="time" className="required">Time</label>
// 							<select
// 								id="time"
// 								name="time"
// 								value={time}
// 								onChange={e => dispatch({ type: "time", payload: e.target.value})}
// 							>
// 								<option value="Select a time">Select a time</option>
// 								{availableTimes.map(option => (
// 									<option key={option} value={option}>{option}</option>
// 								))}
// 							</select>
// 						</fieldset>
// 						<fieldset>
// 							<div className="col">
// 								<label htmlFor="guests" className="required">Number of Guests</label>
// 								<p className="small">Choose a number between 1 & 10</p>
// 							</div>
// 							<div className="col">
// 								<button className="btn btn-text" onClick={() => guests > 1 ? dispatch({ type: "guests", payload: guests - 1}) : dispatch({ type: "guests", payload: 1})}>
// 									<Minus />
// 								</button>
// 								<input
// 									id="guests"
// 									name="guests"
// 									value={guests}
// 									onChange={e => dispatch({ type: "guests", payload: e.target.value})}
// 									type="number"
// 									required
// 								/>
// 								<button className="btn btn-text" onClick={() => guests < 10 ? dispatch({ type: "guests", payload: guests + 1}) : dispatch({ type: "guests", payload: 10})}>
// 									<Plus />
// 								</button>
// 							</div>
// 						</fieldset>
// 						<fieldset>
// 							<label>Patio or Dining Room?</label>
// 							<div className="col">
// 								<input
// 									id="dining-room"
// 									name="location"
// 									value="Dining Room"
// 									onChange={e => dispatch({ type: "location", payload: e.target.value})}
// 									checked={location === "Dining Room"}
// 									type="radio"
// 								/>
// 								<label htmlFor="dining-room">Dining Room</label>
// 								<input
// 									id="patio"
// 									name="location"
// 									value="Patio"
// 									onChange={e => dispatch({ type: "location", payload: e.target.value})}
// 									checked={location === "Patio"}
// 									type="radio"
// 								/>
// 								<label htmlFor="patio">Patio</label>
// 							</div>
// 						</fieldset>
// 						<div className="form-buttons justify-content-end">
// 							<button
// 								className="btn btn-primary"
// 								onClick={() => dispatch({ type: "currentStep", payload: 2})}
// 								disabled={!checkValidation1()}
// 							>Next</button>
// 						</div>
// 					</FormSection>
// 					<FormSection id="reservation-information" container="container-sm" show={currentStep >= 2 ? true : false}>
// 						<h2>Give us the deets!</h2>
// 						<fieldset className="fullwidth">
// 							<label htmlFor="name" className="required">Name</label>
// 							<input
// 								id="name"
// 								name="name"
// 								value={name}
// 								onChange={e => dispatch({ type: "name", payload: e.target.value})}
// 								type="text"
// 								placeholder="John Smith"
// 								required
// 							/>
// 						</fieldset>
// 						<fieldset className="fullwidth">
// 							<label htmlFor="phone" className="required">Phone</label>
// 							<input
// 								id="phone"
// 								name="phone"
// 								value={phone}
// 								onChange={e => dispatch({ type: "phone", payload: e.target.value})}
// 								type="phone"
// 								placeholder="000-000-0000"
// 								required
// 							/>
// 						</fieldset>
// 						<fieldset className="fullwidth">
// 							<label htmlFor="email">Name</label>
// 							<input
// 								id="email"
// 								name="email"
// 								value={email}
// 								onChange={e => dispatch({ type: "email", payload: e.target.value})}
// 								type="email"
// 								placeholder="johnsmith@example.com"
// 							/>
// 						</fieldset>
// 						<fieldset className="fullwidth">
// 							<label htmlFor="occasion" className="required">Occasion</label>
// 							<select
// 								id="occasion"
// 								name="occasion"
// 								value={occasion}
// 								onChange={e => dispatch({ type: "occasion", payload: e.target.value })}
// 							>
// 								{occasions.map(option => (
// 									<option key={option} value={option}>{option}</option>
// 								))}
// 							</select>
// 						</fieldset>
// 						{occasion === "Other" ? (
// 							<fieldset className="fullwidth">
// 								<label htmlFor="other" className="required">Other</label>
// 								<input
// 									id="other"
// 									name="other"
// 									value={other}
// 									onChange={e => dispatch({ type: "other", payload: e.target.value })}
// 									type="text"
// 									required={occasion === "Other"}
// 								/>
// 							</fieldset>
// 						) : null}
// 						<fieldset className="fullwidth">
// 							<label htmlFor="requests">Special Requests</label>
// 							<textarea
// 								id="requests"
// 								name="requests"
// 								value={requests}
// 								onChange={e => dispatch({ type: "requests", payload: e.target.value })}
// 							></textarea>
// 						</fieldset>
// 						<div className="form-buttons">
// 							<button
// 								className="btn btn-subtle"
// 								onClick={() => dispatch({ type: "currentStep", payload: 1})}
// 							>Back</button>
// 							<input
// 								type="submit"
// 								className="btn btn-primary"
// 								value="Reserve a table"
// 								onClick={() => dispatch({ type: "currentStep", payload: 3})}
// 								disabled={!checkValidation2()}
// 							/>
// 						</div>
// 					</FormSection>
// 				</form>
// 				{showConfirmed && currentStep >= 3 ? (
// 					<ConfirmedBooking {...props} fullDate={fullDate} />
// 				) : null}
// 			</div>
// 		</>
// 	)
// }

const BookingForm = props => {
	const [availableOccasions, availableTimes, dispatch, state] = [props.state.availableOccasions, props.state.availableTimes, props.dispatch, props.state];

	// console.log(state.date)
	// console.log(availableTimes)
	return (
		<FormContainer
			initialValues={state}
			onSubmit={values => console.log('Submit', values)}
		>
			<Step
					validationSchema={object({
						date: date()
							.notOneOf([''], 'Please select a date.')
							.required('Please select a date.'),
						time: string()
							.notOneOf(['Select a time'], 'Please select a time.')
							.required('Please select a time.'),
						guests: number()
							.min(1, 'Reservations must be for at least 1 person.')
							.max(10, "Online reservations can't be made for more than 10 guests. Please call us at 555-555-5555.")
							.required("Please enter a number of guests between 1 & 10.")
					})}
				>
					<div className="container-sm">
						<h2>When will we see ya?</h2>
						<fieldset className="fullwidth">
							<label htmlFor="date" className="required">Date</label>
							<Field
								type="date"
								id="date"
								name="date"
								value={state.date}
								onChange={e => dispatch({ type: "date", value: e.target.value })}
							/>
							<ErrorMessage className="error" component="div" name="date" />
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="time" className="required">Time</label>
							<Field
								as="select"
								id="time"
								name="time"
							>
								<option value="Select a time">Select a time</option>
								{availableTimes.map(t => (
									<option key={t} value={t}>{t}</option>
								))}
							</Field>
							<ErrorMessage className="error" component="div" name="time" />
						</fieldset>
						<fieldset>
							<div className="col">
								<label htmlFor="guests" className="required">Number of guests</label>
								<p className="small">Choose a number between 1 & 10.</p>
							</div>
							<div className="col">
								{/* <button type="button" className="btn btn-text" onClick={() => state.guests > 1 ? dispatch({ type: "guests", value: state.guests - 1 }) : dispatch({ type: "guests", value: 1 })}>
									<Minus />
								</button> */}
								<Field
									type="number"
									id="guests"
									name="guests"
								/>
								{/* <button type="button" className="btn btn-text" onClick={() => state.guests < 10 ? dispatch({ type: "guests", value: state.guests + 1 }) : dispatch({ type: "guests", value: 10 })}>
									<Plus />
								</button> */}
							</div>
							<ErrorMessage className="error" component="div" name="guests" />
						</fieldset>
						<fieldset>
							<div className="col">
								<label>Patio or Dining Room?</label>
							</div>
							<div className="col">
									<label className="radio">
										<Field
											type="radio"
											id="patio"
											name="location"
											value="Patio"
											onChange={e => dispatch({ type: "location", value: e.target.value })}
											checked={state.location === "Patio"}
										/>
										Patio
									</label>
									<label className="radio">
										<Field
											type="radio"
											id="dining-room"
											name="location"
											value="Dining Room"
											onChange={e => dispatch({ type: "location", value: e.target.value })}
											checked={state.location === "Dining Room"}
										/>
										Dining Room
									</label>
							</div>
							<ErrorMessage className="error" component="div" name="location" />
						</fieldset>
					</div>
			</Step>
			<Step
					validationSchema={object({
						name: string().required('Please enter your name.'),
						phone: string()
							.min(10, 'Please enter your full phone number (including area code).')
							.required('Please enter your phone number.'),
						email: string().email('Invalid email address.'),
						occasion: string()
							.notOneOf(['Select an occasion'], 'Please select an occasion.')
							.required('Please select an occasion'),
						other: string()
							.when('occasion', {
								is: 'Other',
								then: schema => schema.required(),
								otherwise: schema => schema.notRequired(),
							}),
					})}
				>
					<div className="container-sm">
						<h2>Give us the deets!</h2>
						<fieldset className="fullwidth">
							<label htmlFor="name" className="required">Name</label>
							<Field
								type="text"
								id="name"
								name="name"
								autoComplete="name"
								placeholder="John Smith"
							/>
							<ErrorMessage className="error" component="div" name="name" />
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="phone" className="required">Phone</label>
							<Field
								type="tel"
								id="phone"
								name="phone"
								autoComplete="tel"
								placeholder="000-000-0000"
							/>
							<ErrorMessage className="error" component="div" name="phone" />
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="email">Email</label>
							<Field
								type="email"
								id="email"
								name="email"
								autoComplete="email"
								placeholder="johnsmith@example.com"
							/>
							<ErrorMessage className="error" component="div" name="email" />
						</fieldset>
						<fieldset className="fullwidth">
							<label htmlFor="occasion" className="required">Occasion</label>
							<Field
								as="select"
								id="occasion"
								name="occasion"
							>
								<option value="Select an occasion">Select an occasion</option>
								{availableOccasions.map(option => (
									<option key={option} value={option}>{option}</option>
								))}
							</Field>
							<ErrorMessage className="error" component="div" name="occasion" />
						</fieldset>
						{/* <fieldset className="fullwidth">
							<label htmlFor="other" className="required">Other</label>
							<Field
								type="text"
								id="other"
								name="other"
								placeholder="List other occasion here"
							/>
							<ErrorMessage className="error" component="div" name="other" />
						</fieldset> */}
						<fieldset className="fullwidth">
							<label htmlFor="request">Special Requests</label>
							<Field
								as="textarea"
								id="request"
								name="request"
							/>
						</fieldset>
					</div>
			</Step>
		</FormContainer>
	)
};

const FormContainer = props => {
	const [stepNumber, setStepNumber] = useState(0);
	const steps = React.Children.toArray(props.children);
	const [snapshot, setSnapshot] = useState(props.initialValues);

	const step = steps[stepNumber];
	const totalSteps = steps.length;
	const isLastStep = stepNumber === totalSteps - 1;

	const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

	const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

	const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return (props.onSubmit(values, bag));
    } else {
      bag.setTouched({});
      next(values);
    }
  };

	return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {formik => (
				<>
					<Stepper stepNumber={stepNumber} />

					<Form id="reservation">
						{step}
						<div className="container">
							<div className={`form-buttons${isLastStep ? "" : " justify-content-end"}`}>
								{stepNumber > 0 && (
									<button className="btn btn-subtle" onClick={() => previous(formik.values)} type="button">
										Back
									</button>
								)}
								<button className="btn btn-primary" disabled={formik.isSubmitting} type="submit">
									{isLastStep ? 'Reserve a table' : 'Next'}
								</button>
							</div>
						</div>
					</Form>
				</>
      )}
    </Formik>
  );
}

const Step = ({ children }) => children;

const Stepper = props => {
	const stepNumber = props.stepNumber;

	return (
		<section id="stepper">
			<div className="container-sm">
				<section className="stepper">
					<StepperItem
						step={0}
						label="Reservation Details"
						stepNumber={stepNumber}
					/>
					<StepperItem
						step={1}
						label="Your Information"
						stepNumber={stepNumber}
					/>
					<StepperItem
						step={2}
						label="Confirmation"
						stepNumber={stepNumber}
					/>
				</section>
			</div>
		</section>
	)
}

const StepperItem = props => {
	const [label, step, stepNumber] = [props.label, props.step, props.stepNumber];

	if (step < stepNumber) {
		return (
			<div className="step complete">
				<div className="step-icon">
					<Check fill="#FFFFFF" />
				</div>
				<p className="step-label">{label}</p>
			</div>
		)
	}

	if (step === stepNumber) {
		return (
			<div className="step current">
				<div className="step-icon">
					{step + 1}
				</div>
				<p className="step-label">{label}</p>
			</div>
		)
	}

	if (step > stepNumber) {
		return (
			<div className="step">
				<div className="step-icon">
					{step + 1}
				</div>
				<p className="step-label">{label}</p>
			</div>
		)
	}
}

export default BookingForm;